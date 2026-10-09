<template>
  <div class="tablet+:column tablet+:is-8-wide mobile:ts-content">
    <article class="ts-box project-card">
      <div class="ts-content is-secondary">
        <div class="ts-text is-description">{{ $t(`${itemKey}.category`) }}</div>
        <h3 class="ts-header is-heavy">{{ $t(`${itemKey}.title`) }}</h3>
        <div class="ts-text is-description">
          {{ $t(`${itemKey}.period`) }}
          <template v-if="$te(`${itemKey}.role`)"> · {{ $t(`${itemKey}.role`) }}</template>
        </div>
        <p>{{ $t(`${itemKey}.summary`) }}</p>
        <div class="ts-wrap is-compact">
          <span v-for="tech in project.stack" :key="tech" class="ts-chip is-small">{{ tech }}</span>
        </div>

        <!-- 連結各自獨立，不包在整張卡片的超連結裡 -->
        <div v-if="project.links.length" class="ts-wrap has-top-spaced">
          <a
            v-for="link in project.links"
            :key="link.url"
            :href="link.url"
            target="_blank"
            rel="noopener noreferrer"
            class="ts-button is-small is-outlined is-start-icon"
          >
            <span class="ts-icon" :class="link.status === 'merged' ? 'is-code-merge-icon' : 'is-code-pull-request-icon'"></span>
            {{ link.label }} · {{ $t(`projects.featured.status.${link.status}`) }}
          </a>
        </div>
        <div v-else class="ts-text is-description has-top-spaced">
          <span class="ts-icon is-lock-icon"></span>
          {{ $t('projects.featured.privateSource') }}
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  project: { type: Object, required: true }
})

const itemKey = computed(() => `projects.featured.items.${props.project.id}`)
</script>

<style scoped>
.project-card {
  height: 100%;
}
</style>
