import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // 狀態
  const theme = ref('light')
  const themeSource = ref('user') // 'user' | 'system'
  
  // 計算屬性
  const isDark = computed(() => theme.value === 'dark')
  
  // 動作
  const setTheme = (newTheme) => {
    theme.value = newTheme
    themeSource.value = 'user'
    applyTheme()
    saveThemeToStorage()
  }
  
  const toggleTheme = () => {
    setTheme(theme.value === 'light' ? 'dark' : 'light')
  }
  
  const detectSystemTheme = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }
    return 'light'
  }
  
  const initTheme = () => {
    // 從 localStorage 讀取主題設定
    const savedTheme = localStorage.getItem('theme')
    const savedThemeSource = localStorage.getItem('themeSource')
    
    if (savedTheme && savedThemeSource) {
      theme.value = savedTheme
      themeSource.value = savedThemeSource
    } else {
      // 如果沒有儲存的設定，使用系統主題
      theme.value = detectSystemTheme()
      themeSource.value = 'system'
    }
    
    applyTheme()
    
    // 監聽系統主題變化
    if (window.matchMedia) {
      window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (themeSource.value === 'system') {
          theme.value = e.matches ? 'dark' : 'light'
          applyTheme()
        }
      })
    }
  }
  
  const applyTheme = () => {
    const body = document.body
    if (theme.value === 'dark') {
      body.classList.add('has-dark')
    } else {
      body.classList.remove('has-dark')
    }
  }
  
  const saveThemeToStorage = () => {
    localStorage.setItem('theme', theme.value)
    localStorage.setItem('themeSource', themeSource.value)
  }
  
  return {
    theme,
    themeSource,
    isDark,
    setTheme,
    toggleTheme,
    detectSystemTheme,
    initTheme
  }
})
