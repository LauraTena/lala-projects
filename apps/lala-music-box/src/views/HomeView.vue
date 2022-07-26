<template>
  <svg ref="svg" xmlns="http://www.w3.org/2000/svg"></svg>
  <canvas ref="canvas"></canvas>
  <Counter />
</template>

<script lang="ts">
import Counter from "../components/Counter.vue";
import { defineComponent } from "vue";
import { GenerateCanvas, GetSvgOptions } from "../core/canvas";

export default defineComponent({
  mounted() {
    const svg = this.$refs.svg;
    const canvas = this.$refs.canvas;
    GenerateCanvas(svg, canvas, GetSvgOptions());
  }
});
</script>

<style lang="scss">
svg,
canvas {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
}
</style>
