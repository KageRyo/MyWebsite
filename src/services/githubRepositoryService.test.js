import { describe, expect, it } from 'vitest'
import {
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
})
