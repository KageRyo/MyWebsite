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

  const loading = computed(() =>
    Object.values(loadingByAccount.value).some(Boolean)
  )
  const error = computed(
    () => Object.values(errorsByAccount.value).find(Boolean) || null
  )

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

    loadingByAccount.value[accountKey] = true
    errorsByAccount.value[accountKey] = null

    try {
      const repositories = await fetchGitHubRepositories(account)
      projects.value[accountKey] = repositories
      lastFetchedAt.value[accountKey] = Date.now()
      return repositories
    } catch (error) {
      errorsByAccount.value[accountKey] = error
      throw error
    } finally {
      loadingByAccount.value[accountKey] = false
    }
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
