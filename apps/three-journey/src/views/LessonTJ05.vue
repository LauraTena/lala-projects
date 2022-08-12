<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Setup05 from "../core/Setup05";

export default {
  name: "LessonTJ05",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Setup05(canvas.value);
    });
    return {
      canvas
    };
  }
};
</script>
