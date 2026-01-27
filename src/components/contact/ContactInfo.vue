<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <div class="ts-header is-big is-heavy">聯絡資訊</div>
    
    <!-- Discord -->
    <a href="https://coderyo.com/discord" target="_blank" rel="noopener noreferrer" class="no-underline">
      <div class="ts-iconset has-top-spaced-small">
        <span class="ts-icon is-discord-icon"></span>
        <div class="content">
          <div class="title">Discord</div>
          <div class="text">KageRyo</div>
        </div>
      </div>
    </a>
    
    <!-- GitHub -->
    <a href="https://github.com/KageRyo/" target="_blank" rel="noopener noreferrer" class="no-underline">
      <div class="ts-iconset has-top-spaced">
        <span class="ts-icon is-github-icon"></span>
        <div class="content">
          <div class="title">GitHub</div>
          <div class="text">KageRyo</div>
        </div>
      </div>
    </a>
    
    <!-- LinkedIn -->
    <a href="https://www.linkedin.com/in/kageryo/" target="_blank" rel="noopener noreferrer" class="no-underline">
      <div class="ts-iconset has-top-spaced">
        <span class="ts-icon is-linkedin-icon"></span>
        <div class="content">
          <div class="title">LinkedIn</div>
          <div class="text">Chien-Hsun Chang 張健勳</div>
        </div>
      </div>
    </a>
    
    <!-- Email -->
    <a href="mailto:kageryo@coderyo.com" class="no-underline">
      <div class="ts-iconset has-top-spaced">
        <span class="ts-icon is-envelope-icon"></span>
        <div class="content">
          <div class="title">電子郵件</div>
          <div class="text">kageryo@coderyo.com</div>
        </div>
      </div>
    </a>

    <!-- Ko-fi 贊助按鈕 -->
    <div class="has-flex-center has-top-spaced-large">
      <div id="kofi-widget-container" ref="kofiContainer" aria-label="Ko-fi 贊助按鈕"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

// 聯絡資訊組件
const kofiContainer = ref(null)

const initKofiWidget = () => {
  if (typeof window.kofiwidget2 !== 'undefined' && kofiContainer.value) {
    try {
      // 清空容器
      kofiContainer.value.innerHTML = ''

      // 初始化 Ko-fi widget
      window.kofiwidget2.init('Support Me on Ko-fi', '#606466', 'P5P0KOCNI')

      // 將 widget 渲染到指定容器
      const widgetHTML = window.kofiwidget2.getHTML()
      if (widgetHTML) {
        kofiContainer.value.innerHTML = widgetHTML
      } else {
        // 如果 getHTML 不可用，使用傳統方法
        window.kofiwidget2.draw()
        // 尋找生成的 widget 並移動到我們的容器
        const widget = document.querySelector('iframe[src*="ko-fi.com"]')
        if (widget && widget.parentNode) {
          kofiContainer.value.appendChild(widget.parentNode)
        }
      }
    } catch (error) {
      console.log('Ko-fi widget initialization failed:', error)
      // 提供備用的贊助連結
      kofiContainer.value.innerHTML = `
        <a href="https://ko-fi.com/P5P0KOCNI" target="_blank" class="ts-button is-outlined">
          ☕ Support Me on Ko-fi
        </a>
      `
    }
  }
}

onMounted(async () => {
  await nextTick()

  // 嘗試初始化 Ko-fi widget
  if (typeof window.kofiwidget2 !== 'undefined') {
    initKofiWidget()
  } else {
    // 如果腳本還沒載入，等待載入完成
    let attempts = 0
    const maxAttempts = 10
    const checkInterval = setInterval(() => {
      attempts++
      if (typeof window.kofiwidget2 !== 'undefined') {
        clearInterval(checkInterval)
        initKofiWidget()
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval)
        // 如果腳本載入失敗，提供備用連結
        if (kofiContainer.value) {
          kofiContainer.value.innerHTML = `
            <a href="https://ko-fi.com/P5P0KOCNI" target="_blank" class="ts-button is-outlined">
              ☕ Support Me on Ko-fi
            </a>
          `
        }
      }
    }, 500)
  }
})
</script>