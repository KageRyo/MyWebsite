import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useThemeStore = defineStore('theme', () => {
  // 初始主題狀態應該根據系統主題或保存的設定來決定
  const getInitialTheme = () => {
    localStorage.clear();
    const savedTheme = localStorage.getItem('theme')
    if (savedTheme) {
      return savedTheme
    }
    // 如果沒有保存的主題，檢測系統主題
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'is-dark'
      : 'is-light'
  }

  const theme = ref(getInitialTheme())
  const themeSource = ref('system') // 'user' | 'system'

  const setTheme = (newTheme) => {
    theme.value = newTheme
    themeSource.value = 'user'
    applyTheme()
    saveThemeToStorage()
  }

  const toggleTheme = () => {
    setTheme(theme.value === 'is-light' ? 'is-dark' : 'is-light')
  }

  const detectSystemTheme = () => {
    return window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'is-dark'
      : 'is-light'
  }

  const initTheme = () => {
    const savedTheme = localStorage.getItem('theme')
    const savedThemeSource = localStorage.getItem('themeSource')

    if (savedTheme && savedThemeSource) {
      // 如果有保存的設定，使用保存的設定
      theme.value = savedTheme
      themeSource.value = savedThemeSource
    } else {
      // 新用戶：主題已經在初始化時設定好了，只需要設定來源和保存
      themeSource.value = 'system'
      saveThemeToStorage()
    }
    // 應用主題（包含圖標更新）
    applyTheme()
  }
  const applyTheme = () => {
    document.querySelector('html').className = theme.value
  }

  const saveThemeToStorage = () => {
    localStorage.setItem('theme', theme.value)
    localStorage.setItem('themeSource', themeSource.value)
  }

  return {
    theme,
    themeSource,
    setTheme,
    toggleTheme,
    detectSystemTheme,
    initTheme
  }
})
