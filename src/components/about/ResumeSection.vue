<template>
  <div class="ts-container has-top-spaced-large">
    <!-- 履歷 -->
    <div class="ts-grid is-relaxed has-top-spaced-large">
      <!-- 學歷 -->
      <div class="tablet+:column is-8-wide">
        <h2 class="ts-header is-big is-heavy">{{ $t('about.resume.education.header') }}</h2>
        <div class="ts-timeline has-top-spaced-small">
          <div v-for="item in education" :key="item.id" class="item">
            <div class="indicator">
              <span class="ts-icon" :class="item.icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t(`about.resume.education.items.${item.id}.period`) }}</div>
              {{ $t(`about.resume.education.items.${item.id}.school`) }}
            </div>
          </div>
        </div>
      </div>

      <!-- 工作經歷 -->
      <div class="tablet+:column is-8-wide">
        <h2 class="ts-header is-big is-heavy">{{ $t('about.resume.experience.header') }}</h2>
        <div class="ts-timeline has-top-spaced-small">
          <div v-for="item in experience" :key="item.id" class="item">
            <div class="indicator">
              <span class="ts-icon" :class="item.icon"></span>
            </div>
            <div class="content">
              <div class="ts-text is-description">{{ $t(`about.resume.experience.items.${item.id}.period`) }}</div>
              {{ $t(`about.resume.experience.items.${item.id}.company`) }}
              <div v-if="$te(`about.resume.experience.items.${item.id}.corp`)">
                {{ $t(`about.resume.experience.items.${item.id}.corp`) }}
              </div>
              <div v-if="item.link">
                <a :href="item.link.url" target="_blank" rel="noopener noreferrer" class="no-underline">
                  {{ $t(item.link.labelKey) }}
                </a>
              </div>
              <ul v-if="highlights(item.id).length" class="highlights">
                <li v-for="(line, index) in highlights(item.id)" :key="index">{{ line }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 技能 -->
    <h2 class="ts-header is-big is-heavy has-top-spaced-large">{{ $t('about.resume.skills.header') }}</h2>
    <div class="ts-box has-top-spaced-small">
      <div class="ts-content">
        <div v-for="group in skillGroups" :key="group.id" class="skill-group">
          <div class="ts-text is-bold">{{ $t(`about.resume.skills.groups.${group.id}`) }}</div>
          <div class="ts-wrap is-compact">
            <span v-for="skill in group.items" :key="skill" class="ts-chip is-small">{{ skill }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { education, experience, skillGroups } from '../../config/resume'

const { tm, rt } = useI18n({ useScope: 'global' })

// 經歷重點為字串陣列，需逐行轉譯
const highlights = id => {
  const lines = tm(`about.resume.experience.items.${id}.highlights`)
  return Array.isArray(lines) ? lines.map(line => rt(line)) : []
}
</script>

<style scoped>
.highlights {
  margin: 0.25rem 0 0;
  padding-left: 1.25rem;
}

.skill-group {
  display: grid;
  grid-template-columns: 12rem 1fr;
  gap: 0.5rem 1rem;
  align-items: start;
}

.skill-group + .skill-group {
  margin-top: 0.75rem;
}

@media (max-width: 767px) {
  .skill-group {
    grid-template-columns: 1fr;
  }
}
</style>
