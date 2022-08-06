import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TrailText from "../views/TrailText.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/trail-text",
    name: "Trail Text",
    component: TrailText
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
