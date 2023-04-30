import {createRouter, createWebHashHistory} from "vue-router";

import routerAuth from '../modules/auth/router';
const routes = [
  { path: "/", ...routerAuth },
  {
  name: "dashboard",
  path:"/dashboard",
  component: () => import( '../layout/Dashboard.vue'),
  children: [
      {
          path: '',
          name: 'user',
          component: () => import('../views/User.vue')
      }, {
          path: 'categories',
          name: 'categories',
          component: () => import('../views/Categories.vue')
      },{
          path: 'update',
          name: 'update',
          component: () => import('../views/UpdateCategory.vue')
      },{
          path: 'create',
          name: 'create',
          component: () => import('../views/CreateCategory.vue')
      },

  ]}
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
