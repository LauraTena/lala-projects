<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Setup10 from "../core/Setup10";

export default {
  name: "LessonTJ10",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Setup10(canvas.value);
    });
    return {
      canvas
    };
  }
};
</script>
