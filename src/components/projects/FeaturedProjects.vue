<template>
  <div class="ts-container has-top-spaced-large">
    <div class="ts-header is-big is-heavy has-bottom-spaced-small">
      {{ $t('projects.featured.header') }}
    </div>
    <div class="ts-grid">
      <ProjectCard
        v-for="project in featuredProjects"
        :key="project.repository"
        :project="project"
      />
    </div>
  </div>
</template>

<script setup>
import { featuredProjects } from '../../config/featuredProjects'
import ProjectCard from './ProjectCard.vue'
</script>
