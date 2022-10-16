import { createRouter, createWebHistory } from "vue-router";
import LessonTJ01 from "../views/LessonTJ01.vue";
import LessonTJ05 from "../views/LessonTJ05.vue";
import LessonTJ06 from "../views/LessonTJ06.vue";
import LessonTJ07 from "../views/LessonTJ07.vue";
import LessonTJ08 from "../views/LessonTJ08.vue";
import LessonTJ09 from "../views/LessonTJ09.vue";
import LessonTJ10 from "../views/LessonTJ10.vue";
import LessonTJ11 from "../views/LessonTJ11.vue";
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
    path: "/11",
    name: "11",
    component: LessonTJ11
  },
  {
    path: "/12",
    name: "12",
    component: LessonTJ10
  },
  {
    path: "/13",
    name: "13",
    component: LessonTJ10
  },
  {
    path: "/14",
    name: "14",
    component: LessonTJ10
  },
  {
    path: "/15",
    name: "15",
    component: LessonTJ10
  },
  {
    path: "/16",
    name: "16",
    component: LessonTJ10
  },
  {
    path: "/17",
    name: "17",
    component: LessonTJ10
  },
  {
    path: "/18",
    name: "18",
    component: LessonTJ10
  },
  {
    path: "/19",
    name: "19",
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
