import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { mkdirSync, copyFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath, URL } from 'node:url'

const projectRoot = fileURLToPath(new URL('.', import.meta.url))

const copyBuildFile = (sourcePath, destinationPath) => {
  const source = resolve(projectRoot, sourcePath)
  const destination = resolve(projectRoot, destinationPath)

  mkdirSync(dirname(destination), { recursive: true })
  copyFileSync(source, destination)
}

export default defineConfig({
  plugins: [
    vue(),
    {
      name: 'copy-pages-files',
      writeBundle() {
        copyBuildFile('CNAME', 'dist/CNAME')
        copyBuildFile('.nojekyll', 'dist/.nojekyll')
        copyBuildFile('assets/img/og.jpg', 'dist/assets/img/og.jpg')
        copyBuildFile('dist/index.html', 'dist/404.html')
      }
    }
  ],
  base: '/', // 自訂網域使用根路徑
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  server: {
    port: 3000,
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser'
  }
})
