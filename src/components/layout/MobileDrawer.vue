<template>
  <div 
    class="ts-app-drawer is-right has-dark" 
    id="mobile-menu" 
    :class="{ 'is-visible': modalStore.mobileMenuVisible }"
    style="color:white;"
  >
    <div style="width:80%"></div>
    <div class="content">
      <div class="ts-app-sidebar" style="padding-top:20%;">
        <div class="header ts-divider is-start-text">導航欄</div>
        <router-link 
          v-for="item in navItems" 
          :key="item.name"
          :to="item.path" 
          class="item is-indented"
          :class="{ 'is-active': $route.path === item.path }"
          @click="modalStore.closeMobileMenu"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../../stores/modal'

const modalStore = useModalStore()

const navItems = [
  { name: 'home', path: '/', label: '首頁' },
  { name: 'about', path: '/about', label: '關於我' },
  { name: 'projects', path: '/projects', label: '作品集' },
  { name: 'contact', path: '/contact', label: '聯絡我' }
]
</script>
