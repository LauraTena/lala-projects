import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TrailText from "../views/TrailText.vue";
import CursorEffect01 from "../views/CursorEffect01.vue";
import Layout01 from "../views/LayoutTransition01.vue";
import Layout01Text from "../views/Layout01Text.vue";
import Layout01Container from "../views/Layout01Container.vue";

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
  },
  {
    path: "/layout-01",
    name: "Layout 01",
    component: Layout01
  },
  {
    path: "/layout-01-text",
    name: "Layout 01 Text",
    component: Layout01Text
  },
  {
    path: "/layout-01-container",
    name: "Layout 01 Container",
    component: Layout01Container
  },
  {
    path: "/cursor-01",
    name: "Cursor 01",
    component: CursorEffect01
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
