import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  plugins: [vue()],
  base: './', // 支援相對路徑部署
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  server: {
    port: 3000,
    open: '/index-vue.html' // 自動開啟 Vue 版本
  },
  build: {
    outDir: 'dist-vue',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'terser'
  }
})
