<template>
  <div class="layout-transition-01">
    <div class="intro">
      <div class="image image--up">
        <div
          class="image__inner"
          :style="`background-image: url(${'/images/layout-01-1.jpg'});`"
          data-direction="right"></div>
      </div>
    </div>
    <section class="content-wrap">
      <div class="content">
        <div class="content__row content__row--image"></div>
        <button class="content__back unbutton">
          <svg viewBox="0 0 50 9">
            <path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
          </svg>
        </button>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default {
  name: "Layout01Container",
  setup() {
    onMounted(() => {
      // intro section
      const intro = document.querySelector(".intro");
      const image = intro.querySelector(".image");
      // these will be the area where the intro image will be animated/moved to
      const contentRowImage = document.querySelector(
        ".content > .content__row--image"
      );
      const contentBackCtrl = document.querySelector(
        ".content button.content__back"
      );
      const content = document.querySelector(".content");

      // Opens the content view when clicking on the intro images
      const openContent = () => {
        // Other intro images (we'll need to hide them)

        const state = Flip.getState(image);
        // Change place
        contentRowImage.appendChild(image);
        // Flip
        Flip.from(state, {
          duration: 1.2,
          ease: "power4.inOut",
          absolute: true
        });

        intro.classList.add("intro--close");
        content.classList.add("content--open");

        gsap.set(contentBackCtrl, {
          xPercent: 20,
          opacity: 0
        });
        gsap.to(contentBackCtrl, {
          ease: "expo",
          xPercent: -100,
          yPercent: -200,
          opacity: 1
        });
      };

      const closeContent = () => {
        gsap
          .timeline({
            defaults: {
              duration: 1.1,
              ease: "power4.inOut"
            },
            onComplete: () => {
              intro.classList.remove("intro--close");
              content.classList.remove("content--open");
            }
          })
          .addLabel("start", 0)
          .to(
            contentBackCtrl,
            {
              duration: 0.8,
              xPercent: 20,
              opacity: 0
            },
            "start"
          )
          .add(() => {
            image;
            // Get state
            const state = Flip.getState(image);
            // Change place
            intro.appendChild(image);
            // Flip
            Flip.from(state, {
              duration: 1.2,
              ease: "power4.inOut",
              absolute: true
            });
          }, "start");
      };

      image.addEventListener("click", () => {
        openContent();
      });

      contentBackCtrl.addEventListener("click", () => {
        closeContent();
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/src/config/config.scss";

.layout-transition-01 {
  display: grid;
  height: 90vh;
  padding: 0;
  position: relative;
}

.intro,
.content-wrap {
  grid-area: 1 / 1 / 2 / 2;
}

.intro {
  flex: 1;
  display: grid;
  max-height: 40vmax;
  margin: auto 0;
  padding: 0 var(--padding-ver);
  grid-template-columns: 28% 1fr 22%;
  grid-template-rows: repeat(4, 1fr);
  align-items: center;
  grid-column-gap: 3%;
  grid-row-gap: 2.5vmax;
  font-size: calc(8.625vw * 0.8);
  line-height: 0.7;
  letter-spacing: calc(-0.075vw * 0.8);
  font-family: kudryashev-d-excontrast-sans, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  white-space: nowrap;
}

.intro--close {
  pointer-events: none;
}

.image {
  overflow: hidden;
  width: 100%;
  height: 100%;
  min-height: 30vh;
  position: relative;
  display: grid;
  place-items: center;
  cursor: pointer;
  will-change: transform;
}

.image--up {
  grid-area: 2 / 3;
}

.image--down {
  grid-area: 3;
}

.image__inner {
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

.content-wrap {
  align-self: stretch;
  display: grid;
}

.content {
  opacity: 0;
  pointer-events: none;
  grid-area: 1 / 1 / 2 / 2;
  display: grid;
  grid-template-columns: 100%;
  height: 100%;
  grid-template-rows: 1fr 50%;
  padding: 0 var(--padding-ver);
}

.content--open {
  opacity: 1;
  pointer-events: auto;
}

.content--open .content__row--image {
  pointer-events: none;
}

.content__back {
  grid-area: back;
  justify-self: start;
  align-self: center;
  overflow: hidden;
}

.content__back svg {
  width: 100px;
  stroke: #000;
  stroke-width: 0.3px;
  transition: transform 0.2s;
  transform-origin: 0% 50%;
  transform: scaleX(0.8);
}

.content__back:hover svg {
  transform: scaleX(1);
}

// .intro .image {
//   position: fixed;
//   bottom: var(--layout-margin);
//   right: var(--layout-margin);
//   width: var(--layout-col-4);
//   height: var(--layout-row-3);
//   z-index: 2000;
// }

.content .image {
  position: fixed;
  top: var(--layout-margin);
  right: var(--layout-margin);
  width: var(--layout-col-8);
  height: var(--layout-row-3);
  z-index: 2000;
}
</style>
