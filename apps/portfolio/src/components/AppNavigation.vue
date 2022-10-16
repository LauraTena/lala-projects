<template>
  <nav class="nav" :class="{ 'nav--open' : isOpen}">
    <div class="nav__spacer"></div>
    <ul class="nav__link__list">
      <li class="nav__link__logo">
        <router-link to="/" class="nav__flex h4">
          <svg width="101" height="67" viewBox="0 0 101 67" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M101 0H0V67H101V0ZM90.9899 60.9119C89.7299 62.4959 87.7859 63.4679 85.3379 63.4679C80.1539 63.4679 76.5179 59.2199 76.5179 54.0359C76.5179 48.9239 80.6939 44.6399 86.1659 44.6399C91.7459 44.6399 95.8499 48.6719 95.8499 54.0359V62.9999H90.9899V60.9119ZM81.6299 54.0719C81.6299 56.5919 83.5379 58.6799 86.1659 58.6799C88.7939 58.6799 90.7379 56.5919 90.7379 54.0719C90.7379 51.5519 88.7939 49.4639 86.1659 49.4639C83.5379 49.4639 81.6299 51.5519 81.6299 54.0719ZM69.899 62.9999V52.9559C69.899 50.8319 71.123 49.5359 73.139 49.5359C74.075 49.5359 75.119 49.7879 75.983 50.2919V45.3239C75.083 44.9279 73.823 44.7119 72.671 44.7119C67.379 44.7119 64.787 48.2039 64.787 52.7759V62.9999H69.899ZM57.868 63.3959C59.596 63.3959 61 61.9559 61 60.2279C61 58.4999 59.596 57.0599 57.868 57.0599C56.104 57.0599 54.7 58.4999 54.7 60.2279C54.7 61.9559 56.104 63.3959 57.868 63.3959Z" fill="#6E877B"/>
            <path d="M2.87988 36.9719V62.9999H7.99188V36.9719H2.87988Z" fill="#DAFF7D"/>
            <path d="M19.828 63.4679C22.276 63.4679 24.22 62.4959 25.48 60.9119V62.9999H30.34V54.0359C30.34 48.6719 26.236 44.6399 20.656 44.6399C15.184 44.6399 11.008 48.9239 11.008 54.0359C11.008 59.2199 14.644 63.4679 19.828 63.4679ZM20.656 58.6799C18.028 58.6799 16.12 56.5919 16.12 54.0719C16.12 51.5519 18.028 49.4639 20.656 49.4639C23.284 49.4639 25.228 51.5519 25.228 54.0719C25.228 56.5919 23.284 58.6799 20.656 58.6799Z" fill="#DAFF7D"/>
            <path d="M42.3229 58.5359C39.6949 58.5359 38.3989 56.1959 38.3989 53.4599V45.1799H33.2869V54.0359C33.2869 59.2559 36.3829 63.4679 42.3229 63.4679C48.2989 63.4679 51.3949 59.2559 51.3949 54.0359V45.1799H46.2829V53.4239C46.2829 56.1959 44.9509 58.5359 42.3229 58.5359Z" fill="#DAFF7D"/>
          </svg>
          <div class="nav__spacer"></div>
        </router-link>
      </li>
      <li class="nav__link__item h5">
        <router-link to="/projects">projects</router-link>
      </li>
      <li class="nav__link__item h5">
        <router-link to="/about">about</router-link>
      </li>
    </ul>
    <div class="nav__spacer"></div>
  </nav>
</template>

<script>
import { ref,onMounted } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "AppNavigation",
  setup() {
    const isOpen = false;
    const isNotHome = false;

    const showNavigatioon = () => {
      this.isOpen = true;
    };

    const hideNavigatioon = () => {
      this.isOpen = false;
    };

    const router = useRouter();
    const routes = ref(null);

    onMounted(() => {
      routes.value = router.getRoutes();
      console.log(routes)
      console.log(router)
    });

    return { isOpen, isNotHome };
  }
};
</script>

<style lang="scss">
@import "@lau.ra/styles/src/config/config.scss";

.nav {
  grid-column: 8;
  grid-row: 1;
  margin-right: -64px;
  position: sticky;
  top: 0;
  right: 0;
  z-index: 11;
  background: pink;

  &--open {
    display: flex;
    flex-direction: column;
    grid-row: 1 / 4;
  }

  &__link {

    &__logo {
      height: 67px;
    }

    &__item {
      color: var(--color-primary);
      background: var(--color-secondary);
    }
  }

  &__spacer {
    background: var(--color-secondary);
    flex: 1;
  }

  &__flex {
    display: flex;
  }
}
</style>
