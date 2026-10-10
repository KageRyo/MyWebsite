<template>
  <div>
    <div class="ts-content is-tertiary is-vertically-padded">
      <div class="ts-container">
        <h1 class="ts-header is-huge is-heavy">Chien-Hsun Chang</h1>
        <p class="ts-text is-secondary">{{ headline }}</p>
      </div>
    </div>

    <!-- 各區塊自己就是 ts-container，外層不再包一層，避免左右留白加倍 -->
    <div class="has-top-spaced-large">
      <FeaturedProjects />
      <OpenSourceTools />
      <GitHubProjects />
    </div>
  </div>
</template>

<script setup>
import { headline } from '../config/site'
import FeaturedProjects from '../components/projects/FeaturedProjects.vue'
import OpenSourceTools from '../components/projects/OpenSourceTools.vue'
import GitHubProjects from '../components/projects/GitHubProjects.vue'
</script>
