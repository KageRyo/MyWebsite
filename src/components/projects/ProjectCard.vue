<template>
  <div class="tablet+:column tablet+:is-4-wide mobile:ts-content">
    <a :href="project.url" target="_blank" rel="noopener noreferrer" class="no-underline">
      <div class="ts-box">
        <div class="ts-image">
          <img :src="project.image" :alt="project.name">
        </div>
        <div class="ts-content is-secondary">
          <div class="ts-text is-description">{{ project.repository }}</div>
      <h3 class="ts-header is-truncated is-heavy">{{ project.name }}</h3>
          <div class="ts-text is-description text-overflow-ellipsis">
            {{ $t(project.descriptionKey) }}
          </div>
        </div>
      </div>
    </a>
  </div>
</template>

<script setup>
defineProps({
  project: { type: Object, required: true }
})
</script>
