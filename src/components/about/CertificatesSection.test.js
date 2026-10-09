import { describe, expect, it } from 'vitest'
import { renderComponent, textContent } from '../../test-utils/renderComponent'
import CertificatesSection from './CertificatesSection.vue'

describe('CertificatesSection', () => {
  it('starts collapsed in an accordion headed by the section title', async () => {
    const html = await renderComponent(CertificatesSection)

    expect(html).toMatch(/<details class="ts-accordion"(?![^>]*\bopen\b)[^>]*>/)
    expect(html).toMatch(/<summary[^>]*>\s*<h2[^>]*>證照<\/h2>\s*<\/summary>/)
  })

  it('does not publish certificate serial numbers', async () => {
    const html = await renderComponent(CertificatesSection)

    expect(html).not.toContain('序號')
    expect(html).not.toContain('2321170800001350')
    expect(html).not.toContain('yyC5-DwWu')
    const [headerRow] = html.match(/<thead.*?<\/thead>/s)
    expect(headerRow.match(/<th[\s>]/g)).toHaveLength(4)
  })

  it('spells the Azure certification correctly', async () => {
    const text = textContent(await renderComponent(CertificatesSection))

    expect(text).toContain('Microsoft Certified Azure AI Fundamentals')
    expect(text).not.toContain('Mircosoft')
  })
})
