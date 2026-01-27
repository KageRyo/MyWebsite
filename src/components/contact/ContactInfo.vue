<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <div class="ts-header is-big is-heavy">聯絡資訊</div>
    
    <a href="https://coderyo.com/discord" target="_blank" rel="noopener noreferrer" class="no-underline">
      <div class="ts-iconset has-top-spaced-small">
        <span class="ts-icon is-discord-icon"></span>
        <div class="content">
          <div class="title">Discord</div>
          <div class="text">KageRyo</div>
        </div>
      </div>
    </a>
    
    <a href="https://github.com/KageRyo/" target="_blank" rel="noopener noreferrer" class="no-underline">
      <div class="ts-iconset has-top-spaced">
        <span class="ts-icon is-github-icon"></span>
        <div class="content">
          <div class="title">GitHub</div>
          <div class="text">KageRyo</div>
        </div>
      </div>
    </a>
    
    <a href="https://www.linkedin.com/in/kageryo/" target="_blank" rel="noopener noreferrer" class="no-underline">
      <div class="ts-iconset has-top-spaced">
        <span class="ts-icon is-linkedin-icon"></span>
        <div class="content">
          <div class="title">LinkedIn</div>
          <div class="text">Chien-Hsun Chang 張健勳</div>
        </div>
      </div>
    </a>
    
    <a href="mailto:kageryo@coderyo.com" class="no-underline">
      <div class="ts-iconset has-top-spaced">
        <span class="ts-icon is-envelope-icon"></span>
        <div class="content">
          <div class="title">電子郵件</div>
          <div class="text">kageryo@coderyo.com</div>
        </div>
      </div>
    </a>

    <div class="has-flex-center has-top-spaced-large">
      <div id="kofi-widget-container" ref="kofiContainer" aria-label="Ko-fi 贊助按鈕"></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, nextTick } from 'vue'

const kofiContainer = ref(null)

const initKofiWidget = () => {
  if (typeof window.kofiwidget2 !== 'undefined' && kofiContainer.value) {
    try {
      kofiContainer.value.innerHTML = ''


      const widgetHTML = window.kofiwidget2.getHTML()
      if (widgetHTML) {
        kofiContainer.value.innerHTML = widgetHTML
      } else {
        window.kofiwidget2.draw()
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

  if (typeof window.kofiwidget2 !== 'undefined') {
    initKofiWidget()
  } else {
    let attempts = 0
    const maxAttempts = 10
    const checkInterval = setInterval(() => {
      attempts++
      if (typeof window.kofiwidget2 !== 'undefined') {
        clearInterval(checkInterval)
        initKofiWidget()
      } else if (attempts >= maxAttempts) {
        clearInterval(checkInterval)
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