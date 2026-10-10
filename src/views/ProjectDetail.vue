<template>
  <article v-if="detail">
    <!-- 穹頂 -->
    <div class="ts-content is-tertiary is-vertically-padded">
      <div class="ts-container">
        <div class="ts-text is-description">
          {{ $t(`${projectKey}.category`) }}
        </div>
        <h1 class="ts-header is-huge is-heavy">{{ $t(`${copyKey}.title`) }}</h1>
        <div class="ts-text is-secondary">
          {{ $t(`${projectKey}.role`) }} · {{ $t(`${projectKey}.period`) }}
        </div>
      </div>
    </div>

    <div class="ts-container has-top-spaced-large">
      <section v-for="key in sections" :key="key" class="has-top-spaced-large">
        <h2 class="ts-header is-big is-heavy">
          {{ $t(`projectDetail.headings.${key}`) }}
        </h2>
        <template v-if="key === 'overview'">
          <p v-for="(line, index) in lines(key)" :key="index">{{ line }}</p>
        </template>
        <ul v-else class="case-detail-list">
          <li v-for="(line, index) in lines(key)" :key="index">{{ line }}</li>
        </ul>
        <div
          v-if="key === 'architecture'"
          class="ts-wrap is-compact has-top-spaced-small"
        >
          <span
            v-for="tech in project.stack"
            :key="tech"
            class="ts-chip is-small"
            >{{ tech }}</span
          >
        </div>
      </section>

      <!-- 相關連結：每項貢獻的 PR 與對應 issue -->
      <section class="has-top-spaced-large">
        <h2 class="ts-header is-big is-heavy">
          {{ $t('projectDetail.headings.links') }}
        </h2>
        <ul class="case-detail-links">
          <li
            v-for="contribution in detail.contributions"
            :key="contribution.id"
          >
            <div class="ts-text is-bold">
              {{ $t(`${copyKey}.contributions.${contribution.id}`) }}
            </div>
            <div class="ts-wrap is-compact has-top-spaced-small">
              <a
                :href="contribution.pr.url"
                target="_blank"
                rel="noopener noreferrer"
                class="ts-button is-small is-outlined is-start-icon"
              >
                <span
                  class="ts-icon"
                  :class="
                    contribution.pr.status === 'merged'
                      ? 'is-code-merge-icon'
                      : 'is-code-pull-request-icon'
                  "
                ></span>
                {{ contribution.pr.label }} ·
                {{ $t(`projects.featured.status.${contribution.pr.status}`) }}
              </a>
              <a
                :href="contribution.issue.url"
                target="_blank"
                rel="noopener noreferrer"
                class="ts-button is-small is-outlined is-start-icon"
              >
                <span class="ts-icon is-circle-dot-icon"></span>
                {{ contribution.issue.label }}
              </a>
            </div>
          </li>
        </ul>
      </section>

      <router-link
        to="/projects"
        class="ts-button is-outlined is-start-icon has-top-spaced-large"
      >
        <span class="ts-icon is-arrow-left-icon"></span>
        {{ $t('projectDetail.backToProjects') }}
      </router-link>
    </div>
  </article>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { projectDetailsBySlug } from '../config/projectDetails'
import { featuredProjects } from '../config/featuredProjects'

const props = defineProps({
  slug: { type: String, required: true }
})

const sections = [
  'overview',
  'problem',
  'role',
  'architecture',
  'tradeoffs',
  'outcomes'
]
const { tm, rt } = useI18n({ useScope: 'global' })

const detail = computed(() => projectDetailsBySlug[props.slug])
const project = computed(() =>
  featuredProjects.find(({ id }) => id === detail.value.projectId)
)
const projectKey = computed(
  () => `projects.featured.items.${detail.value.projectId}`
)
const copyKey = computed(() => `projectDetail.${props.slug}`)

// 各段落為字串陣列，需逐行轉譯
const lines = key => tm(`${copyKey.value}.${key}`).map(line => rt(line))
</script>

<style scoped>
.case-detail-list {
  margin: 0.5rem 0 0;
  padding-left: 1.25rem;
}

.case-detail-list li + li {
  margin-top: 0.5rem;
}

.case-detail-links {
  margin: 0.5rem 0 0;
  padding: 0;
  list-style: none;
}

.case-detail-links li + li {
  margin-top: 1rem;
}
</style>
