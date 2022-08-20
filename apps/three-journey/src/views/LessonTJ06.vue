<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { ref,onMounted } from "vue";
import Setup06 from "../core/Setup06";

export default {
  name: "LessonTJ06",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Setup06(canvas.value);
    });
    return {
      canvas
    };
  }
};
</script>
