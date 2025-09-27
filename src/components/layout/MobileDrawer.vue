<template>
  <!-- 背景遮罩層 - 點擊可關閉 -->
  <div 
    v-show="modalStore.mobileMenuVisible"
    class="ts-app-drawer-backdrop"
    @click="modalStore.closeMobileMenu"
    style="position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.5); z-index: 999;"
  ></div>

  <div 
    class="ts-app-drawer is-right has-dark"
    :class="{ 'is-visible': modalStore.mobileMenuVisible }"
  >
    <div class="content">
      <div class="ts-app-sidebar">
        <!-- 頂部區域包含標題和關閉按鈕 -->
        <div class="ts-content is-padded">
          <div class="ts-grid is-middle-aligned">
            <div class="column">
              <div class="ts-header is-large is-heavy">導航欄</div>
            </div>
            <div class="column is-fluid"></div>
            <div class="column">
              <button 
                class="ts-button is-rounded is-outline mobile:is-small"
                @click="handleCloseClick"
                aria-label="關閉選單"
                type="button"
              >
                <span class="ts-icon is-bars-icon"></span>
              </button>
            </div>
          </div>
        </div>
        
        <div class="ts-divider"></div>
        
        <!-- 導航項目 -->
        <div class="ts-menu is-separated is-start-icon">
          <router-link 
            v-for="item in navItems" 
            :key="item.name"
            :to="item.path" 
            class="item is-indented"
            :class="{ 'is-active': $route.path === item.path }"
            @click="handleNavClick"
          >
            <span class="ts-icon" :class="item.icon"></span>
            {{ item.label }}
          </router-link>
        </div>
        
        <div class="ts-divider"></div>
        
        <!-- 底部資訊 -->
        <div class="ts-content is-padded">
          <div class="item is-indented is-disabled">
            KageRyo Developer
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../../stores/modal'
import { useRoute } from 'vue-router'

const modalStore = useModalStore()
const route = useRoute()

const navItems = [
  { name: 'home', path: '/', label: '首頁', icon: 'is-house-icon' },
  { name: 'about', path: '/about', label: '關於我', icon: 'is-user-icon' },
  { name: 'projects', path: '/projects', label: '作品集', icon: 'is-folder-icon' },
  { name: 'contact', path: '/contact', label: '聯絡我', icon: 'is-envelope-icon' }
]

// 處理關閉按鈕點擊
const handleCloseClick = () => {
  modalStore.closeMobileMenu()
}

// 處理導航項目點擊
const handleNavClick = () => {
  modalStore.closeMobileMenu()
}
</script>
