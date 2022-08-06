<template>
  <div id="bidirectional" class="home__frame">
    <div class="home__frame__bg"></div>
    <div class="home__horizontal box"></div>
    <div class="home__vertical box"></div>
    <div class="home__lt lt">laura tena</div>
    <h1 class="home__title">
      <div class="home__creative">creative</div>
      <div class="home__developer">developer</div>
    </h1>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { setInitialState, bidirectionalRotation } from "../core/gsap/index";

export default {
  name: "CanvasComponent",
  setup() {
    onMounted(() => {
      setInitialState();
      setTimeout(() => {
        bidirectionalRotation();
      });
    });
  }
};
</script>

<style lang="scss">
@import "../../../../packages/styles/src/config/config.scss";

.home {
  font-family: var(--font-family-primary);

  &__frame {
    position: fixed;
    right: calc(var(--layout-margin) + var(--layout-col-2));
    top: calc(var(--layout-margin) + var(--layout-row-1) + var(--layout-gap));
    width: 100vw;
    height: 100vw;

    &--rotated {
      transform-origin: 100vw 0;
      transform: rotate(-30deg);
      // opacity: 0.2;

      .home {
        &__frame {
          &__bg {
            background: var(--color-text);
          }
        }
      }
    }
  }

  &__frame {
    position: fixed;
    right: calc(var(--layout-margin) + var(--layout-col-2));
    top: calc(var(--layout-margin) + var(--layout-row-1) + var(--layout-gap));
    width: 100vw;
    height: 100vh;

    &__bg {
      position: absolute;
      background: var(--color-bg);
      top: var(--layout-row-1);
      right: -50vw;
      width: 150vw;
      height: 100vw;
      transform: translateY(-100%);
    }
  }

  &__horizontal {
    background: var(--color-primary);
    height: var(--layout-row-1);
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }

  &__vertical {
    background: var(--color-primary);
    width: var(--layout-col-1);
    height: 100%;
    position: absolute;
    top: calc(var(--layout-row-1) + var(--layout-gap));
    right: 0;
  }

  &__lt {
    font-size: getRemUnits(42);
    color: var(--color-bg);
    position: absolute;
    right: calc(0px - var(--layout-gap));
    top: var(--layout-row-1);
    transform: translate(100%, -100%);
    display: inline-block;
    font-family: var(--font-family-primary);
    font-weight: 600;
    mix-blend-mode: difference;
  }

  &__title {
    font-size: getRemUnits(64);
    font-weight: 600;
    color: var(--color-text);
  }

  &__creative {
    position: absolute;
    top: calc(var(--layout-row-1) + var(--layout-gap));
    left: calc(100% - var(--layout-col-1) - var(--layout-gap));
  }

  &__developer {
    position: absolute;
    top: calc(var(--layout-row-2) + var(--layout-gap));
    right: calc(var(--layout-col-1) + var(--layout-gap));
    transform: rotate(90deg) translate(110px, -110px);
  }
}
</style>
