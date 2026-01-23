import { createI18n } from 'vue-i18n';
import zhTW from './locales/zh-TW.js';
import en from './locales/en.js';
import ja from './locales/ja.js';

const messages = {
  'zh-TW': zhTW,
  en: en,
  ja: ja,
};

const i18n = createI18n({
  legacy: false,
  locale: 'zh-TW',
  fallbackLocale: 'en',
  messages,
});

export default i18n;
