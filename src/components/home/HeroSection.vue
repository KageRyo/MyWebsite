<template>
  <div class="ts-content is-tertiary is-vertically-padded">
    <div class="ts-container">
      <h1 class="ts-header is-huge is-heavy">Chien-Hsun Chang</h1>
      <div class="ts-text is-secondary">{{ headline }}</div>

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
              <h2 class="ts-header is-big is-heavy">Hello👏</h2>
              <h2 class="ts-header is-big is-heavy">I'm Chien-Hsun Chang</h2>
              <div class="ts-text is-description has-bottom-spaced-small">
                A Student && Developer from Taiwan.
                <span class="ts-flag is-taiwan-flag"></span>
              </div>

              <!-- 個人資料 -->
              <h2 class="ts-header is-big is-heavy">張健勳</h2>
              <div class="ts-text is-description has-bottom-spaced-small">來自臺灣的學生開發者</div>

              <!-- 介紹文字 -->
              <span class="ts-text">
                {{ $t('home.hero.introduction') }}
              </span>

              <!-- 學業與求職狀態 -->
              <div class="ts-text is-description has-top-spaced-small">
                <span class="ts-icon is-graduation-cap-icon"></span>
                {{ $t('home.hero.academic') }}
              </div>
              <div class="ts-text is-description">
                <span class="ts-icon is-briefcase-icon"></span>
                {{ $t('home.hero.availability') }}
              </div>

              <!-- 作品集與履歷 -->
              <div class="ts-grid is-compact mobile:is-stacked has-top-spaced">
                <div class="column is-fluid">
                  <router-link to="/projects" class="ts-button is-fluid is-outlined is-start-icon">
                    <span class="ts-icon is-folder-open-icon"></span>
                    {{ $t('home.hero.viewProjects') }}
                  </router-link>
                </div>
                <div class="column is-fluid">
                  <a :href="resumePdfUrl" class="ts-button is-fluid is-outlined is-start-icon" download>
                    <span class="ts-icon is-download-icon"></span>
                    {{ $t('home.hero.downloadResume') }}
                  </a>
                </div>
              </div>

              <!-- 查看更多按鈕 -->
              <button class="ts-button is-fluid is-start-icon has-top-spaced-small" @click="modalStore.showAppDrawer">
                <span class="ts-icon is-heart-icon"></span>
                {{ $t('home.hero.seeMore') }}
              </button>

              <!-- 社群連結 -->
              <div class="has-flex-center">
                <div class="ts-wrap has-top-spaced">
                  <a href="https://coderyo.com/discord" target="_blank" rel="noopener noreferrer" aria-label="Discord (opens in a new tab)"
                    class="ts-icon is-secondary is-discord-icon is-circular is-large"></a>
                  <a href="https://github.com/KageRyo" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"
                    class="ts-icon is-secondary is-github-icon is-circular is-large"></a>
                  <a href="https://www.linkedin.com/in/kageryo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"
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
import { headline } from '../../config/site'
import { useModalStore } from '../../stores/modal'
import { resumePdfUrl } from '../../config/resume'

const modalStore = useModalStore()
</script>
