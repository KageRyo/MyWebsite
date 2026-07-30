import { watch } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import i18n from '../i18n'

const Home = () => import('../views/Home.vue')
const About = () => import('../views/About.vue')
const Projects = () => import('../views/Projects.vue')
const Contact = () => import('../views/Contact.vue')
const NotFound = () => import('../views/NotFound.vue')

const routes = [
  { path: '/', name: 'Home', component: Home, meta: { titleKey: 'meta.home.title' } },
  { path: '/about', name: 'About', component: About, meta: { titleKey: 'meta.about.title' } },
  { path: '/projects', name: 'Projects', component: Projects, meta: { titleKey: 'meta.projects.title' } },
  { path: '/contact', name: 'Contact', component: Contact, meta: { titleKey: 'meta.contact.title' } },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound, meta: { titleKey: 'meta.notFound.title' } }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || { top: 0 }
  }
})

const updateDocumentTitle = route => {
  document.title = route.meta.titleKey
    ? i18n.global.t(route.meta.titleKey)
    : 'KageRyo Developer'
}

router.afterEach(to => {
  updateDocumentTitle(to)
})

watch(i18n.global.locale, () => {
  updateDocumentTitle(router.currentRoute.value)
})

export default router
