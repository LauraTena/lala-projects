<template>
  <router-link class="nav__logo" to="/">
    <div class="nav__logo__lau">lau</div>
    <div class="nav__logo__ra">.ra</div>
  </router-link>
  <nav class="nav">
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
  &__logo {
    font-family: var(--font-family-primary);
    font-size: getRemUnits(36);
    color: var(--color-primary);
    font-weight: 700;

    &__lau {
      position: fixed;
      left: var(--layout-margin);
      top: var(--eight-rule-2);
      z-index: 11;
      color: var(--color-primary);
    }

    &__ra {
      position: fixed;
      left: calc(var(--layout-margin) + 50px);
      top: var(--eight-rule-2);
      z-index: 11;
      mix-blend-mode: exclusion;
      color: var(--color-text);
    }
  }

  &__link {
    &__item {
      a {
        font-family: var(--font-family-primary);
        font-weight: 400;
        min-width: var(--layout-col-1);
        text-align: center;
        display: block;
        text-transform: uppercase;
        line-height: 64px;
        mix-blend-mode: exclusion;
        color: var(--color-text);
        position: fixed;
        top: 0;
        z-index: 11;
      }

      &:last-child {
        a {
          right: var(--layout-margin);
        }
      }

      &:nth-last-child(2) {
        a {
          right: calc(
            var(--layout-margin) + var(--layout-col-1) + var(--layout-gap)
          );
        }
      }
    }
  }
}
</style>
