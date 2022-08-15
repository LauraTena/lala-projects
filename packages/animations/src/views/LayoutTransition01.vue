<template>
  <main class="layout-transition-01">
    <div class="intro">
      <div class="row row--1">
        <span class="row__text oh"
          ><span data-direction="top">Facts do</span></span
        >
        <span class="row__text oh"
          ><span data-direction="right">not</span></span
        >
      </div>
      <div class="row row--2">
        <span class="row__text oh"
          ><span data-direction="left">cease</span></span
        >
        <span class="row__text oh"
          ><span data-direction="bottom">to exist</span></span
        >
      </div>
      <div class="row row--3">
        <span class="row__text oh"
          ><span data-direction="right">because</span></span
        >
        <span data-direction="right" class="row__text oh"
          ><span data-direction="right">they</span></span
        >
      </div>
      <div class="row row--4">
        <span class="row__text oh"
          ><span data-direction="bottom">are ignored</span></span
        >
      </div>
      <div class="image image--up">
        <div
          class="image__inner"
          :style="`background-image: url(${'/images/layout-01-1.jpg'});`"
          data-direction="right"></div>
      </div>
      <div class="image image--down">
        <div
          class="image__inner"
          :style="`background-image: url(${'/images/layout-01-2.jpg'})`"
          data-direction="left"></div>
      </div>
    </div>
    <section class="content-wrap">
      <div class="content">
        <div class="content__row content__row--image"></div>
        <div class="content__row content__row--text">
          <h2 class="content__title">
            <span class="oh"><span>The progressive power</span></span
            ><br />
            <span class="oh"><span>of frequencies</span></span>
          </h2>
          <span class="content__number"
            ><span class="oh"><span>1</span></span></span
          >
          <button class="content__back unbutton">
            <svg viewBox="0 0 50 9">
              <path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
            </svg>
          </button>
          <div class="content__meta">
            <span class="content__meta-text"
              ><span class="oh"><span>Mind Depth</span></span></span
            >
            <span class="content__meta-text content__meta-text--center"
              ><span class="oh"><span>Souls</span></span> <br /><span class="oh"
                ><span>for freedom</span></span
              ></span
            >
            <span class="content__meta-text"
              ><span class="oh"><span>Made by Humans</span></span> <br /><span
                class="oh"
                ><span>in 2022</span></span
              ></span
            >
          </div>
        </div>
      </div>
      <div class="content">
        <div class="content__row content__row--text">
          <h2 class="content__title">
            <span class="oh"><span>Quantum enhancement</span></span
            ><br />
            <span class="oh"><span>for the world</span></span>
          </h2>
          <span class="content__number"
            ><span class="oh"><span>2</span></span></span
          >
          <button class="content__back unbutton">
            <svg viewBox="0 0 50 9">
              <path d="m0 4.5 5-3m-5 3 5 3m45-3h-77"></path>
            </svg>
          </button>
          <div class="content__meta">
            <span class="content__meta-text"
              ><span class="oh"><span>Novel World</span></span></span
            >
            <span class="content__meta-text content__meta-text--center"
              ><span class="oh"><span>Souls</span></span> <br /><span class="oh"
                ><span>for love</span></span
              ></span
            >
            <span class="content__meta-text"
              ><span class="oh"><span>Made by Humans</span></span> <br /><span
                class="oh"
                ><span>in 2022</span></span
              ></span
            >
          </div>
        </div>
        <div class="content__row content__row--image"></div>
      </div>
    </section>
  </main>
</template>

