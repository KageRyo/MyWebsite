import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'

// 創建 Vue 應用實例
const app = createApp(App)

// 使用 Pinia 狀態管理
app.use(createPinia())

// 使用路由
app.use(router)

// 掛載應用
app.mount('#app')
