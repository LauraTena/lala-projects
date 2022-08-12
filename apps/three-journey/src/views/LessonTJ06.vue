<template>
  <canvas ref="canvas" class="canvas"></canvas>
</template>

<script>
import { onMounted } from "vue";
import Setup06 from "../core/Setup06";

export default {
  name: "LessonTJ06",
  setup() {
    onMounted(() => {
      Setup06();
    });
  }
};
</script>
