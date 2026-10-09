import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { githubAccounts, githubAccountsByKey } from '../config/githubAccounts'
import { fetchGitHubRepositories } from '../services/githubRepositoryService'

const CACHE_DURATION = 10 * 60 * 1000
const createAccountState = valueFactory =>
  Object.fromEntries(
    githubAccounts.map(account => [account.key, valueFactory()])
  )

export const useProjectStore = defineStore('projects', () => {
  const projects = ref(createAccountState(() => []))
  const loadingByAccount = ref(createAccountState(() => false))
  const errorsByAccount = ref(createAccountState(() => null))
  const lastFetchedAt = ref(createAccountState(() => 0))
  const pendingRequests = new Map()

  const loading = computed(() =>
    Object.values(loadingByAccount.value).some(Boolean)
  )
  const error = computed(
    () => Object.values(errorsByAccount.value).find(Boolean) || null
  )

  const loadProjects = async account => {
    loadingByAccount.value[account.key] = true
    errorsByAccount.value[account.key] = null

    try {
      const repositories = await fetchGitHubRepositories(account)
      projects.value[account.key] = repositories
      lastFetchedAt.value[account.key] = Date.now()
      return repositories
    } catch (error) {
      errorsByAccount.value[account.key] = error
      throw error
    } finally {
      loadingByAccount.value[account.key] = false
      pendingRequests.delete(account.key)
    }
  }

  const fetchProjects = async (accountKey, { force = false } = {}) => {
    const account = githubAccountsByKey[accountKey]
    if (!account) {
      throw new Error(`Unknown GitHub account: ${accountKey}`)
    }

    const fetchedAt = lastFetchedAt.value[accountKey]
    const isFresh = fetchedAt > 0 && Date.now() - fetchedAt < CACHE_DURATION
    if (!force && isFresh) {
      return projects.value[accountKey]
    }

    // 同一帳號已有進行中的請求時共用結果，避免快速切換分頁或重試時重複呼叫 GitHub API
    if (!pendingRequests.has(accountKey)) {
      pendingRequests.set(accountKey, loadProjects(account))
    }
    return pendingRequests.get(accountKey)
  }

  const fetchAllProjects = async options =>
    Promise.allSettled(
      githubAccounts.map(account => fetchProjects(account.key, options))
    )

  return {
    projects,
    loading,
    error,
    loadingByAccount,
    errorsByAccount,
    fetchProjects,
    fetchAllProjects
  }
})
