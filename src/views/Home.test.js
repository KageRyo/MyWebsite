import { describe, expect, it } from 'vitest'
import { renderComponent } from '../test-utils/renderComponent'
import Home from './Home.vue'

describe('Home page', () => {
  it('shows selected work right after the introduction, before the quote and photos', async () => {
    const html = await renderComponent(Home)
    const order = [
      '</h1>',
      'aria-labelledby="home-selected-work"',
      'ts-quote',
      'ministry-of-education.webp',
      'KageRyo Developer</div>'
    ].map(marker => html.indexOf(marker))

    expect(order.every(position => position >= 0)).toBe(true)
    expect(order).toEqual([...order].sort((left, right) => left - right))
  })

  it('makes View Projects the only filled button in the introduction', async () => {
    const html = await renderComponent(Home)
    const hero = html.slice(
      0,
      html.indexOf('aria-labelledby="home-selected-work"')
    )
    const buttons = [
      ...hero.matchAll(/<(a|button)[^>]*class="(ts-button[^"]*)"[^>]*>/g)
    ].map(([tag, , classes]) => ({
      tag,
      filled: !classes.split(' ').includes('is-outlined')
    }))
    const filled = buttons.filter(({ filled }) => filled)

    expect(buttons.length).toBeGreaterThan(1)
    expect(filled).toHaveLength(1)
    expect(filled[0].tag).toMatch(/href="\/projects"/)
  })
})
