import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/viewTask",
    name: "viewTask",
    component: () => import("../views/viewTask.vue")
  },
  {
    path: "/editTask/:id",
    name: "editTask",
    component: () => import("../views/Change.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
