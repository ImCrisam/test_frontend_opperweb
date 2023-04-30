import {createRouter, createWebHashHistory} from "vue-router";
import HelloWorld from '../views/HelloWorld.vue';

import routerAuth from '../modules/auth/router';
const routes = [
  { path: "/", component: HelloWorld },
  { path: "/auth", ...routerAuth },
  
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
