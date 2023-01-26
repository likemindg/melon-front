import { createWebHistory, createRouter } from 'vue-router';

import Dashboard from '@/views/Dashboard.vue';
import GridSystem from '@/views/GridSystem.vue';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: Dashboard,
  },
  {
    path: '/grid-system',
    name: 'GridSystem',
    component: GridSystem,
  },
];

// const routes = [
//   {
//     path: '/',
//     name: 'Home',
//     component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue'),
//   },
//   {
//     path: '/input-tag',
//     name: 'InputTag',
//     component: () =>
//       import(/* webpackChunkName "inputTag" */ '@/components/InputTag.vue'),
//   },
// ];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
