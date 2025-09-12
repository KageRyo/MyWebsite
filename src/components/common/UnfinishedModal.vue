<template>
  <!-- 未完成功能模態框 -->
  <div 
    class="ts-modal" 
    :class="{ 'is-hidden': !modalStore.unfinishedModalVisible }"
  >
    <div class="content">
      <div class="ts-content has-flex-center is-vertically-padded">
        <div class="ts-header is-icon has-bottom-spaced">
          <span class="ts-icon is-circle-exclamation-icon"></span>
          這個功能還沒有開放
        </div>
        如果您有其他問題，歡迎到此專案的 GitHub。
      </div>
      <div class="ts-divider"></div>
      <div class="ts-content is-tertiary">
        <button 
          class="ts-button is-fluid" 
          @click="modalStore.closeUnfinishedModal"
        >
          了解
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../../stores/modal'

const modalStore = useModalStore()
</script>
