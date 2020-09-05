import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Controller from "../views/Controller.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Controller",
    component: Controller
  },
  {
    path: "/settings",
    name: "Settings",
    // route level code-splitting
    // this generates a separate chunk (settings.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "settings" */ "../views/Settings.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
