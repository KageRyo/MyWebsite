<template>
  <section
    class="ts-container editorial-section"
    aria-labelledby="home-selected-work"
  >
    <!-- 標題只給螢幕閱讀器，畫面上由卡片本身說明 -->
    <h2 id="home-selected-work" class="visually-hidden">
      {{ $t('home.selectedWork.header') }}
    </h2>
    <ul class="project-cards">
      <li v-for="item in cards" :key="item.id" class="project-card-item">
        <article class="ts-box project-card">
          <div class="project-card-media">
            <img
              v-if="item.image"
              :src="item.image.src"
              :width="item.image.width"
              :height="item.image.height"
              :alt="$t(item.image.altKey)"
              loading="lazy"
              decoding="async"
            />
            <!-- 尚未提供可公開的截圖時，用與首頁插圖相同的黑底與螢光綠封面 -->
            <div v-else class="project-cover" aria-hidden="true">
              <span class="project-cover-ring">
                <span class="ts-icon" :class="item.icon"></span>
              </span>
            </div>
          </div>
          <div class="ts-content project-card-body">
            <div class="ts-text is-description">
              {{ $t(`${itemKey(item)}.category`) }}
            </div>
            <!-- 標題連結延伸到整張卡片，鍵盤只需停一次 -->
            <h3 class="ts-header is-heavy">
              <router-link :to="projectLink(item)" class="project-card-link">
                {{ $t(`${itemKey(item)}.title`) }}
              </router-link>
            </h3>
            <div class="ts-text is-description">
              {{ $t(`${itemKey(item)}.role`) }} ·
              {{ $t(`${itemKey(item)}.period`) }}
            </div>
            <p class="project-card-summary">
              {{ $t(`home.selectedWork.items.${item.id}`) }}
            </p>

            <!-- 可驗證的成果：公開專案列出 PR 數量，未公開的專案直接註明 -->
            <div class="ts-text is-description">
              <template v-if="item.project.links.length">
                <span
                  class="ts-icon is-code-merge-icon"
                  aria-hidden="true"
                ></span>
                {{ pullRequestSummary(item.project) }}
              </template>
              <template v-else>
                <span class="ts-icon is-lock-icon" aria-hidden="true"></span>
                {{ $t('projects.featured.privateSource') }}
              </template>
            </div>
            <span class="project-card-cta" aria-hidden="true">
              {{
                item.project.detail
                  ? $t('projectDetail.viewDetails')
                  : $t('home.selectedWork.viewOnProjects')
              }}
            </span>
          </div>
        </article>
      </li>
    </ul>
    <router-link
      to="/projects"
      class="ts-button is-outlined has-top-spaced-large"
    >
      {{ $t('home.selectedWork.allProjects') }}
    </router-link>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { featuredProjects, selectedWork } from '../../config/featuredProjects'

const { t } = useI18n({ useScope: 'global' })

const cards = selectedWork.map(item => ({
  ...item,
  project: featuredProjects.find(({ id }) => id === item.id)
}))

const itemKey = item => `projects.featured.items.${item.id}`

// 有專案介紹頁就直接前往，否則連到作品集頁面上的專案卡片
const projectLink = item =>
  item.project.detail
    ? `/projects/${item.project.detail}`
    : `/projects#project-${item.id}`

// PR 數量與合併數從作品集資料計算，不另外手寫
const pullRequestSummary = project => {
  const count = project.links.length
  const merged = project.links.filter(
    ({ status }) => status === 'merged'
  ).length
  return t('home.selectedWork.pullRequests', { count, merged }, count)
}
</script>

<style scoped>
.project-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
  margin: 0;
  padding: 0;
  list-style: none;
}

.project-card {
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  transition: border-color 0.15s ease;
}

.project-card:hover {
  border-color: var(--kageryo-accent, var(--ts-gray-800));
}

/* 標題連結蓋住整張卡片；焦點框畫在卡片外圍 */
.project-card-link {
  color: inherit;
  text-decoration: none;
}

.project-card-link::after {
  content: '';
  position: absolute;
  inset: 0;
}

@supports selector(:has(*)) {
  .project-card-link:focus-visible {
    outline: none;
  }

  .project-card:has(.project-card-link:focus-visible) {
    outline: 3px solid #005fcc;
    outline-offset: 3px;
  }
}

.project-card-media {
  aspect-ratio: 16 / 9;
}

.project-card-media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 封面沿用首頁插圖的黑底、斜線圓與螢光綠圓圈 */
.project-cover {
  --cover-ink: #141414;
  --cover-stripe: #2c2c2c;
  position: relative;
  display: grid;
  place-items: center;
  height: 100%;
  overflow: hidden;
  background: var(--cover-ink);
}

.project-cover::before {
  content: '';
  position: absolute;
  top: -35%;
  right: -12%;
  width: 70%;
  aspect-ratio: 1;
  border-radius: 50%;
  background: repeating-linear-gradient(
    135deg,
    var(--cover-stripe) 0 4px,
    transparent 4px 11px
  );
}

.project-card-item:nth-child(2) .project-cover::before {
  top: auto;
  right: auto;
  bottom: -45%;
  left: -12%;
}

.project-card-item:nth-child(3) .project-cover::before {
  top: -40%;
  right: auto;
  left: 35%;
}

.project-cover-ring {
  position: relative;
  display: grid;
  place-items: center;
  width: 4.5rem;
  height: 4.5rem;
  border: 3px solid var(--kageryo-green, #b0ff30);
  border-radius: 50%;
  color: var(--kageryo-green, #b0ff30);
  font-size: 1.6rem;
}

.project-card-body {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.project-card-body h3 {
  margin: 0.25rem 0 0;
}

.project-card-summary {
  flex: 1;
  margin: 0.75rem 0;
}

.project-card-cta {
  margin-top: 0.5rem;
  font-weight: 500;
  color: var(--kageryo-accent, var(--ts-link-700));
}

@media (max-width: 767.98px) {
  .project-cards {
    grid-template-columns: minmax(0, 1fr);
  }

  .project-card-media {
    aspect-ratio: 21 / 9;
  }
}
</style>
