<template></template>

<script>
import { onMounted } from "vue";
import DefaultLayout from "../layouts/Default.vue";
import {} from "../core/gsap/index";
import { gsap } from "gsap";

export default {
  name: "TrailText",
  layout: DefaultLayout,
  setup() {
    onMounted(() => {});
  }
};
</script>

<style lang="scss">
@import "../../../styles/src/config/config.scss";
</style>
