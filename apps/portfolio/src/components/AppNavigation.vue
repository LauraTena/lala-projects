<template>
  <nav class="nav">
    <router-link class="nav__logo" to="/">lau<span>.ra</span></router-link>
    <ul class="nav__link__list">
      <li class="nav__link__item">
        <router-link to="/">Project</router-link>
      </li>
      <li class="nav__link__item">
        <router-link to="/about">About</router-link>
      </li>
    </ul>
  </nav>
</template>

<style lang="scss">
@import "../../../../packages/styles/src/config/config.scss";

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 64px;
  height: 64px;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 11;

  &__logo {
    font-family: var(--font-family-primary);
    font-size: getRemUnits(36);
    color: var(--color-primary);
    font-weight: 700;

    span {
      color: var(--color-bg);
      mix-blend-mode: difference;
    }
  }

  &__link {
    &__list {
      display: flex;
    }

    &__item {
      margin-left: var(--layout-gap);
      a {
        font-family: var(--font-family-primary);
        font-weight: 400;
        min-width: var(--layout-col-1);
        text-align: center;
        display: block;
        text-transform: uppercase;
        color: var(--color-bg);
        mix-blend-mode: difference;
      }
    }
  }
}
</style>
