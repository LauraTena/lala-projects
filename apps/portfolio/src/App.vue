<script setup lang="ts">
import AppNavigation from "./components/AppNavigation.vue";
document.documentElement.setAttribute("theme", "light");
</script>

<template>
  <div class="grid">
    <AppNavigation />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;731&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap");
@import "./main.scss";

.lala {
  position: fixed;
  top: calc(40% - 130px);
  font-size: 100px;
  line-height: 100px;
  mix-blend-mode: exclusion;
  color: var(--color-text);
}
</style>
