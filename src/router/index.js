import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'  // Redirige vers /home
  },
  {
    path: '/home',
    name: 'Home',
    component: HomePage  
  },
  // {
  //    '/message/:id',
  //    'ViewMessage',
  //    () => import('../views/ViewMessagePage.vue')  
  // },
  {
    path: '/create',
    name: 'CreateContact',
    component: () => import('../views/CreateContact.vue') 
  },
  {
    path: '/edit/:id',
    name: 'EditContact',
    component: () => import('../views/EditContact.vue')  
  },
  {
    path: '/:id',
    name: 'ContactDetails',
    component: () => import('../views/DetailContact.vue') 
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),  
  routes  // Les routes définies ci-dessus
});

export default router;
