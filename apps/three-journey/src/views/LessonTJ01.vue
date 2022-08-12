<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Setup01 from "../core/Setup01";

export default {
  name: "LessonTJ01",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Setup01(canvas.value);
    });
    return {
      canvas
    };
  }
};
</script>
