import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'
import { getProjectDetail } from '../config/projectDetails'
import { renderComponent, textContent } from '../test-utils/renderComponent'
import ProjectDetail from './ProjectDetail.vue'

const HEADING_KEYS = [
  'contributions',
  'problem',
  'role',
  'architecture',
  'tradeoffs',
  'outcomes'
]
const render = locale =>
  renderComponent(
    { render: () => h(ProjectDetail, { slug: 'kserve' }) },
    { locale }
  )

const section = (html, key) =>
  html.match(
    new RegExp(
      `<section[^>]*aria-labelledby="project-${key}"[^>]*>(.*?)</section>`,
      's'
    )
  )?.[1]

const hero = html => html.slice(0, html.indexOf('<section'))

// 架構圖每一步（分支步驟裡有多個 flow-branch）
const flowSteps = flow =>
  flow.split(/<li class="[^"]*\bflow-step\b[^"]*"[^>]*>/).slice(1)

const codeTag = code =>
  new RegExp(`<code[^>]*>${code.replace(/[.()]/g, '\\$&')}</code>`)

describe.each([
  ['zh-TW', zhTW],
  ['en', en],
  ['ja', ja]
])('KServe project detail page in %s', (locale, messages) => {
  const copy = messages.projectDetail

  it('titles the page with the project name', async () => {
    const html = await render(locale)
    expect(textContent(html.match(/<h1[^>]*>(.*?)<\/h1>/s)[1])).toBe(
      copy.kserve.title
    )
  })

  it('opens with a one-paragraph summary, the role and the stack before any section', async () => {
    const top = textContent(hero(await render(locale)))
    const card = messages.projects.featured.items.kserve

    expect(top).toContain(copy.kserve.overview[0])
    expect(top).toContain(card.role)
    for (const tech of ['Python', 'Go', 'Kubernetes', 'CRD', 'Helm']) {
      expect(top).toContain(tech)
    }
  })

  it('follows the project detail template headings in order', async () => {
    const html = await render(locale)
    const headings = [...html.matchAll(/<h2[^>]*>(.*?)<\/h2>/gs)].map(
      ([, text]) => textContent(text)
    )
    expect(headings).toEqual(HEADING_KEYS.map(key => copy.headings[key]))
  })

  it('numbers its sections in reading order', async () => {
    const html = await render(locale)
    const numbers = [
      ...html.matchAll(/class="section-kicker-index">(\d+)</g)
    ].map(([, number]) => number)

    expect(numbers).toEqual(['01', '02', '03', '04', '05', '06'])
  })

  it('leads with every contribution, its status, pull request and issue', async () => {
    const glance = section(await render(locale), 'contributions')

    for (const path of [
      'pull/4687',
      'pull/5198',
      'issues/3919',
      'issues/5057'
    ]) {
      expect(glance).toContain(
        `href="https://github.com/kserve/kserve/${path}"`
      )
    }
    expect(textContent(glance)).toContain(
      messages.projects.featured.status.merged
    )
    expect(textContent(glance)).toContain(
      messages.projects.featured.status.open
    )
  })

  it('draws where each change takes effect as an ordered flow per contribution', async () => {
    const architecture = section(await render(locale), 'architecture')
    const figure = architecture.match(/<figure[^>]*>(.*?)<\/figure>/s)[1]
    const flows = [...figure.matchAll(/<ol[^>]*>(.*?)<\/ol>/gs)].map(
      ([, list]) => list
    )
    const { contributions } = getProjectDetail('kserve')

    expect(flows).toHaveLength(contributions.length)
    flows.forEach((flow, index) => {
      const { id, flow: steps } = contributions[index]
      const texts = copy.kserve.diagram.steps[id]
      const items = flowSteps(flow)
      expect(items).toHaveLength(steps.length)
      steps.forEach((step, position) => {
        const branches = Array.isArray(step) ? step : [{ code: step }]
        const stepTexts = [texts[position]].flat()
        branches.forEach(({ code }, branch) => {
          expect(items[position]).toMatch(codeTag(code))
          expect(textContent(items[position])).toContain(stepTexts[branch])
        })
      })
    })
    expect(textContent(figure)).toContain(copy.kserve.diagram.caption)
  })

  it('applies the default logging config only when no handlers exist', async () => {
    const architecture = section(await render(locale), 'architecture')
    const [logging] = [...architecture.matchAll(/<ol[^>]*>(.*?)<\/ol>/gs)].map(
      ([, list]) => list
    )
    const [whenHandlersExist, whenNoHandlers] = flowSteps(logging)
      .at(-1)
      .split(/<div class="flow-branch"[^>]*>/)
      .slice(1)

    expect(textContent(whenHandlersExist).startsWith(copy.branch.yes)).toBe(
      true
    )
    expect(whenHandlersExist).toMatch(codeTag('return'))
    expect(textContent(whenNoHandlers).startsWith(copy.branch.no)).toBe(true)
    expect(whenNoHandlers).toMatch(codeTag('dictConfig()'))
  })

  it('shows no media section when the project has no media or coverage', async () => {
    const html = await render(locale)

    expect(section(html, 'media')).toBeUndefined()
    expect(html).not.toContain('<img')
  })

  it('links back to the Projects page', async () => {
    const html = await render(locale)
    expect(html).toMatch(
      new RegExp(
        `<a[^>]*href="/projects"[^>]*>\\s*(<[^>]+>\\s*)*${copy.backToProjects}`
      )
    )
  })

  it('renders no raw translation keys', async () => {
    expect(textContent(await render(locale))).not.toMatch(
      /projectDetail\.|meta\./
    )
  })
})

describe('ProjectDetail with an unknown slug', () => {
  it.each(['not-a-project', 'constructor', '__proto__'])(
    'renders nothing for %s instead of throwing',
    async slug => {
      const html = await renderComponent({
        render: () => h(ProjectDetail, { slug })
      })
      expect(html).not.toContain('<h1')
    }
  )
})
