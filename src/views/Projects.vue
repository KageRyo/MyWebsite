<template>
  <div>
    <div class="ts-content is-tertiary is-vertically-padded">
      <div class="ts-container">
        <h1 class="ts-header is-huge is-heavy">Chien-Hsun Chang</h1>
        <p class="ts-text is-secondary">Developer, Programmer, and Student in TAIWAN.</p>
      </div>
    </div>

    <div class="ts-container has-top-spaced-large">
      <FeaturedProjects />
      <GitHubProjects />
    </div>
  </div>
</template>

<script setup>
import FeaturedProjects from '../components/projects/FeaturedProjects.vue'
import GitHubProjects from '../components/projects/GitHubProjects.vue'
</script>
