<template>
  <div class="anything-along-an-svg-path">
    <svg viewBox="-10 -10 361 220">
      <path
        d="M96.5,43.2a8.21,8.21,0,0,0-11.24,3L78.79,57.42h0A72.21,72.21,0,1,0,131.59,89l7-12a8.21,8.21,0,0,0-3-11.24Z"
        fill="#000" />
      <path
        d="M260,26.88c-15.68-28.38,50.4-35.16,71.16-14s8.47,50.84-38.12,50.84S210,22.67,184.63,21.38s-71.3,34.28-71.3,34.28"
        transform="translate(0 0)"
        fill="none"
        stroke="#231f20"
        class="fuse" />
    </svg>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { createParticle } from "../core/gsap";

export default {
  name: "AnythingAlongAnSvgPath",
  setup() {
    onMounted(() => {
      const svg = document.querySelector(".anything-along-an-svg-path svg");
      const fuse = svg.querySelector(".fuse");
      console.log(svg);
      console.log(fuse);
      const val = { distance: 0 };
      gsap.to(val, {
        distance: fuse.getTotalLength(),
        repeat: -1,
        duration: 5,
        onUpdate: () => {
          // Query a point at the new distance value
          const point = fuse.getPointAtLength(val.distance);
          // Create a new particle
          createParticle(svg, point);
        }
      });

      /* Animate the fuse to reduce it */
      fuse.setAttribute("stroke-dasharray", fuse.getTotalLength());
      fuse.setAttribute("stroke-dashoffset", fuse.getTotalLength() * 2);
      gsap.to(fuse, {
        strokeDashoffset: fuse.getTotalLength(),
        duration: 5,
        repeat: -1,
        // Wait 1sec before repeating
        repeatDelay: 1
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../../packages/styles/src/config/config.scss";

svg {
  overflow: visible;
  width: 50%;
  height: 50%;
}
</style>
