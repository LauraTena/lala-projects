<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item"><h1 class="f-size-h6">lala animations</h1></li>
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
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "AppNavigation",
  setup() {
    const router = useRouter();
    const routes = ref(null);

    onMounted(() => {
      routes.value = router.getRoutes();
    });

    return { routes };
  }
};
</script>
<style lang="scss">
:root {
  --nav-width: calc(
    var(--layout-margin) + var(--layout-gap) + var(--layout-col-1)
  );
}

.nav {
  position: fixed;
  top: 0;
  left: 0;
  width: var(--nav-width);
  height: 100vh;
  background: var(--color-text);
  color: var(--color-bg);
  z-index: 1000;
  padding: var(--eight-rule-4) var(--layout-gap) var(--eight-rule-4)
    var(--layout-margin);
  box-sizing: border-box;

  &__item {
    margin-bottom: var(--eight-rule-1);

    &:first-child {
      margin-bottom: var(--eight-rule-4);
    }
  }

  &__link {
    &--active {
      color: var(--color-primary-i);
    }
  }
}
</style>
