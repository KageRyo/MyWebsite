import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useProjectStore = defineStore('projects', () => {
  const projects = ref({
    kageryo: [],
    kageryo_lab: [],
    coderyostudio: []
  })
  
  const loading = ref(false)
  const error = ref(null)
  const lastFetchTime = ref(0)
  const CACHE_DURATION = 10 * 60 * 1000 // 10 分鐘緩存
  
  const API_URLS = {
    kageryo: 'https://api.github.com/users/KageRyo/repos',
    kageryo_lab: 'https://api.github.com/users/KageRyo-Lab/repos', 
    coderyostudio: 'https://api.github.com/users/CodeRyoStudio/repos'
  }
  
  const fetchProjects = async (username) => {
    if (!API_URLS[username]) {
      return { success: false, error: `無效的用戶名: ${username}` }
    }
    
    try {
      const controller = new AbortController()
      const timeoutId = setTimeout(() => controller.abort(), 10000) // 10 秒超時
      
      const response = await fetch(API_URLS[username], {
        method: 'GET',
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'KageRyo-Website'
        },
        signal: controller.signal
      })
      
      clearTimeout(timeoutId)
      
      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`)
      }
      
      const data = await response.json()
      projects.value[username] = data || []
      
      return { success: true, data: data || [] }
      
    } catch (err) {
      const errorMessage = `獲取 ${username} 專案失敗: ${err.message}`
      
      projects.value[username] = []
      
      return { success: false, error: err.message, username }
    }
  }
  
  const fetchAllProjects = async () => {
    const now = Date.now()
    if (now - lastFetchTime.value < CACHE_DURATION && projects.value.kageryo.length > 0) {
      return
    }
    
    loading.value = true
    error.value = null
    
    Object.keys(API_URLS).forEach(username => {
      projects.value[username] = []
    })
    
    try {
      const fetchPromises = Object.keys(API_URLS).map(username => fetchProjects(username))
      const results = await Promise.allSettled(fetchPromises)
      
      let hasAnySuccess = false
      let errorCount = 0
      let rateLimited = false
      
      results.forEach((result, index) => {
        const username = Object.keys(API_URLS)[index]
        
        if (result.status === 'fulfilled' && result.value?.success) {
          hasAnySuccess = true
        } else {
          errorCount++
          const errorMsg = result.status === 'rejected' 
            ? result.reason?.message 
            : result.value?.error
          

          if (errorMsg?.includes('403') || errorMsg?.includes('rate limit')) {
            rateLimited = true
          }
        }
      })
      
      if (!hasAnySuccess && rateLimited) {
        return
      }
      
      if (hasAnySuccess) {
        lastFetchTime.value = now
      } else {
        error.value = '所有 GitHub 專案載入失敗，請稍後重試'
      }
      
    } catch (err) {
      error.value = '載入專案時發生錯誤，請稍後重試'
    } finally {
      loading.value = false
    }
  }
  
  const getProjectStats = (username) => {
    const userProjects = projects.value[username] || []
    return {
      total: userProjects.length,
      projects: userProjects,
      hasData: userProjects.length > 0
    }
  }
  
  const getAllProjectStats = () => {
    let total = 0
    const stats = {}
    
    Object.keys(projects.value).forEach(username => {
      const count = projects.value[username]?.length || 0
      stats[username] = count
      total += count
    })
    
    return { total, stats }
  }
  
  return {
    projects,
    loading,
    error,
    fetchProjects,
    fetchAllProjects,
    getProjectStats,
    getAllProjectStats
  }
})
