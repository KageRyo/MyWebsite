import { build } from 'vite'
import { describe, expect, it } from 'vitest'

// 開發伺服器會直接提供專案根目錄的檔案，只有正式建置才會發現沒有被打包的圖片路徑
describe('production build', () => {
  it('only references images that the build emits', async () => {
    const [result] = [].concat(
      await build({ logLevel: 'silent', build: { write: false } })
    )
    const emitted = new Set(result.output.map(({ fileName }) => `/${fileName}`))
    const code = result.output
      .filter(({ type }) => type === 'chunk')
      .map(({ code }) => code)
      .join('\n')
    const referenced = [
      ...new Set(code.match(/\/assets\/[\w./-]+\.(?:webp|png|jpe?g|svg)/g) ?? [])
    ]

    expect(referenced.length).toBeGreaterThan(0)
    expect(referenced.filter(url => !emitted.has(url))).toEqual([])
  }, 120000)
})
