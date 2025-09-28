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
        <router-link v-for="item in navItems" :key="item.name" :to="item.path" class="item"
          :class="{ 'is-active': $route.path === item.path }">
          {{ item.label }}
        </router-link>
      </div>

      <!-- 黑白色系切換 -->
      <button class="ts-button is-small is-secondary" @click="themeStore.toggleTheme"
        :title="themeStore.isDark ? '切換到淺色模式' : '切換到深色模式'">
        <span class="ts-icon" :class="themeStore.isDark ? 'is-moon-icon' : 'is-sun-icon'"></span>
      </button>

      <!-- 語言選擇選單 -->
      <div class="ts-select" data-dropdown="select">
        <div class="content">
          <span class="ts-flag is-tw-flag"></span>
          <div class="mobile:has-hidden">正體中文</div>
        </div>
      </div>

      <div class="ts-dropdown" id="select">
          <button class="item is-selected">
            <span class="ts-flag is-tw-flag"></span>
            <div>正體中文</div>
          </button>
          <button class="item" @click="showUnfinishedModal">
            <span class="ts-flag is-america-flag"></span>
            <div>English</div>
          </button>
          <button class="item" @click="showUnfinishedModal">
            <span class="ts-flag is-japan-flag"></span>
            <div>日本語</div>
          </button>
      </div>

      <!-- 手機版選單按鈕 -->
      <button class="ts-button is-icon desktop+:has-hidden" @click="toggleMobileMenu">
        <span class="ts-icon is-bars-icon"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useThemeStore } from '../../stores/theme'
import { useModalStore } from '../../stores/modal'

const themeStore = useThemeStore()
const modalStore = useModalStore()

// 當前選擇的語言旗幟
const currentFlag = ref('is-tw-flag')

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

const handleLanguageChange = (event) => {
  const selectedValue = event.target.value

  // 暫時更新旗幟顯示
  switch (selectedValue) {
    case 'zh-TW':
      currentFlag.value = 'is-tw-flag'
      break
    case 'en-US':
      currentFlag.value = 'is-america-flag'
      break
    case 'ja-JP':
      currentFlag.value = 'is-japan-flag'
      break
  }

  // 如果不是正體中文，顯示未完成提示並重置
  if (selectedValue !== 'zh-TW') {
    showUnfinishedModal()
    // 重置選擇為正體中文
    setTimeout(() => {
      event.target.value = 'zh-TW'
      currentFlag.value = 'is-tw-flag'
    }, 100)
  }
}
</script>

<style scoped>
/* TocasUI 會自動處理路由 active 狀態 */
</style>
