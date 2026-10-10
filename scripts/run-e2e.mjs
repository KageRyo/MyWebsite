import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { setTimeout as delay } from 'node:timers/promises'
import { chromium } from 'playwright'

const host = '127.0.0.1'
const port = 4175
const baseUrl = `http://${host}:${port}`
const server = spawn(
  process.execPath,
  [
    'node_modules/vite/bin/vite.js',
    '--host',
    host,
    '--port',
    String(port),
    '--strictPort'
  ],
  {
    stdio: 'inherit'
  }
)

const waitForServer = async () => {
  for (let attempt = 0; attempt < 30; attempt += 1) {
    try {
      const response = await fetch(baseUrl)
      if (response.ok) return
    } catch {
      // Vite is still starting.
    }
    await delay(500)
  }
  throw new Error(`Vite did not become available at ${baseUrl}`)
}

// GitHub API 以固定資料回應，避免測試受速率限制影響
const repositories = account => [
  {
    id: 1,
    name: `${account}-repo`,
    description: `Repository of ${account}`,
    html_url: `https://github.com/${account}/${account}-repo`,
    updated_at: '2026-01-01T00:00:00Z',
    fork: false,
    archived: false,
    private: false
  }
]

const newPage = async (
  browser,
  {
    viewport = { width: 1280, height: 800 },
    storage = {},
    colorScheme = 'light'
  } = {}
) => {
  const context = await browser.newContext({ viewport, colorScheme })
  await context.addInitScript(values => {
    for (const [key, value] of Object.entries(values)) {
      if (localStorage.getItem(key) === null) localStorage.setItem(key, value)
    }
  }, storage)
  await context.route('https://api.github.com/users/*/repos*', route => {
    const account = new URL(route.request().url()).pathname.split('/')[2]
    return route.fulfill({ json: repositories(account) })
  })
  const page = await context.newPage()
  return { context, page }
}

