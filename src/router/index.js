import { createRouter, createWebHistory } from 'vue-router'

// 頁面模組懶載入
const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Projects = () => import('../views/Projects.vue')
const Contact = () => import('../views/Contact.vue')

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'KageRyo Developer - 首頁'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'KageRyo Developer - 關於我'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'KageRyo Developer - 作品集'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'KageRyo Developer - 聯絡我'
    }
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})

// 路由守衛 - 更新頁面標題
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router
