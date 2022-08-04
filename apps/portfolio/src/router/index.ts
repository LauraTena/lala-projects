import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import AboutView from "../views/AboutView.vue";
import ProjectsView from "../views/ProjectsView.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/projects",
    name: "Projects",
    component: AboutView
  },
  {
    path: "/about",
    name: "About",
    component: ProjectsView
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
