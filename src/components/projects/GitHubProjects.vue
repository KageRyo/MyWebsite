<template>
  <div class="ts-container has-top-spaced-large">
    <!-- GitHub 專案 -->
    <div class="ts-header is-big is-heavy">我在 GitHub 上的開源專案</div>
    
    <!-- 標籤頁切換 -->
    <div class="ts-tab is-pilled has-vertically-spaced">
      <button 
        v-for="tab in tabs" 
        :key="tab.key"
        class="item" 
        :class="{ 'is-active': activeTab === tab.key }"
        @click="activeTab = tab.key"
      >
        {{ tab.label }}
      </button>
    </div>
    
    <!-- 專案列表 -->
    <div v-if="loading" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-loader"></div>
      <div class="ts-text is-secondary">載入中...</div>
    </div>
    
    <div v-else-if="error" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-text is-negative">{{ error }}</div>
    </div>
    
    <div v-else class="ts-box has-top-spaced-small">
      <table class="ts-table">
        <thead>
          <tr>
            <th>#</th>
            <th>名稱</th>
            <th>網址</th>
            <th class="mobile:has-hidden">描述</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(repo, index) in currentProjects" :key="repo.id">
            <td>{{ index + 1 }}</td>
            <td>
              <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="ts-text is-link">
                {{ repo.name }}
              </a>
            </td>
            <td>
              <a :href="repo.html_url" target="_blank" rel="noopener noreferrer" class="ts-text is-link is-small">
                {{ repo.html_url }}
              </a>
            </td>
            <td class="mobile:has-hidden">{{ repo.description || '無描述' }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th :colspan="4">統計筆數：{{ currentProjects.length }}</th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useProjectStore } from '../../stores/projects'

const projectStore = useProjectStore()

// 響應式數據
const activeTab = ref('kageryo')

// 標籤頁配置
const tabs = [
  { key: 'kageryo', label: 'KageRyo' },
  { key: 'kageryo_lab', label: "KageRyo's Lab" },
  { key: 'coderyo', label: 'CodeRyo' },
  { key: 'rotatingpotato', label: 'RotatingPotato' }
]

// 計算屬性
const currentProjects = computed(() => {
  return projectStore.projects[activeTab.value] || []
})

const loading = computed(() => projectStore.loading)
const error = computed(() => projectStore.error)

// 組件掛載時載入專案
onMounted(() => {
  projectStore.fetchAllProjects()
})
</script>