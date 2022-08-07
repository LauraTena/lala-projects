<template>
  <div class="layout-01">
    <button class="layout-01__button layout-01__button--hide">HIDE TEXT</button>
    <button class="layout-01__button layout-01__button--show">SHOW TEXT</button>
    <div class="intro">
      <div class="row row--1">
        <span class="row__text oh"
          ><span data-direction="top" data-micono="blue">Facts do</span></span
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
  </div>
</template>

<script>
import { onMounted } from "vue";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

export default {
  name: "CursorEffect01",
  setup() {
    onMounted(() => {
      // intro section
      const intro = document.querySelector(".intro");
      const hideTexts = document.querySelector(".layout-01__button--hide");
      const showTexts = document.querySelector(".layout-01__button--show");
      const introTexts = [...intro.querySelectorAll(".row__text.oh > span")];

      // Opens the content view when clicking on the intro images
      const openContent = () => {
        gsap.to([introTexts], {
          duration: 1.1,
          ease: "power4.inOut",
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
        });
      };

      const closeContent = () => {
        gsap.to([introTexts], {
          duration: 1.1,
          ease: "expo",
          xPercent: 0,
          yPercent: 0,
          stagger: {
            each: 0.08,
            grid: "auto",
            from: "random"
          }
        });
      };

      hideTexts.addEventListener("click", () => {
        openContent();
      });

      showTexts.addEventListener("click", () => {
        closeContent();
      });
    });
  }
};
</script>

<style lang="scss" scoped>
@import "../../../styles/src/config/config.scss";

.layout-01 {
  display: grid;
  height: 90vh;
  padding: 0;
  position: relative;

  &__button {
    position: absolute;
    top: 0;
    left: 0;

    &--show {
      left: auto;
      right: 0;
    }
  }
}

.intro {
  flex: 1;
  display: grid;
  max-height: 40vmax;
  margin: 5vh 0;
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
</style>
