<template>
  <div class="home">
    <svg ref="svg" xmlns="http://www.w3.org/2000/svg"></svg>
  </div>
</template>

<script lang="js">
import { defineComponent } from 'vue'
import { GenerateSvg, GetSvgOptions } from "../core/canvas"

export default defineComponent({

  mounted() {
    const svg = this.$refs.svg;
    GenerateSvg(svg, GetSvgOptions())
  }
})
</script>

<style lang="scss">
svg {
  background: lightblue;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;

  rect {
    background: pink;
  }
}
</style>
