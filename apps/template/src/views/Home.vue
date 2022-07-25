<template>
  <h3>Home</h3>
  <Counter />
</template>

<script setup lang="ts">
import Counter from "../components/Counter.vue";
</script>

<style lang="scss">
body {
  user-select: none;
  padding: 38px;
  background: pink;

  h6 {
    color: grey;
  }
}
</style>
