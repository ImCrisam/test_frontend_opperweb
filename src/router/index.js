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
      },

  ]}
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
