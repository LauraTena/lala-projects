<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup

import AppNavigation from './components/AppNavigation.vue';
</script>

<template>
  <AppNavigation />
  <router-view></router-view>
</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;731&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap');
@import './main.scss';
</style>
