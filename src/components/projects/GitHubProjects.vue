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
      <div class="ts-text is-secondary">正在載入 {{ currentTabLabel }} 的 GitHub 專案...</div>
    </div>
    
    <div v-else-if="error" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-text is-warning">
        <div class="ts-icon is-wrench-icon"></div>
        <div class="ts-header is-large">GitHub API 功能修復中</div>
        <div class="ts-text is-secondary has-top-spaced-small">
          由於 GitHub API 速率限制問題，此功能暫時無法正常運作。<br>
          我們正在修復這個問題，敬請見諒！
        </div>
        <div class="ts-text is-small has-top-spaced">
          您仍可以直接訪問我的 GitHub 主頁查看所有專案：<br>
          <a :href="currentGitHubUrl" target="_blank" class="ts-text is-link">
            🔗 {{ currentGitHubUrl.replace('https://', '') }}
          </a>
        </div>
        <button 
          class="ts-button is-outlined has-top-spaced" 
          @click="retryFetch"
          :disabled="loading"
        >
          {{ loading ? '載入中...' : '嘗試重新載入' }}
        </button>
      </div>
    </div>
    
    <div v-else-if="currentProjects.length === 0" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-text is-warning">
        <div class="ts-icon is-wrench-icon"></div>
        <div class="ts-header is-large">GitHub API 功能修復中</div>
        <div class="ts-text is-secondary has-top-spaced-small">
          由於 GitHub API 速率限制問題，此功能暫時無法正常運作。<br>
          我們正在修復這個問題，敬請見諒！
        </div>
        <div class="ts-text is-small has-top-spaced">
          您仍可以直接訪問我的 GitHub 主頁：
          <a :href="currentGitHubUrl" target="_blank" class="ts-text is-link">
            {{ currentGitHubUrl.replace('https://', '') }}
          </a>
        </div>
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

const activeTab = ref('kageryo')

const tabs = [
  { key: 'kageryo', label: 'KageRyo' },
  { key: 'kageryo_lab', label: "KageRyo's Lab" },
  { key: 'coderyostudio', label: 'CodeRyo' }
]

const currentProjects = computed(() => {
  return projectStore.projects[activeTab.value] || []
})

const currentTabLabel = computed(() => {
  const tab = tabs.find(t => t.key === activeTab.value)
  return tab ? tab.label : '專案'
})

const currentGitHubUrl = computed(() => {
  const urlMap = {
    'kageryo': 'https://github.com/KageRyo',
    'kageryo_lab': 'https://github.com/KageRyo-Lab', 
    'coderyostudio': 'https://github.com/CodeRyoStudio'
  }
  return urlMap[activeTab.value] || 'https://github.com/KageRyo'
})

const loading = computed(() => projectStore.loading)
const error = computed(() => projectStore.error)

const retryFetch = async () => {
  try {
    await projectStore.fetchAllProjects()
  } catch (error) {
  }
}

onMounted(async () => {
  try {
    await projectStore.fetchAllProjects()
  } catch (error) {
  }
})
</script>