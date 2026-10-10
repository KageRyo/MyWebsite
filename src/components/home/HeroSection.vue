<template>
  <div class="ts-content is-tertiary is-vertically-padded">
    <div class="ts-container">
      <h1 class="ts-header is-huge is-heavy">Chien-Hsun Chang</h1>
      <div class="ts-text is-secondary">{{ headline }}</div>

      <div class="hero-layout has-top-spaced">
        <div class="hero-visual">
          <!-- 插圖與聯絡方式放在一起，寬螢幕時垂直置中對齊右側的自我介紹 -->
          <div class="ts-image is-rounded">
            <img src="/assets/img/card.webp" alt="個人照片" width="1600" height="900" decoding="async" fetchpriority="high">
          </div>

          <!-- 社群連結與電子信箱 -->
          <div class="hero-contact">
            <div class="ts-wrap">
              <a href="https://coderyo.com/discord" target="_blank" rel="noopener noreferrer" aria-label="Discord (opens in a new tab)"
                class="ts-icon is-secondary is-discord-icon is-circular is-large"></a>
              <a href="https://github.com/KageRyo" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)"
                class="ts-icon is-secondary is-github-icon is-circular is-large"></a>
              <a href="https://www.linkedin.com/in/kageryo/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)"
                class="ts-icon is-secondary is-linkedin-icon is-circular is-large"></a>
            </div>
            <a href="mailto:kageryo@coderyo.com" class="no-underline">📬kageryo@coderyo.com</a>
          </div>
        </div>
        <div class="hero-intro ts-box">
          <div class="ts-content is-secondary hero-intro-content">
            <!-- 個人簡述 -->
            <div>
              <h2 class="ts-header is-big is-heavy">Hello👏</h2>
              <h2 class="ts-header is-big is-heavy">I'm Chien-Hsun Chang</h2>
              <div class="ts-text is-description has-bottom-spaced-small">
                A Student && Developer from Taiwan.
                <span class="ts-flag is-taiwan-flag"></span>
              </div>

              <!-- 個人資料 -->
              <h2 class="ts-header is-big is-heavy">張健勳</h2>
              <div class="ts-text is-description has-bottom-spaced-small">來自臺灣的學生開發者</div>
            </div>

            <div>
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

              <!-- 作品集與履歷：作品集是首頁唯一的主要按鈕 -->
              <div class="ts-grid is-compact mobile:is-stacked has-top-spaced">
                <div class="column is-fluid">
                  <router-link to="/projects" class="ts-button is-fluid is-start-icon">
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
              <button class="ts-button is-fluid is-outlined is-start-icon has-top-spaced-small" @click="modalStore.showAppDrawer">
                <span class="ts-icon is-heart-icon"></span>
                {{ $t('home.hero.seeMore') }}
              </button>
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

<style scoped>
.hero-layout {
  display: grid;
  gap: 1.5rem;
}

.hero-contact {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem 1rem;
  margin-top: 0.75rem;
}

/* 平板與小筆電：插圖在上、自我介紹全寬，問候與內文左右分欄 */
@media (min-width: 768px) and (max-width: 1199.98px) {
  .hero-intro-content {
    display: grid;
    grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
    gap: 0 2rem;
  }
}

/* 寬螢幕：插圖與自我介紹並排，插圖垂直置中，避免下方留下大片空白 */
@media (min-width: 1200px) {
  .hero-layout {
    grid-template-columns: minmax(0, 11fr) minmax(0, 5fr);
    gap: 2rem;
  }

  .hero-visual {
    align-self: center;
  }
}
</style>
