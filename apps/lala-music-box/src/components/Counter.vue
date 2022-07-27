<template>
  <svg id="svg" xmlns="http://www.w3.org/2000/svg"></svg>
  <canvas id="canvas"></canvas>
  <h1>Count: {{ store.count }}</h1>
  <button
    class="px-6 py-2 bg-indigo-500 font-medium text-sm hover:bg-indigo-600 text-indigo-100 rounded"
    @click="store.increment()">
    Increment
  </button>
  <div>{{ store.playlist }}</div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useHomeStore } from "../stores/home";
import { GenerateCanvas, GetSvgOptions } from "../core/canvas";

const store = useHomeStore();

onMounted(async () => {
  store.fetchPlaylist();
  const svg = document.getElementById("svg");
  const canvas = document.getElementById("canvas");
  GenerateCanvas(svg, canvas, GetSvgOptions());
  // setTimeout(() => {
  //   console.log(store.playlist);
  // }, 2000);
});
</script>

<style lang="scss" scoped>
svg,
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background: lightgreen;
}
</style>
