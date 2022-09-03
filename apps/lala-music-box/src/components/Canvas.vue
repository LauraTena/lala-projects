<template>
  <svg class="svg-grid" ref="svg" xmlns="http://www.w3.org/2000/svg"></svg>
  <div class="jelly-container">
    <canvas ref="canvas"></canvas>
  </div>
  <svg class="cursor" width="100" height="100" viewBox="0 0 100 100">
    <defs>
      <filter
        id="cursor-filter"
        x="-50%"
        y="-50%"
        width="200%"
        height="200%"
        filterUnits="objectBoundingBox">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0"
          numOctaves="1"
          result="warp" />
        <feOffset dx="0" result="warpOffset" />
        <feDisplacementMap
          xChannelSelector="R"
          yChannelSelector="G"
          scale="40"
          in="SourceGraphic"
          in2="warpOffset" />
      </filter>
    </defs>
    <circle class="cursor__inner" cx="50" cy="50" r="10" />
  </svg>
  <svg
    class="cursor"
    width="100"
    height="100"
    viewBox="0 0 100 100"
    data-amt="0.15"
    data-radius-enter="40">
    <circle class="cursor__inner" cx="50" cy="50" r="10" />
  </svg>
</template>

<script>
import { ref, onMounted } from "vue";
import { useHomeStore } from "../stores/home";
import { GenerateCanvas, GetSvgOptions } from "../core/canvas";
import { Cursor01 } from "@lau.ra/packages-animations/src/core/gsap";

export default {
  name: "CanvasComponent",
  setup() {
    const svg = ref(null);
    const canvas = ref(null);

    const store = useHomeStore();

    const fetchPlaylist = async () => {
      try {
        await store.fetchPlaylist();
        initCanvas();
      } finally {
        //
      }
    };

    const initCanvas = () => {
      GenerateCanvas(svg.value, canvas.value, GetSvgOptions(), store.playlist);
    };

    onMounted(() => {
      fetchPlaylist();
      new Cursor01(document.querySelectorAll(".cursor"), "canvas");
    });

    return { svg, canvas };
  }
};
</script>

<style lang="scss" scoped>
.svg-grid,
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

.svg-grid {
  opacity: 0;
}
</style>
