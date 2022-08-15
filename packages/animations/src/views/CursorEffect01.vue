<template>
  <main class="cursor-01">
    <a class="f-size-h5" href="#">this is a link with fancy hover</a>
    <div class="image-container">
      <div class="image-mask">
        <img
          class="is-inside-mask"
          src="https://www.re-thinkingthefuture.com/wp-content/uploads/2020/05/A806-New-Delhi-How-Architecture-and-Politics-shaped-the-city-and-continues-shaping-it.-1.jpg"
          alt="" />
      </div>
    </div>

    <svg class="cursor" width="100" height="100" viewBox="0 0 100 100">
      <defs>
        <filter
          id="cursor-filter"
          x="-50%"
          y="-50%"
          width="200%"
          height="200%"
          filterUnits="objectBoundingBox">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0"
            numOctaves="1"
            result="warp" />
          <feOffset dx="0" result="warpOffset" />
          <feDisplacementMap
            xChannelSelector="R"
            yChannelSelector="G"
            scale="40"
            in="SourceGraphic"
            in2="warpOffset" />
        </filter>
      </defs>
      <circle class="cursor__inner" cx="50" cy="50" r="10" />
    </svg>
    <svg
      class="cursor"
      width="100"
      height="100"
      viewBox="0 0 100 100"
      data-amt="0.15"
      data-radius-enter="40">
      <circle class="cursor__inner" cx="50" cy="50" r="10" />
    </svg>
    <div class="content"></div>
  </main>
</template>

<script>
import { onMounted } from "vue";
import DefaultLayout from "../layouts/Default.vue";
import { Cursor01 } from "../core/gsap/index";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default {
  name: "CursorEffect01",
  layout: DefaultLayout,
  setup() {
    onMounted(() => {
      // Initialize custom cursor
      new Cursor01(document.querySelectorAll(".cursor"), ".cursor-01 a, img");
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/src/config/config.scss";

:root {
  --cursor-stroke: var(--color-primary);
}

.content {
  pointer-events: none;
  height: var(--layout-row-6);
  grid-template-rows: 1fr 50%;
  opacity: 0;
  overflow: hidden;

  .image-mask {
    width: 100%;
    height: 100%;
    bottom: 0;
    right: 0;
  }
}

.content--open {
  opacity: 1;
  pointer-events: auto;
}

.cursor-01 {
  position: relative;
  min-height: calc(100vh - var(--eight-rule-12));
  width: 100%;

  .image-mask {
    width: var(--layout-col-5);
    height: var(--layout-row-4);
    position: absolute;
    bottom: calc(var(--layout-margin) * 2);
    right: 0;
    overflow: hidden;

    img {
      cursor: pointer;
    }
  }

  a {
    display: inline;
    text-transform: uppercase;
  }
}
.cursor {
  display: none;
}

@media (any-pointer: fine) {
  .cursor {
    position: fixed;
    top: 0;
    left: 0;
    display: block;
    pointer-events: none;
    z-index: 10000;
  }

  .cursor__inner {
    fill: none;
    stroke: var(--cursor-stroke);
    stroke-width: 1.3px;
  }

  .no-js .cursor {
    display: none;
  }
}
</style>
