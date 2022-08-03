<template>
  <svg ref="svg" xmlns="http://www.w3.org/2000/svg"></svg>
  <div class="jelly-container">
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import { useHomeStore } from "../stores/home";
import { GenerateCanvas, GetSvgOptions } from "../core/canvas";

export default {
  name: "CanvasComponent",
  setup(props, context) {
    const svg = ref(null);
    const canvas = ref(null);

    const store = useHomeStore();

    const fetchPlaylist = async () => {
      try {
        await store.fetchPlaylist();
        initCanvas();
      } finally {
        console.log("ddd");
      }
    };

    const initCanvas = () => {
      GenerateCanvas(svg.value, canvas.value, GetSvgOptions(), store.playlist);
    };

    onMounted(() => {
      fetchPlaylist();
    });

    return { svg, canvas };
  }
};
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
