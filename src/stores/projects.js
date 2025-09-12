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
      error.value = errorMessage
      console.error(errorMessage, err)
      
      // 設置空陣列避免顯示問題
      projects.value[username] = []
    } finally {
      loading.value = false
    }
  }
  
  const fetchAllProjects = async () => {
    const promises = Object.keys(API_URLS).map(username => fetchProjects(username))
    await Promise.all(promises)
  }
  
  return {
    projects,
    loading,
    error,
    fetchProjects,
    fetchAllProjects
  }
})
