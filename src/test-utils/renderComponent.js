import { createSSRApp } from 'vue'
import { renderToString } from 'vue/server-renderer'
import { createI18n } from 'vue-i18n'
import en from '../locales/en'
import ja from '../locales/ja'
import zhTW from '../locales/zh-TW'

// 以伺服器端渲染產生元件 HTML，使用真實的語系資料，不需要瀏覽器環境
export const renderComponent = async (component, { locale = 'zh-TW' } = {}) => {
  const i18n = createI18n({
    legacy: false,
    locale,
    fallbackLocale: 'en',
    messages: { 'zh-TW': zhTW, en, ja }
  })
  const app = createSSRApp(component)
  app.use(i18n)
  return renderToString(app)
}

export const textContent = html =>
  html
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
