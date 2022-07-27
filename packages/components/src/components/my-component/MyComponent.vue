<script setup>
import { ref, onMounted } from "vue";

// reactive state
const count = ref(0);

// functions that mutate state and trigger updates
function increment() {
  count.value++;
}

// lifecycle hooks
onMounted(() => {});
</script>

<template>
  <div class="my-component">
    <button @click="increment">Count is: {{ count }}</button>
  </div>
</template>

<style lang="scss">
.my-component {
  background: pink;

  &__title {
    font-size: 56px;
    color: lightblue;
  }

  &__no-need {
    user-select: none;
  }
}
</style>
