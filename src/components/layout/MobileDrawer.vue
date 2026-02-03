<template>
  <!-- 背景遮罩 -->
  <div 
    v-if="modalStore.mobileMenuVisible"
    class="drawer-backdrop"
    @click="modalStore.closeMobileMenu"
  ></div>
  
  <div 
    class="ts-app-drawer is-right"
    :class="{ 'is-visible': modalStore.mobileMenuVisible }"
  >
    <div class="content">
      <div class="ts-app-sidebar">
        <!-- 頂部區域包含標題和關閉按鈕 -->
        <div class="ts-content is-padded">
          <div class="ts-grid is-middle-aligned">
            <div class="column">
              <div class="ts-header is-large is-heavy is-text">{{ t('ui.drawer.title') }}</div>
            </div>
            <div class="column is-fluid"></div>
            <div class="column">
              <button 
                class="ts-button is-rounded is-outline is-small"
                @click="handleCloseClick"
                :aria-label="t('ui.drawer.close')"
                type="button"
              >
                <span class="ts-icon is-xmark-icon"></span>
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
import { computed } from 'vue'
import { useModalStore } from '../../stores/modal'
import { useRoute } from 'vue-router'
import { useI18n } from 'vue-i18n'

const modalStore = useModalStore()
const route = useRoute()

const { t } = useI18n({ useScope: 'global' })

const navItems = computed(() => [
  { name: 'home', path: '/', label: t('nav.home'), icon: 'is-house-icon' },
  { name: 'about', path: '/about', label: t('nav.about'), icon: 'is-user-icon' },
  { name: 'projects', path: '/projects', label: t('nav.projects'), icon: 'is-folder-icon' },
  { name: 'contact', path: '/contact', label: t('nav.contact'), icon: 'is-envelope-icon' }
])

// 處理關閉按鈕點擊
const handleCloseClick = () => {
  modalStore.closeMobileMenu()
}

// 處理導航項目點擊
const handleNavClick = () => {
  modalStore.closeMobileMenu()
}
</script>
