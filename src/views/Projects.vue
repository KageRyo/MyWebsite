<template>
  <div>
    <!-- 穹頂 -->
    <div class="ts-content is-tertiary is-vertically-padded">
      <div class="ts-container">
        <div class="ts-header is-huge is-heavy">Chien-Hsun, Chang</div>
        <div class="ts-text is-secondary">Developer, Programmer, and Student@TAIWAN.</div>
      </div>
    </div>
    
    <!-- 作品集內容 -->
    <div class="ts-container has-top-spaced-large">
      <!-- 精選專案 -->
      <FeaturedProjects />
      
      <!-- GitHub 專案 -->
      <GitHubProjects />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useProjectStore } from '../stores/projects'
import FeaturedProjects from '../components/projects/FeaturedProjects.vue'
import GitHubProjects from '../components/projects/GitHubProjects.vue'

const projectStore = useProjectStore()

onMounted(() => {
  // 載入 GitHub 專案
  projectStore.fetchAllProjects()
})
</script>
