import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import TrailText from "../views/TrailText.vue";
import CursorEffect01 from "../views/CursorEffect01.vue";
import Layout01 from "../views/LayoutTransition01.vue";
import Layout01Text from "../views/Layout01Text.vue";
import Layout01Container from "../views/Layout01Container.vue";
import AnythingAlongAnSvgPath from "../views/AnythingAlongAnSvgPath.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      library: "gsap"
    }
  },
  {
    path: "/trail-text",
    name: "Trail Text",
    component: TrailText,
    meta: {
      library: "gsap"
    }
  },
  {
    path: "/anything-along-an-svg-path",
    name: "Anything Along An Svg Path",
    component: AnythingAlongAnSvgPath,
    meta: {
      library: "gsap"
    }
  },
  {
    path: "/layout-01",
    name: "Layout 01",
    component: Layout01,
    meta: {
      library: "gsap"
    }
  },
  {
    path: "/layout-01-text",
    name: "Layout 01 Text",
    component: Layout01Text,
    meta: {
      library: "gsap"
    }
  },
  {
    path: "/layout-01-container",
    name: "Layout 01 Container",
    component: Layout01Container,
    meta: {
      library: "gsap"
    }
  },
  {
    path: "/cursor-01",
    name: "Cursor 01",
    component: CursorEffect01,
    meta: {
      library: "gsap"
    }
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
