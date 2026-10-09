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
    assert.deepEqual(requests.sort(), [
      '/users/CodeRyoMC/repos',
      '/users/CodeRyoStudio/repos',
      '/users/KageRyo/repos'
    ])
    await context.close()
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
