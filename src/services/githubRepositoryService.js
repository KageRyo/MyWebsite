const API_BASE_URL = 'https://api.github.com'
const REQUEST_TIMEOUT = 10_000

export const normalizeRepository = repository => ({
  id: repository.id,
  name: repository.name,
  description: repository.description?.trim() || null,
  htmlUrl: repository.html_url,
  updatedAt: repository.updated_at
})

export const filterRepositories = repositories =>
  repositories.filter(repository => !repository.fork && !repository.archived && !repository.private)

export const sortRepositories = repositories =>
  [...repositories].sort(
    (left, right) => new Date(right.updatedAt).getTime() - new Date(left.updatedAt).getTime()
  )

export const fetchGitHubRepositories = async (account, { fetchFn = fetch } = {}) => {
  const url = new URL(`/users/${encodeURIComponent(account.username)}/repos`, API_BASE_URL)
  url.search = new URLSearchParams({ sort: 'updated', direction: 'desc', per_page: '100' })

  const controller = new AbortController()
  const timeoutId = globalThis.setTimeout(() => controller.abort(), REQUEST_TIMEOUT)

  try {
    const response = await fetchFn(url, {
      headers: { Accept: 'application/vnd.github+json' },
      signal: controller.signal
    })

    if (!response.ok) {
      const error = new Error(`GitHub request failed (${response.status})`)
      error.status = response.status
      error.rateLimited = response.status === 403 || response.status === 429
      throw error
    }

    const repositories = await response.json()
    return sortRepositories(filterRepositories(repositories).map(normalizeRepository))
  } finally {
    globalThis.clearTimeout(timeoutId)
  }
}
