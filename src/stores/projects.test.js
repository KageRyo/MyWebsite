import { beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { fetchGitHubRepositories } from '../services/githubRepositoryService'
import { useProjectStore } from './projects'

vi.mock('../services/githubRepositoryService', () => ({
  fetchGitHubRepositories: vi.fn()
}))

describe('project store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    vi.clearAllMocks()
  })

  it('caches an empty successful response', async () => {
    fetchGitHubRepositories.mockResolvedValueOnce([])
    const store = useProjectStore()

    await store.fetchProjects('kageryo')
    await store.fetchProjects('kageryo')

    expect(fetchGitHubRepositories).toHaveBeenCalledTimes(1)
  })
})
