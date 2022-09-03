<script setup lang="ts"></script>

<template>
  <router-view></router-view>
</template>

<style scss>
@import "@lau.ra/packages-animations/src/animations.scss";

:root {
  --cursor-stroke: red;
}

.cursor {
  z-index: 1000 !important;
}
</style>
