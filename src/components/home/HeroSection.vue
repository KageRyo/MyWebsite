<template>
  <div class="ts-content is-tertiary is-vertically-padded">
    <div class="ts-container">
      <div class="ts-header is-huge is-heavy">Chien-Hsun Chang</div>
      <div class="ts-text is-secondary">Developer, Programmer, and Student@TAIWAN.</div>

      <div class="ts-grid is-relaxed has-top-spaced">
        <!-- 個人照片 -->
        <div class="tablet+:column column is-11-wide mobile:ts-content">
          <div class="ts-image is-rounded">
            <img src="/assets/img/card.svg" alt="個人照片">
          </div>
        </div>

        <!-- 個人資訊 -->
        <div class="tablet+:column column is-5-wide mobile:ts-content">
          <div class="ts-box mobile:ts-content">
            <div class="ts-content is-secondary">
              <!-- 個人簡述 -->
              <div class="ts-header is-big is-heavy">Hello👏</div>
              <div class="ts-header is-big is-heavy">I'm Chien-Hsun Chang</div>
              <div class="ts-text is-description has-bottom-spaced-small">
                A Student && Developer from Taiwan.
                <span class="ts-flag is-taiwan-flag"></span>
              </div>

              <!-- 個人資料 -->
              <div class="ts-header is-big is-heavy">張健勳</div>
              <div class="ts-text is-description has-bottom-spaced-small">來自臺灣的學生開發者</div>

              <!-- 介紹文字 -->
              <span class="ts-text">
                目前是研究生一枚，有空的時候會想一些小東西來做，基本上全部都會是開源的Repo，歡迎互相交流交流。 ヾ(*´∀ ˋ*)ﾉ
              </span>

              <!-- 查看更多按鈕 -->
              <button class="ts-button is-fluid is-start-icon has-top-spaced" @click="modalStore.showAppDrawer">
                <span class="ts-icon is-heart-icon"></span>
                查看更多
              </button>

              <!-- 社群連結 -->
              <div class="has-flex-center">
                <div class="ts-wrap has-top-spaced">
                  <a href="https://coderyo.com/discord" target="_blank" rel="noopener noreferrer"
                    class="ts-icon is-secondary is-discord-icon is-circular is-large"></a>
                  <a href="https://github.com/KageRyo" target="_blank" rel="noopener noreferrer"
                    class="ts-icon is-secondary is-github-icon is-circular is-large"></a>
                  <a href="https://www.linkedin.com/in/kageryo/" target="_blank" rel="noopener noreferrer"
                    class="ts-icon is-secondary is-linkedin-icon is-circular is-large"></a>
                </div>
              </div>

              <!-- 電子信箱 -->
              <div class="has-flex-center has-top-spaced-small">
                <a href="mailto:kageryo@coderyo.com" class="no-underline">📬kageryo@coderyo.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useModalStore } from '../../stores/modal'

const modalStore = useModalStore()
</script>
