import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
  // 狀態
  const unfinishedModalVisible = ref(false)
  const mobileMenuVisible = ref(false)
  const appDrawerVisible = ref(false)
  
  // 動作
  const showUnfinishedModal = () => {
    unfinishedModalVisible.value = true
  }
  
  const closeUnfinishedModal = () => {
    unfinishedModalVisible.value = false
  }
  
  const toggleMobileMenu = () => {
    mobileMenuVisible.value = !mobileMenuVisible.value
  }
  
  const closeMobileMenu = () => {
    mobileMenuVisible.value = false
  }
  
  const showAppDrawer = () => {
    appDrawerVisible.value = true
  }
  
  const closeAppDrawer = () => {
    appDrawerVisible.value = false
  }
  
  return {
    unfinishedModalVisible,
    mobileMenuVisible,
    appDrawerVisible,
    showUnfinishedModal,
    closeUnfinishedModal,
    toggleMobileMenu,
    closeMobileMenu,
    showAppDrawer,
    closeAppDrawer
  }
})
