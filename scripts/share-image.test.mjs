import { readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const root = new URL('../', import.meta.url)
const shareImage = readFileSync(new URL('assets/img/og.jpg', root))
const indexHtml = readFileSync(new URL('index.html', root), 'utf8')

// 讀取 JPEG 的 SOF 區段取得實際寬高
const jpegSize = jpeg => {
  for (let offset = 2; offset < jpeg.length; ) {
    const marker = jpeg[offset + 1]
    const length = jpeg.readUInt16BE(offset + 2)
    if (
      marker >= 0xc0 &&
      marker <= 0xcf &&
      ![0xc4, 0xc8, 0xcc].includes(marker)
    ) {
      return {
        height: jpeg.readUInt16BE(offset + 5),
        width: jpeg.readUInt16BE(offset + 7)
      }
    }
    offset += 2 + length
  }
  return null
}

const meta = (attribute, name) =>
  indexHtml.match(
    new RegExp(`<meta ${attribute}="${name}" content="([^"]*)">`)
  )?.[1]

describe('social share image', () => {
  it('is a 1200×630 JPEG with no EXIF segment', () => {
    expect(shareImage.subarray(0, 2).toString('hex')).toBe('ffd8')
    expect(jpegSize(shareImage)).toEqual({ width: 1200, height: 630 })
    expect(shareImage.includes(Buffer.from('Exif\0\0'))).toBe(false)
  })

  it('stays small enough for link previews', () => {
    expect(shareImage.length).toBeLessThanOrEqual(300 * 1024)
  })

  it('is declared with its real size and a large-image card', () => {
    expect(meta('property', 'og:image:width')).toBe('1200')
    expect(meta('property', 'og:image:height')).toBe('630')
    expect(meta('property', 'og:image:alt')).toContain('Chien-Hsun Chang')
    expect(meta('name', 'twitter:card')).toBe('summary_large_image')
  })
})
