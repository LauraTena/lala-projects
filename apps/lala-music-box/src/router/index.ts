import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import AboutView from '../views/AboutView.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    //https://next.router.vuejs.org/guide/advanced/lazy-loading.html
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
