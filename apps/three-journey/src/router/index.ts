import { createRouter, createWebHistory } from "vue-router";
import LessonTJ01 from "../views/LessonTJ01.vue";
import LessonTJ05 from "../views/LessonTJ05.vue";
import LessonTJ06 from "../views/LessonTJ06.vue";
import LessonTJ07 from "../views/LessonTJ07.vue";
import LessonTJ08 from "../views/LessonTJ08.vue";
import LessonTJ09 from "../views/LessonTJ09.vue";
import LessonTJ10 from "../views/LessonTJ10.vue";
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
    path: "/07",
    name: "07",
    component: LessonTJ07
  },
  {
    path: "/08",
    name: "08",
    component: LessonTJ08
  },

  {
    path: "/09",
    name: "09",
    component: LessonTJ09
  },
  {
    path: "/10",
    name: "10",
    component: LessonTJ10
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
