import { createRouter, createWebHistory } from '@ionic/vue-router';
import HomePage from '../views/HomePage.vue';
import CreateContact from '../views/CreateContact.vue';
import EditContact from '../views/EditContact.vue';
import DetailContact from '../views/DetailContact.vue';
import ViewMessagePage from '../views/ViewMessagePage.vue';

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
    component: ViewMessagePage
  },
  {
    path: '/create',
    name: 'CreateContact',
    component: CreateContact
  },
  {
    path: '/:id/edit',
    name: 'EditContact',
    component: EditContact
  },
  {
    path: '/:id',
    name: 'ContactDetails',
    component: DetailContact
  }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
