<template>
  <!-- 背景遮罩 -->
  <div 
    v-if="modalStore.appDrawerVisible"
    class="drawer-backdrop"
    @click="modalStore.closeAppDrawer"
  ></div>
  
  <!-- 邊緣收屜 -->
  <div 
    class="ts-app-drawer is-right" 
    id="more"
    :class="{ 'is-visible': modalStore.appDrawerVisible }"
  >
    <div class="content">
      <div class="ts-content justify-text">
        <div class="ts-grid is-middle-aligned has-bottom-spaced">
          <div class="column">
            <div class="ts-header is-large">查看更多</div>
          </div>
          <div class="column is-fluid"></div>
          <div class="column">
            <button 
              class="ts-button is-rounded is-outline is-small"
              @click="modalStore.closeAppDrawer"
              aria-label="關閉選單"
              type="button"
            >
              <span class="ts-icon is-xmark-icon"></span>
            </button>
          </div>
        </div>
        
        <div class="ts-divider"></div>
        
        <!-- 介紹文字 -->
        <p>嗨，我是 Chien-Hsun Chang 張健勳！</p>
        <p>KageRyo Developer 是我用於軟體開發等之網路化名，其中文為影凌開發者，也可以簡稱為 K6Dev。</p>
        <p>感謝您前來瀏覽我的個人網頁，有任何疑問歡迎透過各種管道聯絡我，若不知道怎麼做可以切換到 
          <router-link to="/contact" target="_blank" rel="noopener noreferrer">聯絡我</router-link> 頁面。
        </p>
        <div class="ts-divider has-top-spaced-small"></div>
        <!-- License -->
        <div class="has-flex-center has-top-spaced-small">
          <span class="ts-text is-description">本網頁內容採用 CC-BY4 License 進行授權</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../../stores/modal'

const modalStore = useModalStore()
</script>
