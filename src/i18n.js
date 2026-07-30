import { createI18n } from 'vue-i18n'
import en from './locales/en.js'
import ja from './locales/ja.js'
import zhTW from './locales/zh-TW.js'

const SUPPORTED_LOCALES = ['zh-TW', 'en', 'ja']
const savedLocale = localStorage.getItem('locale')
const initialLocale = SUPPORTED_LOCALES.includes(savedLocale) ? savedLocale : 'zh-TW'

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: 'en',
  messages: {
    'zh-TW': zhTW,
    en,
    ja
  }
})

export default i18n
