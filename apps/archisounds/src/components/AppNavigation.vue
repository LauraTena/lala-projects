<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item nav__item--title">
        <h1 class="f-size-h6">archisounds</h1>
      </li>
      <li class="nav__item" v-for="route in routes" :key="route.name">
        <router-link
          :to="route.path"
          v-slot="{ isActive }"
          class="nav__link"
          class-active="active"
          >{{ route.name }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { ref, onMounted } from 'vue';
import { useRouter } from 'vue-router';

export default {
  name: 'AppNavigation',
  setup() {
    const router = useRouter();
    const routes = ref(null);

    onMounted(() => {
      routes.value = router.getRoutes();
    });

    return { routes };
  },
};
</script>
<style lang="scss">
.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: 40px;
  height: 100vh;
  background: var(--color-bg);
  color: var(--color-text);
  z-index: 1000;
  padding: var(--eight-rule-4);
  box-sizing: border-box;

  &__item {
    margin-bottom: var(--eight-rule-1);
    padding: 8px;

    &--title {
      writing-mode: vertical-lr;
      padding: 24px 4px;
    }
  }

  .router-link-active {
    color: var(--color-primary);
  }
}
</style>
