import { readdirSync, readFileSync, statSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const root = new URL('../', import.meta.url)
const imageDir = new URL('assets/img/', root)
const images = readdirSync(imageDir)

// 社群分享圖由 #60 另外處理，網站本身不載入
const PAGE_IMAGE_BUDGET = 250 * 1024
const NOT_SHOWN_ON_PAGES = new Set(['og.jpg', 'favicon.ico'])

const sourceFiles = dir =>
  readdirSync(new URL(dir, root), { recursive: true })
    .filter(name => /\.(vue|js|mjs|html)$/.test(name))
    .map(name => new URL(`${dir}${name}`, root))
const references = [
  ...sourceFiles('src/'),
  new URL('index.html', root),
  new URL('vite.config.js', root)
]
  .map(file => readFileSync(file, 'utf8'))
  .join('\n')

describe('image assets', () => {
  it.each(images)('%s is used by the site', name => {
    expect(references.includes(name), `${name} is not referenced`).toBe(true)
  })

  it.each(images.filter(name => !NOT_SHOWN_ON_PAGES.has(name)))(
    '%s fits the page image budget',
    name => {
      expect(statSync(new URL(name, imageDir)).size).toBeLessThanOrEqual(
        PAGE_IMAGE_BUDGET
      )
    }
  )

  it.each(images.filter(name => name.endsWith('.svg')))(
    '%s is a real vector, not a wrapped photo',
    name => {
      expect(readFileSync(new URL(name, imageDir), 'utf8')).not.toMatch(
        /data:image\/(png|jpe?g);base64/
      )
    }
  )
})
