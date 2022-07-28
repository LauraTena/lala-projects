<template>
  <Canvas />
</template>

<script setup lang="ts">
import Canvas from "../components/Canvas.vue";
import { onMounted } from "vue";

onMounted(async () => {
  console.log("lala");
});
</script>

<style lang="scss"></style>
