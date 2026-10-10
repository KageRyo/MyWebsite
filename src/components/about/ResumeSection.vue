<template>
  <!-- 學歷：只有兩筆，桌機並排、手機堆疊，不加框 -->
  <section
    class="ts-container editorial-section"
    aria-labelledby="about-education"
  >
    <SectionKicker index="02" label="Education" />
    <h2 id="about-education" class="ts-header is-big is-heavy">
      {{ $t('about.resume.education.header') }}
    </h2>
    <ul class="education-list">
      <li v-for="item in education" :key="item.id" class="education-entry">
        <div class="ts-text is-description entry-period">
          {{ $t(`about.resume.education.items.${item.id}.period`) }}
        </div>
        <h3 class="ts-header is-heavy">
          {{ $t(`about.resume.education.items.${item.id}.school`) }}
        </h3>
        <div class="ts-text is-secondary">
          {{ $t(`about.resume.education.items.${item.id}.degree`) }}
        </div>
      </li>
    </ul>
  </section>

  <!-- 工作經歷：全寬列表，左側時間、右側職稱與重點 -->
  <section
    class="ts-container editorial-section"
    aria-labelledby="about-experience"
  >
    <SectionKicker index="03" label="Experience" />
    <h2 id="about-experience" class="ts-header is-big is-heavy">
      {{ $t('about.resume.experience.header') }}
    </h2>
    <ol class="experience-list">
      <li v-for="item in experience" :key="item.id" class="experience-entry">
        <div class="ts-text is-description entry-period">
          {{ $t(`about.resume.experience.items.${item.id}.period`) }}
        </div>
        <div>
          <h3 class="ts-header is-heavy">
            {{ $t(`about.resume.experience.items.${item.id}.role`) }}
          </h3>
          <div class="ts-text is-secondary">
            {{ $t(`about.resume.experience.items.${item.id}.organization`) }}
          </div>
          <div
            v-if="$te(`about.resume.experience.items.${item.id}.corp`)"
            class="ts-text is-description"
          >
            {{ $t(`about.resume.experience.items.${item.id}.corp`) }}
          </div>
          <a
            v-if="item.link"
            :href="item.link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="ts-text is-external-link"
          >
            {{ $t(item.link.labelKey) }}
          </a>
          <ul
            v-if="highlights(item.id).length"
            class="highlights reading-width"
          >
            <li v-for="(line, index) in highlights(item.id)" :key="index">
              {{ line }}
            </li>
          </ul>
        </div>
      </li>
    </ol>
  </section>

  <!-- 技能：About 頁唯一的色塊，方便快速掃描 -->
  <section
    class="ts-container editorial-section"
    aria-labelledby="about-skills"
  >
    <SectionKicker index="04" label="Skills" />
    <h2 id="about-skills" class="ts-header is-big is-heavy">
      {{ $t('about.resume.skills.header') }}
    </h2>
    <div class="ts-content is-tertiary is-rounded skills-panel">
      <div v-for="group in skillGroups" :key="group.id" class="skill-group">
        <div class="ts-text is-bold">
          {{ $t(`about.resume.skills.groups.${group.id}`) }}
        </div>
        <div class="ts-wrap is-compact">
          <span
            v-for="skill in group.items"
            :key="skill"
            class="ts-chip is-small"
            >{{ skill }}</span
          >
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useI18n } from 'vue-i18n'
import { education, experience, skillGroups } from '../../config/resume'
import SectionKicker from '../common/SectionKicker.vue'

const { tm, rt } = useI18n({ useScope: 'global' })

// 經歷重點為字串陣列，需逐行轉譯
const highlights = id => {
  const lines = tm(`about.resume.experience.items.${id}.highlights`)
  return Array.isArray(lines) ? lines.map(line => rt(line)) : []
}
</script>

<style scoped>
.education-list,
.experience-list {
  margin: 1.5rem 0 0;
  padding: 0;
  list-style: none;
}

.education-list {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1.5rem 3rem;
}

.experience-entry {
  display: grid;
  grid-template-columns: 11rem minmax(0, 1fr);
  gap: 0.25rem 2rem;
  padding: 1.5rem 0;
}

.experience-entry:first-child {
  padding-top: 0;
}

.experience-entry:last-child {
  padding-bottom: 0;
}

.experience-entry + .experience-entry {
  border-top: 1px solid var(--ts-gray-200);
}

.entry-period {
  font-variant-numeric: tabular-nums;
}

.education-entry h3 {
  margin: 0.25rem 0 0;
}

.experience-entry h3 {
  margin: 0;
}

.highlights {
  margin: 0.5rem 0 0;
  padding-left: 1.25rem;
  list-style: disc;
}

.highlights li + li {
  margin-top: 0.25rem;
}

.skills-panel {
  margin-top: 1.5rem;
  padding: 1.5rem;
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

@media (max-width: 767.98px) {
  .education-list,
  .experience-entry,
  .skill-group {
    grid-template-columns: minmax(0, 1fr);
  }

  .skills-panel {
    padding: 1rem;
  }
}
</style>
