import { describe, expect, it, vi } from 'vitest'
import {
  fetchGitHubRepositories,
  filterRepositories,
  normalizeRepository,
  sortRepositories
} from './githubRepositoryService'

describe('GitHub repository helpers', () => {
  it('removes forks, archived repositories, and private repositories', () => {
    const repositories = [
      { id: 1, fork: false, archived: false, private: false },
      { id: 2, fork: true, archived: false, private: false },
      { id: 3, fork: false, archived: true, private: false },
      { id: 4, fork: false, archived: false, private: true }
    ]

    expect(filterRepositories(repositories)).toEqual([repositories[0]])
  })

  it('normalizes API fields and sorts newest repositories first', () => {
    const older = normalizeRepository({
      id: 1,
      name: 'older',
      description: '  ',
      html_url: 'https://github.com/example/older',
      updated_at: '2025-01-01T00:00:00Z'
    })
    const newer = normalizeRepository({
      id: 2,
      name: 'newer',
      description: 'Current project',
      html_url: 'https://github.com/example/newer',
      updated_at: '2025-02-01T00:00:00Z'
    })

    expect(older.description).toBeNull()
    expect(sortRepositories([older, newer])).toEqual([newer, older])
  })

  it('fetches, filters, and normalizes GitHub repositories', async () => {
    const fetchFn = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => [
        {
          id: 1,
          name: 'project',
          fork: false,
          archived: false,
          private: false,
          description: 'Test',
          html_url: 'https://github.com/example/project',
          updated_at: '2026-01-01T00:00:00Z'
        },
        {
          id: 2,
          name: 'forked-project',
          fork: true,
          archived: false,
          private: false
        }
      ]
    })

    const result = await fetchGitHubRepositories({ username: 'example' }, { fetchFn })

    expect(result).toEqual([
      {
        id: 1,
        name: 'project',
        description: 'Test',
        htmlUrl: 'https://github.com/example/project',
        updatedAt: '2026-01-01T00:00:00Z'
      }
    ])
    const { searchParams } = fetchFn.mock.calls[0][0]
    expect(searchParams.get('sort')).toBe('updated')
    expect(searchParams.get('direction')).toBe('desc')
    expect(searchParams.get('per_page')).toBe('100')
  })

  it('marks GitHub rate-limit responses as rate-limited', async () => {
    const fetchFn = vi.fn().mockResolvedValue({ ok: false, status: 403 })

    await expect(fetchGitHubRepositories({ username: 'example' }, { fetchFn })).rejects.toMatchObject({
      status: 403,
      rateLimited: true
    })
  })
})
