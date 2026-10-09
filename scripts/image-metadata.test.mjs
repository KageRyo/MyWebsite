import { readdirSync, readFileSync } from 'node:fs'
import { describe, expect, it } from 'vitest'

const imageDir = new URL('../assets/img/', import.meta.url)
const EXIF_TAGS = { gps: 0x8825, make: 0x010f, model: 0x0110 }

// 公開的照片不應帶有拍攝地點或裝置資訊
const findExifTags = jpeg => {
  const found = new Set()
  let offset = 2
  while (offset < jpeg.length && jpeg[offset] === 0xff) {
    const marker = jpeg[offset + 1]
    if (marker === 0xda) break
    const length = jpeg.readUInt16BE(offset + 2)
    const isExif =
      marker === 0xe1 &&
      jpeg.toString('latin1', offset + 4, offset + 10) === 'Exif\0\0'
    if (isExif) {
      const tiff = offset + 10
      const littleEndian = jpeg.toString('latin1', tiff, tiff + 2) === 'II'
      const read16 = at =>
        littleEndian ? jpeg.readUInt16LE(at) : jpeg.readUInt16BE(at)
      const read32 = at =>
        littleEndian ? jpeg.readUInt32LE(at) : jpeg.readUInt32BE(at)
      const ifd = tiff + read32(tiff + 4)
      for (let entry = 0; entry < read16(ifd); entry += 1) {
        found.add(read16(ifd + 2 + entry * 12))
      }
    }
    offset += 2 + length
  }
  return found
}

const servedJpegs = () =>
  readdirSync(imageDir).flatMap(name => {
    const file = readFileSync(new URL(name, imageDir))
    if (name.endsWith('.jpg')) return [[name, file]]
    if (!name.endsWith('.svg')) return []
    const match = file
      .toString('utf8')
      .match(/data:image\/[a-z]+;base64,([A-Za-z0-9+/=]+)/)
    const raster = match ? Buffer.from(match[1], 'base64') : null
    return raster?.[0] === 0xff && raster[1] === 0xd8 ? [[name, raster]] : []
  })

describe('published photos', () => {
  it('include the embedded JPEG photos', () => {
    expect(servedJpegs().map(([name]) => name)).toEqual(
      expect.arrayContaining(['chienhsun.svg', 'og.jpg'])
    )
  })

  it.each(servedJpegs())('%s has no GPS or camera EXIF tags', (_name, jpeg) => {
    const tags = findExifTags(jpeg)
    for (const tag of Object.values(EXIF_TAGS)) {
      expect(tags.has(tag)).toBe(false)
    }
  })
})
