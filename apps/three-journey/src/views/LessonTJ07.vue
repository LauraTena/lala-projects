<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { ref, onMounted } from "vue";
import Setup07 from "../core/Setup07";

export default {
  name: "LessonTJ07",
  setup() {
    const canvas = ref(null);
    onMounted(() => {
      Setup07(canvas.value);
    });
    return {
      canvas
    };
  }
};
</script>
