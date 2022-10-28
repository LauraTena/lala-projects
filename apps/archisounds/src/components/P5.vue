<script setup lang="ts">
import { ref, onMounted } from "vue";
import p5 from "p5";
import "p5/lib/addons/p5.sound";
window.p5 = p5;
const canvas = ref();
const { sketch } = defineProps(["sketch"]);

const id = Date.now().toString();

onMounted(() => {
  const newP5 = new p5(sketch, canvas.value);
});
</script>

<template>
  <div ref="canvas" :id="id"></div>
</template>
