<template>
  <main class="trail-text">
    <div class="intro-content">
      <div class="intro-content__title intro-content__title--up">Zofia</div>

      <div class="intro-content__title intro-content__title--down">
        Dab<em>ro</em>wski
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted } from "vue";
import DefaultLayout from "../layouts/Default.vue";
import { TrailText, animationDefaults } from "../core/gsap/index";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default {
  name: "TrailText",
  layout: DefaultLayout,

  setup() {
    onMounted(() => {
      const trailTextTop = new TrailText(
        document.querySelector(".intro-content__title--up"),
        { perspective: 1000, totalTrailElements: 2 }
      );
      const trailTextBottom = new TrailText(
        document.querySelector(".intro-content__title--down"),
        { totalTrailElements: 3 }
      );
      // state
      let state = {
        isAnimating: false,
        iscontentOpen: false
      };

      // First step: fake progress and move the image to the center of the screen. Also animate the top/bottom texts in and show the enter button
      const showIntro = () => {
        if (state.isAnimating) {
          return false;
        }
        state.isAnimating = true;

        gsap
          .timeline({
            defaults: animationDefaults,
            onComplete: () => {
              // Reset the trails structure on the texts and image
              trailTextTop.reset();
              trailTextBottom.reset();

              state.isAnimating = false;
            }
          })
          .addLabel("start", 0)
          .add(() => {
            // Flip
            Flip.from(state, {
              duration: animationDefaults.duration,
              ease: animationDefaults.ease,
              stagger: -0.03,
              scale: true
              //rotateY: 360,
            });
          }, "start")
          // Hide the intro title trail elements initially and show its parents which are hidden by default (CSS)
          .set(
            [trailTextTop.DOM.trailElems, trailTextBottom.DOM.trailElems],
            {
              opacity: 0
            },
            "start"
          )
          .set(
            [trailTextTop.DOM.el, trailTextBottom.DOM.el],
            {
              opacity: 1
            },
            "start"
          )
          // Now translate the title elements
          .to(
            trailTextTop.DOM.trailElems,
            {
              y: 0,
              startAt: { rotateY: 160, opacity: 0 },
              rotateY: 0,
              opacity: 1,
              stagger: -0.1
            },
            "start"
          )
          .to(
            trailTextBottom.DOM.trailElems,
            {
              y: 0,
              opacity: 1,
              stagger: -0.08
            },
            "start"
          );
      };

      // Simulate the initial progress
      showIntro();
    });
  }
};
</script>

<style lang="scss">
@import "@lau.ra/styles/src/config/config.scss";

.intro-content__title--up {
  font-family: kudryashev-d-excontrast-sans, sans-serif;
  font-weight: 300;
  grid-area: title-up;
  align-self: end;
  opacity: 0;
  opacity: 1;
}

.intro-content__title--up .trail__text {
  transform: translateY(-14vh);
}

.intro-content__title--down {
  text-transform: uppercase;
  grid-area: title-down;
  opacity: 0;
  opacity: 1;
}

.intro-content__title--down .trail__text {
  transform: translateY(18vh);
}

.trail-text {
  padding: 1rem;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 250px;
  grid-template-rows: 25% 25% 1fr;
  grid-template-areas: "logo menu" "... ..." "button-enter button-enter" "frame frame";
}

.intro-content {
  height: 100%;
  overflow: hidden;
  grid-area: 1 / 1 / -1 / -1;
  display: grid;
  grid-template-columns: 100%;
  justify-items: center;
  grid-template-rows: 4rem min-content min-content 1rem auto 1fr;
  grid-template-areas: "..." "title-up" "title-down" "..." "image" "...";
  padding-top: var(--eight-rule-12);
}

.intro-content__title {
  font-size: 20vh;
  font-size: clamp(1.5rem, 16vh, 12vw);
  line-height: 0.9;
  position: relative;
  color: var(--color-title);
  font-weight: 400;
  white-space: nowrap;
  align-self: end;
  will-change: transform;
}

.intro-content__title em {
  font-weight: 400;
  font-style: italic;
}
</style>
