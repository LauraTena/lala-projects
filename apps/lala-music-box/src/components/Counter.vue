<template>
  <svg id="svg" xmlns="http://www.w3.org/2000/svg"></svg>
  <div class="jelly-container">
    <canvas id="canvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useHomeStore } from "../stores/home";
import { GenerateCanvas, GetSvgOptions } from "../core/canvas";

const store = useHomeStore();

const fetchPlaylist = async () => {
  await store.fetchPlaylist();
};

const initCanvas = async () => {
  const svg = document.getElementById("svg");
  const canvas = document.getElementById("canvas");
  GenerateCanvas(svg, canvas, GetSvgOptions(), store.playlist);
};

onMounted(() => {
  fetchPlaylist();
  setTimeout(() => {
    initCanvas();
  }, 1000);
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
}

canvas {
  background: #303030;
}

svg {
  opacity: 0;
}
</style>
