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
      <div class="ts-text is-secondary">正在載入 GitHub 專案...</div>
    </div>
    
    <div v-else-if="error" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-text is-negative">
        <div class="ts-icon is-exclamation-triangle-icon"></div>
        {{ error }}
      </div>
      <button 
        class="ts-button is-outlined has-top-spaced" 
        @click="retryFetch"
      >
        重新載入
      </button>
    </div>
    
    <div v-else-if="currentProjects.length === 0" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-text is-secondary">
        <div class="ts-icon is-folder-open-icon"></div>
        目前沒有找到任何專案
      </div>
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

// 重新載入函數
const retryFetch = async () => {
  console.log('重新載入 GitHub 專案...')
  await projectStore.fetchAllProjects()
}

// 組件掛載時載入專案
onMounted(async () => {
  try {
    console.log('開始載入 GitHub 專案...')
    await projectStore.fetchAllProjects()
    console.log('GitHub 專案載入完成:', projectStore.projects)
  } catch (error) {
    console.error('載入 GitHub 專案失敗:', error)
  }
})
</script>