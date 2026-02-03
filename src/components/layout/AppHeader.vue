<template>
  <div class="ts-app-topbar has-dark">
    <div class="start">
      <router-link to="/" class="item is-text">KageRyo Developer</router-link>
    </div>

    <div class="end">
      <!-- 導航選單 -->
      <div class="ts-tab mobile:has-hidden">
        <router-link v-for="item in navItems" :key="item.name" :to="item.path" class="item"
          :class="{ 'is-active': $route.path === item.path }">
          {{ item.label }}
        </router-link>
      </div>

      <!-- 黑白色系切換 -->
      <button class="ts-button is-icon is-secondary" @click="themeStore.toggleTheme"
        :title="themeStore.theme === 'is-dark' ? t('ui.theme.light') : t('ui.theme.dark')">
        <span class="ts-icon" :class="themeStore.theme === 'is-dark' ? 'is-moon-icon' : 'is-sun-icon'"></span>
      </button>

      <div class="ts-select" data-dropdown="select">
        <div class="content">
          <span :class="'ts-flag ' + currentFlag"></span>
          <div class="mobile:has-hidden">
            <template v-if="locale === 'zh-TW'">正體中文</template>
            <template v-else-if="locale === 'en'">English</template>
            <template v-else-if="locale === 'ja'">日本語</template>
          </div>
        </div>
      </div>

      <div class="ts-dropdown" id="select">
        <button class="item" :class="{ 'is-selected': locale === 'zh-TW' }" @click="handleLanguageChange('zh-TW')">
          <span class="ts-flag is-tw-flag"></span>
          <div>正體中文</div>
        </button>
        <button class="item" :class="{ 'is-selected': locale === 'en' }" @click="handleLanguageChange('en')">
          <span class="ts-flag is-america-flag"></span>
          <div>English</div>
        </button>
        <button class="item" :class="{ 'is-selected': locale === 'ja' }" @click="handleLanguageChange('ja')">
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
import { ref, computed } from 'vue'
import { useThemeStore } from '../../stores/theme'
import { useModalStore } from '../../stores/modal'

const themeStore = useThemeStore()
const modalStore = useModalStore()

const currentFlag = ref('is-tw-flag')

import { useI18n } from 'vue-i18n'
const { t, locale } = useI18n({ useScope: 'global' })

const navItems = computed(() => [
  { name: 'home', path: '/', label: t('nav.home') },
  { name: 'about', path: '/about', label: t('nav.about') },
  { name: 'projects', path: '/projects', label: t('nav.projects') },
  { name: 'contact', path: '/contact', label: t('nav.contact') }
])

const showUnfinishedModal = () => {
  modalStore.showUnfinishedModal()
}

const toggleMobileMenu = () => {
  modalStore.toggleMobileMenu()
}

function handleLanguageChange(lang) {
  locale.value = lang
  switch (lang) {
    case 'zh-TW':
      currentFlag.value = 'is-tw-flag'
      break
    case 'en':
      currentFlag.value = 'is-america-flag'
      break
    case 'ja':
      currentFlag.value = 'is-japan-flag'
      break
  }
}
</script>

<style scoped>
</style>
