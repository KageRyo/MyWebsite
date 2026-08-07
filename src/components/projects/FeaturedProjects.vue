<template>
  <div class="ts-container has-top-spaced-large">
    <h2 class="ts-header is-big is-heavy has-bottom-spaced-small">
      {{ $t('projects.featured.header') }}
    </h2>
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
