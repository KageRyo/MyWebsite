<template>
  <div class="ts-app-topbar has-dark">
    <!-- 頂部列左側 -->
    <div class="start">
      <router-link to="/" class="item is-text">KageRyo Developer</router-link>
    </div>
    
    <!-- 頂部列右側 -->
    <div class="end">
      <!-- 導航選單 -->
      <div class="ts-tab mobile:has-hidden">
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path" 
          class="item"
          :class="{ 'is-active': $route.path === item.path }"
        >
          {{ item.label }}
        </router-link>
      </div>
      
      <!-- 黑白色系切換 -->
      <div 
        class="ts-icon item is-sun-icon" 
        :class="{ 'is-moon-icon': themeStore.isDark }"
        @click="themeStore.toggleTheme"
        style="z-index: 9999; cursor: pointer;"
      ></div>
      
      <!-- 語言選擇選單 -->
      <div class="ts-select mobile:is-hidden" data-dropdown="select" style="z-index: 9999;">
        <div class="content">
          <span class="ts-flag is-tw-flag"></span>
          <div class="mobile:has-hidden">正體中文</div>
        </div>
      </div>
      
      <div class="ts-dropdown" data-name="select" data-position="bottom-start" style="z-index: 9999;">
        <button class="item is-selected">
          <span class="ts-flag is-tw-flag"></span>
          <div class="mobile:has-hidden">正體中文</div>
        </button>
        <button class="item" @click="showUnfinishedModal">
          <span class="ts-flag is-america-flag"></span>
          <div class="mobile:has-hidden">English</div>
        </button>
        <button class="item" @click="showUnfinishedModal">
          <span class="ts-flag is-japan-flag"></span>
          <div class="mobile:has-hidden">日本語</div>
        </button>
      </div>
      
      <!-- 手機版選單按鈕 -->
      <button 
        class="mobile:ts-button mobile:is-icon" 
        style="z-index: 9999;"
        @click="toggleMobileMenu"
      >
        <span class="mobile:ts-icon mobile:is-bars-icon"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { useThemeStore } from '../../stores/theme'
import { useModalStore } from '../../stores/modal'

const themeStore = useThemeStore()
const modalStore = useModalStore()

const navItems = [
  { name: 'home', path: '/', label: '首頁' },
  { name: 'about', path: '/about', label: '關於我' },
  { name: 'projects', path: '/projects', label: '作品集' },
  { name: 'contact', path: '/contact', label: '聯絡我' }
]

const showUnfinishedModal = () => {
  modalStore.showUnfinishedModal()
}

const toggleMobileMenu = () => {
  modalStore.toggleMobileMenu()
}
</script>

<style scoped>
.router-link-active {
  /* TocasUI 會自動處理 active 狀態 */
}
</style>