<script>
import { onMounted } from "vue";
import DefaultLayout from "../layouts/Default.vue";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default {
  name: "CursorEffect01",
  layout: DefaultLayout,
  setup() {
    onMounted(() => {
      // intro section
      const intro = document.querySelector(".intro");
      // an array with the intro text spans that we want to animate (data-direction will define the animation direction)
      const introTexts = [...intro.querySelectorAll(".row__text.oh > span")];
      // an array with the intro images that will trigger the effect when clicked
      const images = [...intro.querySelectorAll(".image")];
      // an array with the content sections. These will map with the images (one content element per image)
      const contents = [...document.querySelectorAll(".content")];
      // an array of arrays for the content text spans (one sub array per content).
      let contentTexts = [];
      contents.forEach((content) => {
        contentTexts.push([...content.querySelectorAll(".oh > span")]);
      });
      // these will be the area where the intro image will be animated/moved to
      const contentRowImages = [
        ...document.querySelectorAll(".content > .content__row--image")
      ];
      const contentBackCtrls = [
        ...document.querySelectorAll(".content button.content__back")
      ];

      // Opens the content view when clicking on the intro images
      const openContent = (image, position) => {
        // Other intro images (we'll need to hide them)
        const otherImages = images
          .filter((el) => el != image)
          .map((el) => el.querySelector(".image__inner"));

        gsap
          .timeline({
            defaults: {
              duration: 1.1,
              ease: "power4.inOut"
            }
          })
          .addLabel("start", 0)
          .add(() => {
            // Get state
            const state = Flip.getState(image);
            // Change place
            contentRowImages[position].appendChild(image);
            // Flip
            Flip.from(state, {
              duration: 1.2,
              ease: "power4.inOut",
              absolute: true
            });

            intro.classList.add("intro--close");
            contents[position].classList.add("content--open");

            // hide back arrow ctrl
            gsap.set(contentBackCtrls[position], {
              xPercent: 20,
              opacity: 0
            });
            // hide text spans
            gsap.set(contentTexts[position], {
              yPercent: 101
            });
          }, "start")
          .to(
            [introTexts, otherImages],
            {
              xPercent: (_, target) => {
                switch (target.dataset.direction) {
                  case "right":
                    return 101;
                  case "left":
                    return -101;
                  default:
                    return 0;
                }
              },
              yPercent: (_, target) => {
                switch (target.dataset.direction) {
                  case "top":
                    return -101;
                  case "bottom":
                    return 101;
                  default:
                    return 0;
                }
              }
            },
            "start"
          )
          .addLabel("content", "start+=0.7")
          .to(
            contentTexts[position],
            {
              ease: "expo",
              yPercent: 0
            },
            "content"
          )
          .to(
            contentBackCtrls[position],
            {
              ease: "expo",
              xPercent: 0,
              opacity: 1
            },
            "content"
          );
      };

      const closeContent = (image, position) => {
        // Other intro images (we'll need to hide them)
        const otherImages = images
          .filter((el) => el != image)
          .map((el) => el.querySelector(".image__inner"));

        gsap
          .timeline({
            defaults: {
              duration: 1.1,
              ease: "power4.inOut"
            },
            onComplete: () => {
              intro.classList.remove("intro--close");
              contents[position].classList.remove("content--open");
            }
          })
          .addLabel("start", 0)
          .to(
            contentTexts[position],
            {
              duration: 0.8,
              yPercent: 101
            },
            "start"
          )
          .to(
            contentBackCtrls[position],
            {
              duration: 0.8,
              xPercent: 20,
              opacity: 0
            },
            "start"
          )
          .add(() => {
            images;
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
          }, "start")
          .addLabel("intro", "start+=0.6")
          .to(
            [introTexts, otherImages],
            {
              ease: "expo",
              xPercent: 0,
              yPercent: 0
              /*stagger: {
            each: 0.08,
            grid: 'auto',
            from: 'random'
        }*/
            },
            "intro"
          );
      };

      // Images click event
      images.forEach((image, position) => {
        image.addEventListener("click", () => {
          openContent(image, position);
        });
      });

      contentBackCtrls.forEach((ctrl, position) => {
        ctrl.addEventListener("click", () => {
          closeContent(images[position], position);
        });
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

.frame {
  grid-area: 1 / 1 / 2 / 2;
  text-align: center;
  text-transform: uppercase;
  display: flex;
  padding: var(--padding-hor) calc(var(--padding-ver) + calc(0.6vw * 0.8));
  flex-direction: column;
  align-self: start;
  position: relative;
  z-index: 100;
}

.frame__title {
  font-size: 1rem;
  margin: 1rem 0;
  font-weight: normal;
}

.frame__links {
  display: inline-block;
}

.frame__links a {
  margin: 0 0.5rem;
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

.row--1 {
  grid-area: 1 / 1 / 2 / 4;
}

.row--2 {
  grid-area: 2 / 1 / 3 / 4;
}

.row--3 {
  grid-area: 3 / 2 / 4 / 4;
}

.row--4 {
  grid-area: 4 / 1 / 5 / 4;
}

.oh {
  position: relative;
  display: inline-block;
  overflow: hidden;
}

.oh > span {
  display: inline-block;
  will-change: transform;
}

.row__text span {
  padding-top: calc(1.5vw * 0.8);
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

.content__row--text {
  padding: calc(var(--padding-hor) + 9rem) 0 2.5rem;
  display: grid;
  grid-template-areas: "title number" "back back" "meta meta";
  grid-template-columns: 1fr auto;
  grid-template-rows: auto 1fr auto;
}

.content__row--image + .content__row--text {
  padding-bottom: 1.5rem;
}

.content__title {
  grid-area: title;
  font-family: kudryashev-d-excontrast-sans, sans-serif;
  font-weight: 300;
  text-transform: uppercase;
  font-size: clamp(2rem, calc(4vw * 0.8), 4rem);
  line-height: 1;
  margin: 0;
}

.content__number {
  grid-area: number;
  place-self: start end;
  font-size: clamp(3rem, calc(10vw * 0.8), 10rem);
  line-height: 0.55;
  position: relative;
  display: flex;
  align-items: start;
  justify-content: start;
  align-content: start;
}

.content__number .oh > span {
  padding-bottom: calc(1.75vw * 0.8);
  padding-left: calc(6vw * 0.8);
  position: relative;
  display: block;
}

.content__number .oh > span::before {
  content: "";
  width: 1px;
  height: 111%;
  background: currentColor;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: rotate(25deg);
  transform-origin: 100% 100%;
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

.content__meta {
  grid-area: meta;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  font-size: clamp(0.75rem, calc(3vw * 0.8), 1.5rem);
  line-height: 1;
}

.content__meta-text--center {
  text-align: center;
}

@media screen and (min-width: 53em) {
  .frame {
    flex-direction: row;
  }
  .frame__title {
    margin-top: 0;
  }
  .frame__links {
    margin-left: calc(8vw * 0.8);
  }
  .content__row--text {
    padding: calc(var(--padding-hor) + 4rem) 0 2.5rem;
  }
}
</style>
