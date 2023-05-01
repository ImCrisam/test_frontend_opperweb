import { createRouter, createWebHashHistory } from "vue-router";
import isAuthenticatedGuard from "./guard/auth";
import routerAuth from "../modules/auth/router";
import routerDashboard from "../modules/dashboard/router";
const routes = [
  { path: "/", ...routerAuth },
  {
    path: "/dashboard",
    beforeEnter: [isAuthenticatedGuard],
    ...routerDashboard,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
