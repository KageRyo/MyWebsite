<template>
  <div class="ts-container has-top-spaced-large">
    <!-- GitHub 專案 -->
    <div class="ts-header is-big is-heavy">{{ $t('projects.github.header') }}</div>
    
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
      <div class="ts-text is-secondary">{{ $t('projects.github.loading', { tab: currentTabLabel }) }}</div>
    </div>
    
    <div v-else-if="error" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-text is-warning">
        <div class="ts-icon is-wrench-icon"></div>
        <div class="ts-header is-large">{{ $t('projects.github.apiErrorTitle') }}</div>
        <div class="ts-text is-secondary has-top-spaced-small">
          {{ $t('projects.github.apiErrorDesc') }}
        </div>
        <div class="ts-text is-small has-top-spaced">
          {{ $t('projects.github.visitDirectly') }}<br>
          <a :href="currentGitHubUrl" target="_blank" class="ts-text is-link">
            🔗 {{ currentGitHubUrl.replace('https://', '') }}
          </a>
        </div>
        <button 
          class="ts-button is-outlined has-top-spaced" 
          @click="retryFetch"
          :disabled="loading"
        >
          {{ loading ? $t('projects.github.loadingBtn') : $t('projects.github.retryBtn') }}
        </button>
      </div>
    </div>
    
    <div v-else-if="currentProjects.length === 0" class="ts-content is-center-aligned has-top-spaced">
      <div class="ts-text is-warning">
        <div class="ts-icon is-wrench-icon"></div>
        <div class="ts-header is-large">{{ $t('projects.github.apiErrorTitle') }}</div>
        <div class="ts-text is-secondary has-top-spaced-small">
          {{ $t('projects.github.apiErrorDesc') }}
        </div>
        <div class="ts-text is-small has-top-spaced">
          {{ $t('projects.github.visitDirectlyShort') }}
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
            <th>{{ $t('projects.github.table.index') }}</th>
            <th>{{ $t('projects.github.table.name') }}</th>
            <th>{{ $t('projects.github.table.url') }}</th>
            <th class="mobile:has-hidden">{{ $t('projects.github.table.desc') }}</th>
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
            <td class="mobile:has-hidden">{{ repo.description || $t('projects.github.table.noDesc') }}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th :colspan="4">{{ $t('projects.github.table.count', { count: currentProjects.length }) }}</th>
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