<template>
  <div class="ts-app-topbar has-dark">
    <div class="start">
      <router-link to="/" class="item is-text">KageRyo Developer</router-link>
    </div>

    <div class="end">
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

      <button
        class="ts-button is-icon is-secondary"
        :title="themeStore.theme === 'is-dark' ? t('ui.theme.light') : t('ui.theme.dark')"
        type="button"
        @click="themeStore.toggleTheme"
      >
        <span class="ts-icon" :class="themeStore.theme === 'is-dark' ? 'is-moon-icon' : 'is-sun-icon'"></span>
      </button>

      <div class="ts-select" data-dropdown="select">
        <div class="content">
          <span class="ts-flag" :class="currentLocale.flag"></span>
          <div class="mobile:has-hidden">{{ currentLocale.label }}</div>
        </div>
      </div>

      <div id="select" class="ts-dropdown">
        <button
          v-for="option in localeOptions"
          :key="option.key"
          class="item"
          :class="{ 'is-selected': locale === option.key }"
          type="button"
          @click="handleLanguageChange(option.key)"
        >
          <span class="ts-flag" :class="option.flag"></span>
          <div>{{ option.label }}</div>
        </button>
      </div>

      <button class="ts-button is-icon desktop+:has-hidden" type="button" @click="toggleMobileMenu">
        <span class="ts-icon is-bars-icon"></span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useModalStore } from '../../stores/modal'
import { useThemeStore } from '../../stores/theme'

const localeOptions = [
  { key: 'zh-TW', label: '正體中文', flag: 'is-tw-flag' },
  { key: 'en', label: 'English', flag: 'is-america-flag' },
  { key: 'ja', label: '日本語', flag: 'is-japan-flag' }
]

const themeStore = useThemeStore()
const modalStore = useModalStore()
const { t, locale } = useI18n({ useScope: 'global' })

const currentLocale = computed(
  () => localeOptions.find(option => option.key === locale.value) ?? localeOptions[0]
)
const navItems = computed(() => [
  { name: 'home', path: '/', label: t('nav.home') },
  { name: 'about', path: '/about', label: t('nav.about') },
  { name: 'projects', path: '/projects', label: t('nav.projects') },
  { name: 'contact', path: '/contact', label: t('nav.contact') }
])

watch(
  locale,
  value => {
    document.documentElement.lang = value
  },
  { immediate: true }
)

const toggleMobileMenu = () => {
  modalStore.toggleMobileMenu()
}

const handleLanguageChange = language => {
  locale.value = language
}
</script>
