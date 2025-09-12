import { defineStore } from 'pinia'
import { ref } from 'vue'
import axios from 'axios'

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
      const response = await axios.get(API_URLS[username])
      projects.value[username] = response.data
    } catch (err) {
      error.value = `獲取 ${username} 專案失敗: ${err.message}`
      console.error(error.value)
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
