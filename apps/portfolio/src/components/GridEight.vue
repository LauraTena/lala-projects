<template>
  <ul class="grid grid--col">
    <li class="grid__col"></li>
    <li class="grid__col"></li>
    <li class="grid__col"></li>
    <li class="grid__col"></li>
    <li class="grid__col"></li>
    <li class="grid__col"></li>
    <li class="grid__col"></li>
    <li class="grid__col"></li>
  </ul>
  <ul class="grid grid--row">
    <li class="grid__row"></li>
    <li class="grid__row"></li>
    <li class="grid__row"></li>
    <li class="grid__row"></li>
    <li class="grid__row"></li>
    <li class="grid__row"></li>
    <li class="grid__row"></li>
    <li class="grid__row"></li>
  </ul>
</template>

<style lang="scss">
@import "@lau.ra/styles/src/config/config.scss";

.grid {
  display: flex;
  gap: var(--layout-gap);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;

  &--col {
    margin: 0 var(--layout-margin);
  }

  &--row {
    flex-direction: column;
    margin: var(--layout-margin) 0;
  }

  &__col {
    background: var(--color-terciary);
    opacity: 0.4;
    width: calc(var(--layout-col-1));
    height: 100%;
    flex-shrink: 0;
  }

  &__row {
    background: var(--color-terciary);
    opacity: 0.4;
    height: calc(var(--layout-row-1));
    width: 100%;
    flex-shrink: 0;
  }
}
</style>
