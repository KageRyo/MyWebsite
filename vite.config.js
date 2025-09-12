import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import { copyFileSync } from 'fs'

export default defineConfig({
  plugins: [
    vue(),
    // 複製 CNAME 文件到 dist 目錄
    {
      name: 'copy-cname',
      closeBundle() {
        try {
          copyFileSync('CNAME', 'dist/CNAME')
          console.log('CNAME file copied to dist/')
        } catch (err) {
          console.log('CNAME file not found, skipping...')
        }
        
        try {
          copyFileSync('.nojekyll', 'dist/.nojekyll')
          console.log('.nojekyll file copied to dist/')
        } catch (err) {
          console.log('.nojekyll file not found, skipping...')
        }
      }
    }
  ],
  base: '/', // 自訂網域使用根路徑
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
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
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['vue', 'vue-router', 'pinia'],
          utils: ['axios']
        }
      }
    }
  }
})
