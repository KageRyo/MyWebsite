import { describe, expect, it } from 'vitest'
import { h } from 'vue'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import SectionKicker from './SectionKicker.vue'

const render = props =>
  renderComponent({ render: () => h(SectionKicker, props) })

describe('SectionKicker', () => {
  it('shows the section number and name above a heading', async () => {
    const html = await render({ index: '02', label: 'Education' })

    expect(textContent(html)).toBe('02 / Education')
    expect(html).toMatch(/<span class="section-kicker-index"[^>]*>02<\/span>/)
  })

  it('is hidden from assistive technology because the heading names the section', async () => {
    const html = await render({ index: '01', label: 'Introduction' })

    expect(html).toMatch(/^<p class="section-kicker" aria-hidden="true"[^>]*>/)
  })
})
