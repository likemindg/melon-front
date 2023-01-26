import { createWebHistory, createRouter } from 'vue-router';

// import Home from './views/Home.vue';
// import InputTag from './components/InputTag.vue';
// const routes= [
//   {
//     path: '/',
//     name: 'Home',
//     component: Home,
//   },
//   {
//     path: '/input-tag',
//     name: 'InputTag',
//     component: InputTag,
//   },
// ];

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName "home" */ '@/views/Home.vue'),
  },
  {
    path: '/input-tag',
    name: 'InputTag',
    component: () =>
      import(/* webpackChunkName "inputTag" */ '@/components/InputTag.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
