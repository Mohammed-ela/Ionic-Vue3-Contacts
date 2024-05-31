import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue'

const routes = [
{
  path: '/',
  redirect: '/home'
},
{
  path: '/home',
  name: 'Home',
  component: HomePage
},
{
  path: '/message/:id',
  component: () => import('../views/ViewMessagePage.vue')
}
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
