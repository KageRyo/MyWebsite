import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createPinia, setActivePinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import { createMemoryHistory, createRouter } from 'vue-router'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'

const EmptyPage = { render: () => null }

// 以伺服器端渲染產生元件 HTML，使用真實的語系資料，不需要瀏覽器環境
// prepare(pinia) 可在渲染前設定 store 狀態
export const renderComponent = async (
  component,
  { locale = 'zh-TW', path = '/', prepare } = {}
) => {
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { 'zh-TW': zhTW, en, ja }
  })
  const pinia = createPinia()
  setActivePinia(pinia)
  const router = createRouter({
    history: createMemoryHistory(),
    routes: [{ path: '/:pathMatch(.*)*', component: EmptyPage }]
  })
  await router.push(path)
  await router.isReady()
  prepare?.(pinia)

  const app = createSSRApp(component)
  app.use(i18n).use(pinia).use(router)
  return renderToString(app)
}

const ENTITIES = { amp: '&', lt: '<', gt: '>', quot: '"', '#39': "'" }

export const textContent = html =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/&(amp|lt|gt|quot|#39);/g, (_match, name) => ENTITIES[name])
    .replace(/\s+/g, ' ')
    .trim()
