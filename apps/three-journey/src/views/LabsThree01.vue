<template>
  <canvas class="scene__canvas" data-scene></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Labs01 from "../core/labs/01/Labs01";

export default {
  name: "LabsThree01",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Labs01();
    });
    return {
      canvas
    };
  }
};
</script>
<style scoped>
canvas {
  background: var(--color-text);
}
</style>
