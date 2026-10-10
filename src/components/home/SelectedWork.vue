<template>
  <!-- 精選作品：讓訪客不必翻 GitHub 封存清單就能看到代表作品 -->
  <section
    class="ts-container editorial-section"
    aria-labelledby="home-selected-work"
  >
    <h2 id="home-selected-work" class="ts-header is-big is-heavy">
      {{ $t('home.selectedWork.header') }}
    </h2>
    <ol class="selected-work-list">
      <li
        v-for="project in projects"
        :key="project.id"
        class="selected-work-item"
      >
        <div class="ts-text is-description">
          {{ $t(`${itemKey(project)}.category`) }}
        </div>
        <h3 class="ts-header is-heavy">
          {{ $t(`${itemKey(project)}.title`) }}
        </h3>
        <div class="ts-text is-description">
          {{ $t(`${itemKey(project)}.role`) }} ·
          {{ $t(`${itemKey(project)}.period`) }}
        </div>
        <p class="selected-work-summary">
          {{ $t(`home.selectedWork.items.${project.id}`) }}
        </p>

        <!-- 可驗證的成果：公開專案列出 PR 數量，未公開的專案直接註明 -->
        <div class="ts-text is-description">
          <template v-if="project.links.length">
            <span class="ts-icon is-code-merge-icon" aria-hidden="true"></span>
            {{ pullRequestSummary(project) }}
          </template>
          <template v-else>
            <span class="ts-icon is-lock-icon" aria-hidden="true"></span>
            {{ $t('projects.featured.privateSource') }}
          </template>
        </div>
        <router-link :to="projectLink(project)" class="selected-work-link">
          {{
            project.detail
              ? $t('projectDetail.viewDetails')
              : $t('home.selectedWork.viewOnProjects')
          }}
          <span class="ts-icon is-arrow-right-icon" aria-hidden="true"></span>
        </router-link>
      </li>
    </ol>
    <router-link
      to="/projects"
      class="ts-button is-outlined is-end-icon has-top-spaced-large"
    >
      {{ $t('home.selectedWork.allProjects') }}
      <span class="ts-icon is-arrow-right-icon"></span>
    </router-link>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import {
  featuredProjects,
  selectedWorkIds
} from '../../config/featuredProjects'

const { t } = useI18n({ useScope: 'global' })

const projects = selectedWorkIds.map(id =>
  featuredProjects.find(project => project.id === id)
)

const itemKey = project => `projects.featured.items.${project.id}`

// 有專案介紹頁就直接前往，否則連到作品集頁面上的專案卡片
const projectLink = project =>
  project.detail
    ? `/projects/${project.detail}`
    : `/projects#project-${project.id}`

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
.selected-work-list {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2rem;
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

/* 以上方粗線區隔各作品，不另外加框 */
.selected-work-item {
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  border-top: 2px solid var(--ts-gray-800);
}

.selected-work-item h3 {
  margin: 0.25rem 0 0;
}

.selected-work-summary {
  flex: 1;
  margin: 0.75rem 0;
}

.selected-work-link {
  margin-top: 0.5rem;
  font-weight: 500;
}

@media (max-width: 767.98px) {
  .selected-work-list {
    grid-template-columns: minmax(0, 1fr);
  }
}
</style>
