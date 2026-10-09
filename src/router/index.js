import { nextTick, watch } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Projects = () => import('../views/Projects.vue')
const Contact = () => import('../views/Contact.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { titleKey: 'meta.home.title', descriptionKey: 'meta.home.description' } },
  { path: '/about', name: 'About', component: About, meta: { titleKey: 'meta.about.title', descriptionKey: 'meta.about.description' } },
  { path: '/projects', name: 'Projects', component: Projects, meta: { titleKey: 'meta.projects.title', descriptionKey: 'meta.projects.description' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { titleKey: 'meta.contact.title', descriptionKey: 'meta.contact.description' } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { titleKey: 'meta.notFound.title' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

const updateDocumentMeta = route => {
  document.title = route.meta.titleKey
    ? i18n.global.t(route.meta.titleKey)
    : 'KageRyo Developer'

  // 沒有專屬描述的頁面（例如 404）沿用首頁描述
  const description = document.querySelector('meta[name="description"]')
  if (description) {
    description.content = i18n.global.t(route.meta.descriptionKey ?? 'meta.home.description')
  }
}

router.afterEach(async to => {
  updateDocumentMeta(to)
  await nextTick()
  document.querySelector('#main-content')?.focus({ preventScroll: true })
})

watch(i18n.global.locale, () => {
  updateDocumentMeta(router.currentRoute.value)
})

export default router
