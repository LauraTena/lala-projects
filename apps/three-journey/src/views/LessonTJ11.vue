<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Setup11 from "../core/Setup11";

export default {
  name: "LessonTJ11",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Setup11(canvas.value);
    });
    return {
      canvas
    };
  }
};
</script>
