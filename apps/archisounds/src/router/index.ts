import { createRouter, createWebHistory } from 'vue-router';
import VisualUntitled001 from '../views/VisualUntitled001.vue';
import VisualUntitled002 from '../views/VisualUntitled002.vue';
import VisualUntitled003 from '../views/VisualUntitled003.vue';

const routes = [
  {
    path: '/',
    name: '01',
    component: VisualUntitled001,
  },
  {
    path: '/02',
    name: '02',
    component: VisualUntitled002,
  },
  {
    path: '/03',
    name: '03',
    component: VisualUntitled003,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