const tests = {
  async 'desktop navigation reaches every page and marks the active tab'(
    browser
  ) {
    const { context, page } = await newPage(browser)
    await page.goto(baseUrl)
    const nav = page.locator('header nav')
    for (const [label, path] of [
      ['關於我', '/about'],
      ['作品集', '/projects'],
      ['聯絡我', '/contact'],
      ['首頁', '/']
    ]) {
      await nav.getByRole('link', { name: label }).click()
      await page.waitForURL(`${baseUrl}${path}`)
      await page.locator('h1').first().waitFor()
      assert.equal(await nav.locator('.item.is-active').innerText(), label)
      assert.equal(
        await page.evaluate(() => document.activeElement?.id),
        'main-content'
      )
    }
    await context.close()
  },

  async 'unknown routes render the not-found page'(browser) {
    const { context, page } = await newPage(browser)
    await page.goto(`${baseUrl}/does-not-exist`)
    await page.getByRole('link', { name: '回到首頁' }).waitFor()
    assert.match(await page.title(), /找不到頁面/)
    await context.close()
  },

  async 'language selection translates the UI and persists after reload'(
    browser
  ) {
    const { context, page } = await newPage(browser)
    await page.goto(`${baseUrl}/about`)
    await page.locator('#language-select').selectOption('en')
    await page
      .locator('header nav')
      .getByRole('link', { name: 'About' })
      .waitFor()
    assert.equal(await page.evaluate(() => document.documentElement.lang), 'en')
    await page.reload()
    await page
      .locator('header nav')
      .getByRole('link', { name: 'About' })
      .waitFor()
    assert.equal(await page.locator('#language-select').inputValue(), 'en')
    await page.locator('#language-select').selectOption('ja')
    await page
      .locator('header nav')
      .getByRole('link', { name: 'ホーム' })
      .waitFor()
    await context.close()
  },

  async 'theme toggle overrides the OS preference and persists'(browser) {
    const { context, page } = await newPage(browser, { colorScheme: 'dark' })
    await page.goto(baseUrl)
    const html = page.locator('html')
    assert.match(await html.getAttribute('class'), /is-dark/)
    await page.getByRole('button', { name: '切換到淺色模式' }).click()
    assert.match(await html.getAttribute('class'), /is-light/)
    await page.reload()
    await page.locator('h1').first().waitFor()
    assert.match(await html.getAttribute('class'), /is-light/)
    assert.equal(
      await page.evaluate(() => localStorage.getItem('themePreference')),
      'light'
    )
    await context.close()
  },

  async 'mobile drawer traps focus, closes with Escape, and navigates'(
    browser
  ) {
    const { context, page } = await newPage(browser, {
      viewport: { width: 390, height: 844 }
    })
    await page.goto(baseUrl)
    assert.equal(await page.locator('header nav').isVisible(), false)
    const menuButton = page.getByRole('button', { name: '導航欄' })
    await menuButton.click()
    assert.equal(await menuButton.getAttribute('aria-expanded'), 'true')
    const drawer = page.locator('#mobile-navigation')
    await page.waitForFunction(() =>
      document.activeElement?.closest('#mobile-navigation')
    )
    for (let step = 0; step < 12; step += 1) {
      await page.keyboard.press('Tab')
      assert.ok(
        await page.evaluate(() =>
          Boolean(document.activeElement?.closest('#mobile-navigation'))
        ),
        'focus left the drawer'
      )
    }
    await page.keyboard.press('Escape')
    await page.waitForFunction(() =>
      document.querySelector('#mobile-navigation')?.hasAttribute('inert')
    )
    assert.equal(await menuButton.getAttribute('aria-expanded'), 'false')
    assert.equal(
      await page.evaluate(() =>
        document.activeElement?.getAttribute('aria-controls')
      ),
      'mobile-navigation'
    )
    await menuButton.click()
    await drawer.getByRole('link', { name: '作品集' }).click()
    await page.waitForURL(`${baseUrl}/projects`)
    await page.waitForFunction(() =>
      document.querySelector('#mobile-navigation')?.hasAttribute('inert')
    )
    await context.close()
  },

  async 'see more drawer opens from the home page and returns focus'(browser) {
    const { context, page } = await newPage(browser)
    await page.goto(baseUrl)
    const trigger = page.getByRole('button', { name: '查看更多' })
    await trigger.click()
    await page.waitForFunction(() => document.activeElement?.closest('#more'))
    await page.keyboard.press('Escape')
    await page.waitForFunction(() =>
      document.querySelector('#more')?.hasAttribute('inert')
    )
    assert.equal(
      await trigger.evaluate(element => element === document.activeElement),
      true
    )
    await context.close()
  },

  async 'GitHub archive tabs support keyboard selection and load each account'(
    browser
  ) {
    const { context, page } = await newPage(browser)
    const requests = []
    page.on('request', request => {
      if (request.url().startsWith('https://api.github.com/'))
        requests.push(new URL(request.url()).pathname)
    })
    await page.goto(`${baseUrl}/projects`)
    const tabs = page.getByRole('tab')
    await page
      .getByRole('link', { name: 'KageRyo-repo', exact: true })
      .waitFor()
    await tabs.first().focus()
    await page.keyboard.press('ArrowRight')
    const selected = page.locator('[role="tab"][aria-selected="true"]')
    assert.equal(await selected.innerText(), 'CodeRyo')
    assert.equal(
      await selected.evaluate(element => element === document.activeElement),
      true
    )
    assert.equal(
      await page.locator('[role="tabpanel"]').getAttribute('id'),
      await selected.getAttribute('aria-controls')
    )
    await page
      .getByRole('link', { name: 'CodeRyoStudio-repo', exact: true })
      .waitFor()
    await page.keyboard.press('End')
    assert.equal(await selected.innerText(), 'CodeRyoMC')
    await page
      .getByRole('link', { name: 'CodeRyoMC-repo', exact: true })
      .waitFor()
    await page.keyboard.press('Home')
    assert.equal(await selected.innerText(), 'KageRyo')
    assert.deepEqual(
      requests.toSorted((left, right) => left.localeCompare(right)),
      [
        '/users/CodeRyoMC/repos',
        '/users/CodeRyoStudio/repos',
        '/users/KageRyo/repos'
      ]
    )
    await context.close()
  },

  async 'pages fit a 390px mobile screen in every language'(browser) {
    const overflowing = []
    for (const locale of ['zh-TW', 'en', 'ja']) {
      const { context, page } = await newPage(browser, {
        viewport: { width: 390, height: 844 },
        storage: { locale }
      })
      for (const path of [
        '/',
        '/about',
        '/projects',
        '/contact',
        '/projects/kserve'
      ]) {
        await page.goto(`${baseUrl}${path}`)
        await page.locator('h1').first().waitFor()
        const width = await page.evaluate(
          () => document.documentElement.scrollWidth
        )
        if (width > 390) overflowing.push(`${locale} ${path}: ${width}px`)
      }
      await context.close()
    }
    assert.deepEqual(overflowing, [])
  },

  async 'KServe card opens its project detail page and unknown slugs show 404'(
    browser
  ) {
    const { context, page } = await newPage(browser)
    await page.goto(`${baseUrl}/projects`)
    await page.getByRole('link', { name: '查看專案介紹' }).click()
    await page.waitForURL(`${baseUrl}/projects/kserve`)
    await page
      .getByRole('heading', { level: 1, name: 'KServe (CNCF) 開源貢獻' })
      .waitFor()
    assert.match(await page.title(), /KServe/)
    await page.getByRole('link', { name: '回到作品集' }).click()
    await page.waitForURL(`${baseUrl}/projects`)

    await page.goto(`${baseUrl}/projects/not-a-project`)
    await page.getByRole('link', { name: '回到首頁' }).waitFor()
    assert.equal(page.url(), `${baseUrl}/projects/not-a-project`)
    assert.match(await page.title(), /找不到頁面/)
    await context.close()
  },

  async 'project detail URLs validate every slug and keep 作品集 active'(
    browser
  ) {
    const desktop = await newPage(browser)
    const { page } = desktop
    const errors = []
    page.on('pageerror', error => errors.push(error.message))
    const navigate = path =>
      page.evaluate(
        target =>
          document
            .querySelector('#app')
            .__vue_app__.config.globalProperties.$router.push(target),
        path
      )

    for (const slug of ['constructor', 'toString', '__proto__']) {
      await page.goto(`${baseUrl}/projects/${slug}`)
      await page.getByRole('link', { name: '回到首頁' }).waitFor()
    }

    // 站內只換參數時同樣要檢查專案是否存在
    await page.goto(`${baseUrl}/projects/kserve`)
    assert.equal(
      await page.locator('header nav .item.is-active').innerText(),
      '作品集'
    )
    await navigate('/projects/not-a-project')
    await page.getByRole('link', { name: '回到首頁' }).waitFor()
    assert.match(await page.title(), /找不到頁面/)
    await navigate('/projects/kserve')
    await page
      .getByRole('heading', { level: 1, name: 'KServe (CNCF) 開源貢獻' })
      .waitFor()
    assert.match(await page.title(), /KServe/)
    assert.deepEqual(errors, [])
    await desktop.context.close()

    const mobile = await newPage(browser, {
      viewport: { width: 390, height: 844 }
    })
    await mobile.page.goto(`${baseUrl}/projects/kserve`)
    await mobile.page.getByRole('button', { name: '導航欄' }).click()
    assert.equal(
      (
        await mobile.page
          .locator('#mobile-navigation .item.is-active')
          .innerText()
      ).trim(),
      '作品集'
    )
    await mobile.context.close()
  },

  async 'trailing-slash URLs settle on the canonical route'(browser) {
    const { context, page } = await newPage(browser)
    // GitHub Pages 會把 /projects 導向 /projects/
    await page.goto(`${baseUrl}/projects/`)
    await page.waitForURL(`${baseUrl}/projects`)
    assert.equal(
      await page.locator('header nav .item.is-active').innerText(),
      '作品集'
    )
    await context.close()
  },

  async 'contact form previews the email and keeps a copy fallback'(browser) {
    const { context, page } = await newPage(browser)
    await context.grantPermissions(['clipboard-read', 'clipboard-write'], {
      origin: baseUrl
    })
    await page.goto(`${baseUrl}/contact`)
    await page.fill('#contact-name', 'Ada Lovelace')
    await page.fill('#contact-email', 'ada@example.com')
    await page.fill('#contact-message', 'Hello from the e2e test.')
    await page.getByRole('button', { name: '預覽郵件內容' }).click()

    const dialog = page.getByRole('dialog', { name: '郵件內容' })
    await dialog.waitFor()
    const body = await dialog.locator('.email-body').innerText()
    assert.equal(
      body,
      '姓名：Ada Lovelace\n電子郵件：ada@example.com\n\n訊息內容：\nHello from the e2e test.'
    )
    const openMail = dialog.getByRole('link', { name: '開啟郵件程式' })
    const href = new URL(await openMail.getAttribute('href'))
    assert.equal(href.protocol, 'mailto:')
    assert.equal(decodeURIComponent(href.pathname), 'kageryo@coderyo.com')
    assert.equal(href.searchParams.get('body'), body)

    // 不實際開啟郵件程式，只確認預覽仍保留並提示使用者自行寄出
    await openMail.evaluate(link =>
      link.addEventListener('click', event => event.preventDefault(), {
        once: true
      })
    )
    await openMail.click()
    assert.equal(await dialog.isVisible(), true)
    await dialog
      .getByRole('status')
      .filter({ hasText: '已嘗試開啟郵件程式' })
      .waitFor()

    await dialog.getByRole('button', { name: '複製全部內容' }).click()
    await dialog.getByRole('status').filter({ hasText: '已複製' }).waitFor()
    const clipboard = await page.evaluate(() => navigator.clipboard.readText())
    assert.ok(clipboard.includes(body), 'copied text is missing the email body')

    await dialog.getByRole('button', { name: '關閉' }).click()
    await dialog.waitFor({ state: 'hidden' })
    assert.equal(await page.inputValue('#contact-name'), 'Ada Lovelace')
    assert.equal(
      await page.inputValue('#contact-message'),
      'Hello from the e2e test.'
    )
    await context.close()
  },

  async 'photos scale to their containers on desktop and mobile'(browser) {
    const oversized = []
    for (const viewport of [
      { width: 1280, height: 800 },
      { width: 390, height: 844 }
    ]) {
      const { context, page } = await newPage(browser, { viewport })
      for (const path of ['/', '/about']) {
        await page.goto(`${baseUrl}${path}`)
        await page.locator('h1').first().waitFor()
        const found = await page.$$eval('.ts-image img', images =>
          images
            .filter(
              image =>
                image.getBoundingClientRect().width >
                image.parentElement.getBoundingClientRect().width + 1
            )
            .map(image => image.getAttribute('src'))
        )
        oversized.push(
          ...found.map(src => `${viewport.width}px ${path} ${src}`)
        )
      }
      await context.close()
    }
    assert.deepEqual(oversized, [])
  },

  async 'photos load when scrolled into view'(browser) {
    const { context, page } = await newPage(browser)
    const broken = []
    for (const path of ['/', '/about']) {
      await page.goto(`${baseUrl}${path}`)
      await page.locator('h1').first().waitFor()
      for (const image of await page.locator('.ts-image img').all()) {
        await image.scrollIntoViewIfNeeded()
        const loaded = await image
          .evaluate(
            element =>
              new Promise(resolve => {
                const done = () =>
                  resolve(element.complete && element.naturalWidth > 0)
                if (element.complete) done()
                else {
                  element.addEventListener('load', done, { once: true })
                  element.addEventListener('error', done, { once: true })
                }
              })
          )
          .catch(() => false)
        if (!loaded) broken.push(`${path} ${await image.getAttribute('src')}`)
      }
    }
    assert.deepEqual(broken, [])
    await context.close()
  },

  async 'page banners line up with the content below'(browser) {
    const misaligned = []
    for (const width of [1280, 1024, 390]) {
      const { context, page } = await newPage(browser, {
        viewport: { width, height: 844 }
      })
      for (const path of ['/projects', '/contact']) {
        await page.goto(`${baseUrl}${path}`)
        await page.locator('main h2').first().waitFor()
        const [title, heading] = await page.evaluate(() =>
          [
            document.querySelector('main h1'),
            document.querySelector('main h2')
          ].map(element => Math.round(element.getBoundingClientRect().left))
        )
        if (title !== heading)
          misaligned.push(`${width}px ${path}: ${title} vs ${heading}`)
      }
      await context.close()
    }
    assert.deepEqual(misaligned, [])
  },

  async 'GitHub archive shows a retry state when the API is rate limited'(
    browser
  ) {
    const { context, page } = await newPage(browser)
    await context.route('https://api.github.com/users/*/repos*', route =>
      route.fulfill({ status: 403, json: { message: 'rate limited' } })
    )
    await page.goto(`${baseUrl}/projects`)
    await page.getByRole('alert').waitFor()
    await context.unroute('https://api.github.com/users/*/repos*')
    await context.route('https://api.github.com/users/*/repos*', route =>
      route.fulfill({ json: repositories('KageRyo') })
    )
    await page.getByRole('button', { name: '嘗試重新載入' }).click()
    await page
      .getByRole('link', { name: 'KageRyo-repo', exact: true })
      .waitFor()
    await context.close()
  }
}

let failed = 0
try {
  await waitForServer()
  const browser = await chromium.launch()
  for (const [name, test] of Object.entries(tests)) {
    try {
      await test(browser)
      console.log(`✓ ${name}`)
    } catch (error) {
      failed += 1
      console.error(`✗ ${name}\n  ${error.stack ?? error}`)
    }
  }
  await browser.close()
} finally {
  server.kill()
}

if (failed) {
  console.error(`${failed} end-to-end test(s) failed`)
  process.exitCode = 1
}
