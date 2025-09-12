import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projects', () => {
  // 狀態
  const projects = ref({
    kageryo: [],
    kageryo_lab: [],
    coderyo: [],
    rotatingpotato: []
  })
  
  const loading = ref(false)
  const error = ref(null)
  const lastFetchTime = ref(0)
  const CACHE_DURATION = 10 * 60 * 1000 // 10 分鐘緩存
  
  // API URLs
  const API_URLS = {
    kageryo: 'https://api.github.com/users/KageRyo/repos',
    kageryo_lab: 'https://api.github.com/users/KageRyo-Lab/repos', 
    coderyo: 'https://api.github.com/users/CodeRyoDeveloper/repos',
    rotatingpotato: 'https://api.github.com/users/RotatingPotato/repos'
  }
  
  // 動作
  const fetchProjects = async (username) => {
    if (!API_URLS[username]) return
    
    loading.value = true
    error.value = null
    
    try {
      console.log(`正在獲取 ${username} 的專案...`)
      
      const response = await fetch(API_URLS[username], {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'KageRyo-Website'
        }
      })
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const data = await response.json()
      projects.value[username] = data
      console.log(`${username} 專案載入成功:`, data.length, '個專案')
      
    } catch (err) {
      const errorMessage = `獲取 ${username} 專案失敗: ${err.message}`
      console.error(errorMessage, err)
      
      // 如果是 403 錯誤（API 限制），拋出錯誤讓上層處理
      if (err.message.includes('403')) {
        throw err
      }
      
      // 其他錯誤設置空陣列
      error.value = errorMessage
      projects.value[username] = []
    } finally {
      loading.value = false
    }
  }
  
  const fetchAllProjects = async () => {
    // 檢查緩存
    const now = Date.now()
    if (now - lastFetchTime.value < CACHE_DURATION && projects.value.kageryo.length > 0) {
      console.log('使用緩存的專案數據')
      return
    }
    
    // 如果遇到 API 限制，使用靜態數據
    try {
      const promises = Object.keys(API_URLS).map(username => fetchProjects(username))
      await Promise.all(promises)
      lastFetchTime.value = now
    } catch (err) {
      console.log('API 限制，載入靜態專案數據')
      loadStaticProjects()
    }
  }
  
  // 靜態專案數據（作為後備方案）
  const loadStaticProjects = () => {
    projects.value = {
      kageryo: [
        {
          id: 1,
          name: 'MyWebsite',
          html_url: 'https://github.com/KageRyo/MyWebsite',
          description: '個人網站 - Vue.js 重構版本'
        },
        {
          id: 2, 
          name: 'Arduino-Projects',
          html_url: 'https://github.com/KageRyo/Arduino-Projects',
          description: 'Arduino 相關專案與教學'
        },
        {
          id: 3,
          name: 'Python-Learning',
          html_url: 'https://github.com/KageRyo/Python-Learning', 
          description: 'Python 學習筆記與實作'
        }
      ],
      kageryo_lab: [
        {
          id: 11,
          name: 'Lab-Website',
          html_url: 'https://github.com/KageRyo-Lab/Lab-Website',
          description: '實驗室網站開發專案'
        }
      ],
      coderyo: [
        {
          id: 21,
          name: 'CoderYo-Platform',
          html_url: 'https://github.com/CodeRyoDeveloper/CoderYo-Platform', 
          description: 'CodeRyo 開發者平台'
        }
      ],
      rotatingpotato: [
        {
          id: 31,
          name: 'Game-Projects',
          html_url: 'https://github.com/RotatingPotato/Game-Projects',
          description: '遊戲開發相關專案'
        }
      ]
    }
    loading.value = false
    error.value = null
  }
  
  return {
    projects,
    loading,
    error,
    fetchProjects,
    fetchAllProjects,
    loadStaticProjects
  }
})
