import { createRouter, createWebHistory } from "vue-router";
import LessonTJ01 from "../views/LessonTJ01.vue";
import LessonTJ05 from "../views/LessonTJ05.vue";
import LessonTJ06 from "../views/LessonTJ06.vue";
import LabsThree01 from "../views/LabsThree01.vue";

const routes = [
  {
    path: "/",
    name: "01",
    component: LessonTJ01
  },
  {
    path: "/05",
    name: "05",
    component: LessonTJ05
  },
  {
    path: "/06",
    name: "06",
    component: LessonTJ06
  },
  {
    path: "/labs/01",
    name: "L01",
    component: LabsThree01
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
