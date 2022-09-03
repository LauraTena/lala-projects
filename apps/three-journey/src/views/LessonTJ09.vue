<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Setup09 from "../core/Setup09";

export default {
  name: "LessonTJ09",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Setup09(canvas.value);
    });
    return {
      canvas
    };
  }
};
</script>
