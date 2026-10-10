import { getProjectDetail } from '../config/projectDetails'

// 每次導覽都執行（beforeEnter 不會在只有參數改變時重跑）：
// 未知的專案顯示 404 頁並保留網址，已知的專案設定頁面標題與描述
export const resolveProjectDetailRoute = to => {
  if (to.name !== 'ProjectDetail') return undefined

  const detail = getProjectDetail(to.params.slug)
  if (!detail) {
    return {
      name: 'NotFound',
      params: { pathMatch: to.path.slice(1).split('/') },
      query: to.query,
      hash: to.hash
    }
  }
  to.meta.titleKey = `meta.${detail.metaKey}.title`
  to.meta.descriptionKey = `meta.${detail.metaKey}.description`
  return undefined
}

// 導覽項目在本身與其子頁面（例如 /projects/kserve）都顯示為目前分類
export const isActiveNavPath = (currentPath, itemPath) =>
  currentPath === itemPath ||
  (itemPath !== '/' && currentPath.startsWith(`${itemPath}/`))
