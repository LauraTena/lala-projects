<template>
  <main>
    <div class="frame">
      <h1 class="frame__title">Intro Image Trail Animation</h1>

      <nav class="frame__links">
        <a href="http://tympanus.net/Development/TextRepetitionEffect/"
          >Previous demo</a
        >
        <a href="https://tympanus.net/codrops/?p=63293">Article</a>
        <a href="https://github.com/codrops/IntroTrailEffect">GitHub</a>
      </nav>
    </div>

    <h2 class="logo">
      <span class="logo__layer logo__layer--1" aria-hidden="true">ZD</span>
      <span class="logo__layer logo__layer--2" aria-hidden="true">ZD</span>
      <span class="logo__layer logo__layer--3">ZD</span>
    </h2>

    <button class="unbutton button-menu" aria-label="Open menu"></button>

    <span class="intro-progress">0%</span>

    <div
      class="intro-image"
      style="
        background-image: url('https://images.pexels.com/photos/1172253/pexels-photo-1172253.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500');
      "></div>

    <div class="intro-content">
      <div class="intro-content__title intro-content__title--up">Zofia</div>
      <div class="intro-content__image">
        <!-- new place for intro-image -->
      </div>
      <div class="intro-content__title intro-content__title--down">
        Dab<em>ro</em>wski
      </div>
    </div>

    <button class="unbutton button-enter">
      <span>Enter</span>
    </button>

    <div class="content">
      <div class="content__title content__title--up"></div>
      <div class="content__title content__title--down"></div>
      <div class="content__about">
        <h4 class="content__about-title">About</h4>
        <div class="content__about-text">
          Some time ago a group of people were sitting in a restaurant, and one
          of them asked the others to say what they meant by Reality. There was
          much vague discussion, much talk of metaphysics and psychology, but
          one of those present, when asked his opinion, simply shrugged his
          shoulders and pointed at the saltshaker.
        </div>
      </div>
      <div class="content__image content__image--1">
        <div
          class="content__image-inner"
          style="
            background-image: url('https://cdn.pixabay.com/photo/2015/04/19/08/32/marguerite-729510__480.jpg');
          "></div>
      </div>
      <div class="content__image content__image--2">
        <!-- final place for intro-image -->
      </div>
      <div class="content__image content__image--3">
        <div
          class="content__image-inner"
          style="
            background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCZlf5lc5tX-0gY-y94pGS0mQdL-D0lCH2OQ&usqp=CAU');
          "></div>
      </div>
    </div>
  </main>
</template>

<script>
import { onMounted } from "vue";
import DefaultLayout from "../layouts/Default.vue";
import {
  TrailImage,
  TrailText,
  TextLinesReveal,
  FakeProgress
} from "@lau.ra/animations/index";
import { gsap } from "gsap";
import { Flip } from "gsap/Flip";
gsap.registerPlugin(Flip);

const animationDefaults = {
  duration: 1.4,
  ease: "power4"
};

export default {
  name: "TestingThings",
  layout: DefaultLayout,
  setup() {
    onMounted(() => {
      // trail elements (Image and the two intro title elements (up and down)
      const trailImage = new TrailImage(
        document.querySelector(".intro-image"),
        { perspective: 1000, totalTrailElements: 8 }
      );
      const trailTextTop = new TrailText(
        document.querySelector(".intro-content__title--up"),
        { perspective: 1000, totalTrailElements: 2 }
      );
      const trailTextBottom = new TrailText(
        document.querySelector(".intro-content__title--down"),
        { totalTrailElements: 3 }
      );

      // DOM elements
      const frame = {
        menu: document.querySelector(".button-menu"),
        logo: document.querySelector(".logo"),
        progress: document.querySelector(".intro-progress")
      };
      const intro = {
        image: document.querySelector(".intro-content__image"),
        enterButton: document.querySelector(".button-enter")
      };
      const content = {
        titleTop: document.querySelector(".content__title--up"),
        titleBottom: document.querySelector(".content__title--down"),
        about: document.querySelector(".content__about"),
        aboutText: document.querySelector(".content__about-text"),
        finalImagePlacement: document.querySelector(".content__image--2"),
        otherImages: document.querySelectorAll(
          ".content__image--1 > .content__image-inner, .content__image--3 > .content__image-inner"
        )
      };

      // the TextLinesReveal instance (animate each text line of the about text using the SplitText library)
      const aboutLines = new TextLinesReveal(content.aboutText);

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
              trailImage.reset();

              state.isAnimating = false;
            }
          })
          .addLabel("start", 0)
          .add(() => {
            // Let's use the gsap Flip plugin to animate the image into a new element (.intro-content__image)
            // Get state
            const state = Flip.getState(trailImage.DOM.trailElems);
            // Change place
            intro.image.appendChild(trailImage.DOM.el);
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
          )
          // And show the intro enter button
          .to(
            intro.enterButton,
            {
              startAt: { opacity: 0, scale: 0.8 },
              opacity: 1,
              scale: 1
            },
            "start+=0.3"
          )
          .add(() => {
            // Show the logo and menu button
            frame.menu.classList.add("show");
            frame.logo.classList.add("show");
          }, "start+=0.3");
      };

      // Second step: show the other images and scale down the texts
      const showContent = () => {
        if (state.isAnimating || state.iscontentOpen) {
          return false;
        }
        state.isAnimating = true;
        state.iscontentOpen = true;

        gsap
          .timeline({
            defaults: animationDefaults,
            onComplete: () => {
              state.isAnimating = false;
            }
          })
          .addLabel("start", 0)
          .to(
            intro.enterButton,
            {
              duration: 0.6,
              opacity: 0,
              scale: 0.8
            },
            "start"
          )
          .add(() => {
            const topTitleState = Flip.getState(trailTextTop.DOM.el);
            const bottomTitleState = Flip.getState(trailTextBottom.DOM.el);

            content.titleTop.appendChild(trailTextTop.DOM.el);
            content.titleBottom.appendChild(trailTextBottom.DOM.el);

            Flip.from(topTitleState, {
              duration: animationDefaults.duration,
              ease: animationDefaults.ease,
              scale: true
            });

            Flip.from(bottomTitleState, {
              duration: animationDefaults.duration,
              ease: animationDefaults.ease,
              scale: true
            });

            const imageState = Flip.getState(trailImage.DOM.el, {
              props: "border-radius"
            });
            // Change place
            content.finalImagePlacement.appendChild(trailImage.DOM.el);
            gsap.set(trailImage.DOM.el, { opacity: 1 });
            // Flip
            Flip.from(imageState, {
              duration: animationDefaults.duration,
              ease: animationDefaults.ease
            });
          }, "start")

          // animate the other images in
          .to(
            content.otherImages,
            {
              startAt: { yPercent: 100 },
              yPercent: 0,
              opacity: 1
            },
            "start+=0.1"
          )
          // about section
          .to(
            content.about,
            {
              startAt: { yPercent: 10 },
              yPercent: 0,
              opacity: 1
            },
            "start+=0.2"
          )
          // about text lines
          .add(() => {
            aboutLines.in();
          }, "start+=0.2");
      };

      // Enter button click event
      intro.enterButton.addEventListener("click", showContent);

      // Simulate the initial progress
      const fakeProgress = new FakeProgress(frame.progress);
      fakeProgress.onComplete(showIntro);
    });
  }
};
</script>

<style lang="scss" scoped>
@import "@lau.ra/styles/src/config/config.scss";
*,
*::after,
*::before {
  box-sizing: border-box;
}

:root {
  font-size: 17px;
}

html,
body {
  height: 100vh;
  overflow: hidden;
}

body {
  margin: 0;
  --color-text: #fff;
  --color-title: #dbb59b;
  --color-bg: #161a19;
  --color-link: #7f9993;
  --color-link-hover: #fff;
  --color-menu: #7f9993;
  --img-ratio: 1.5;
  font-weight: 300;
  color: var(--color-text);
  background: var(--color-bg);
  font-family: acumin-pro, -apple-system, BlinkMacSystemFont, Segoe UI,
    Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body::after {
  z-index: 1000;
  content: "";
  pointer-events: none;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background-size: cover;
  animation: move 7s infinite alternate 2s;
  transform-origin: 100% 0%;
}

@keyframes move {
  to {
    transform: scaleX(1.1);
  }
}

/* Page Loader */
.js .loading::before,
.js .loading::after {
  content: "";
  position: fixed;
  z-index: 1000;
}

.js .loading::before {
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--color-bg);
}

.js .loading::after {
  top: 50%;
  left: 50%;
  width: 60px;
  height: 60px;
  margin: -30px 0 0 -30px;
  border-radius: 50%;
  opacity: 0.4;
  background: var(--color-link);
  animation: loaderAnim 0.7s linear infinite alternate forwards;
}

@keyframes loaderAnim {
  to {
    opacity: 1;
    transform: scale3d(0.5, 0.5, 1);
  }
}

a {
  text-decoration: none;
  color: var(--color-link);
  outline: none;
  white-space: nowrap;
  overflow: hidden;
  position: relative;
}

a::before {
  content: "";
  height: 1px;
  width: 100%;
  background: currentColor;
  position: absolute;
  top: 95%;
  transition: transform 0.3s;
  transform-origin: 0% 50%;
}

a:hover::before {
  transform: scaleX(0);
  transform-origin: 100% 50%;
}

a:hover {
  color: var(--color-link-hover);
  outline: none;
}

/* Better focus styles from https://developer.mozilla.org/en-US/docs/Web/CSS/:focus-visible */
a:focus {
  /* Provide a fallback style for browsers
	 that don't support :focus-visible */
  outline: none;
  background: lightgrey;
}

a:focus:not(:focus-visible) {
  /* Remove the focus indicator on mouse-focus for browsers
	 that do support :focus-visible */
  background: transparent;
}

a:focus-visible {
  /* Draw a very noticeable focus style for
	 keyboard-focus on browsers that do support
	 :focus-visible */
  outline: 2px solid red;
  background: transparent;
}

.oh {
  overflow: hidden;
}

.line {
  transform-origin: 0 50%;
  padding-bottom: 0.15rem;
  white-space: nowrap;
  will-change: transform;
}

.unbutton {
  background: none;
  border: 0;
  padding: 0;
  margin: 0;
  font: inherit;
}

.unbutton:focus {
  outline: none;
}

main {
  padding: 1rem;
  display: grid;
  height: 100%;
  grid-template-columns: 1fr 250px;
  grid-template-rows: 25% 25% 1fr;
  grid-template-areas: "logo menu" "... ..." "button-enter button-enter" "frame frame";
}

.frame {
  grid-area: frame;
  padding-bottom: 0.5rem;
  position: relative;
  z-index: 200;
}

.frame__title {
  font-size: 1rem;
  margin: 0;
  font-weight: normal;
  position: relative;
}

.frame__links a:not(:last-child) {
  margin-right: 1rem;
}

.logo {
  margin: 0;
  font-size: 2.45rem;
  grid-area: logo;
  font-family: kudryashev-d-excontrast-sans, sans-serif;
  font-weight: 300;
  display: grid;
  justify-self: start;
  line-height: 1;
  color: var(--color-title);
}

.logo__layer {
  grid-area: 1 / 1 / 2 / 2;
  transition: all ease-out 0.5s;
}

.show .logo__layer--1 {
  opacity: 0.1;
}

.show .logo__layer--2 {
  opacity: 0.3;
  transform: translateX(50%);
}

.show .logo__layer--3 {
  transform: translateX(100%);
}

.button-menu {
  z-index: 100;
  margin: 0.5rem 1.5rem;
  grid-area: menu;
  justify-self: end;
  width: 1.65rem;
  height: 0.65rem;
  color: var(--color-menu);
  border-top: 2px solid currentColor;
  border-bottom: 2px solid currentColor;
  opacity: 0.5;
  align-self: start;
  cursor: not-allowed;
}

.intro-progress {
  grid-area: logo;
  justify-self: start;
  align-self: start;
  font-size: 10vw;
  width: 4ch;
  line-height: 0.5;
  font-weight: 400;
  color: var(--color-title);
}

.intro-image {
  position: relative;
  background-size: 100%;
  background-repeat: no-repeat;
  grid-area: 1 / 1 / -1 / -1;
  justify-self: end;
  --img-height: 260px;
  height: var(--img-height);
  width: calc(1 / var(--img-ratio) * var(--img-height));
}

.intro-content__image .intro-image {
  --img-height: 360px;
}

.trail {
  position: relative;
  display: grid;
  place-items: center;
}

.no-js .trail {
  width: 100%;
  height: 100%;
  background-size: 100%;
}

.trail__img,
.trail__text {
  position: relative;
  will-change: transform;
  grid-area: 1 / 1 / 2 / 2;
}

.trail__img {
  width: 100%;
  height: 100%;
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
}

.intro-content__title {
  font-size: 25vh;
  font-size: clamp(1.5rem, 22vh, 14vw);
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

.intro-content__title--up {
  font-family: kudryashev-d-excontrast-sans, sans-serif;
  font-weight: 300;
  grid-area: title-up;
  align-self: end;
  opacity: 0;
}

.intro-content__title--up .trail__text {
  transform: translateY(-14vh);
}

.intro-content__title--down {
  text-transform: uppercase;
  grid-area: title-down;
  opacity: 0;
}

.intro-content__title--down .trail__text {
  transform: translateY(18vh);
}

.intro-content__image {
  grid-area: image;
  align-self: end;
}

.button-enter {
  position: relative;
  z-index: 200;
  grid-area: button-enter;
  align-self: center;
  justify-self: center;
  color: inherit;
  background: transparent;
  width: 100px;
  height: 100px;
  display: grid;
  place-items: center;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
  border: 1px solid currentColor;
  align-self: start;
}

.button-enter.hide {
  pointer-events: none;
}

.button-enter span {
  pointer-events: none;
  cursor: pointer;
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
  color: #fff;
  font-weight: 400;
  transform: translateY(1rem);
  transition: color, transform 0.3s;
}

.button-enter:hover span,
.button-enter:focus-visible span {
  color: #000;
  transform: translateY(0);
}

.button-enter::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  margin: -50px 0 0 -50px;
  background: #fff;
  transform: translateY(100%);
  transition: transform 0.3s;
}

.button-enter:hover::before,
.button-enter:focus-visible::before {
  transform: translateY(0%);
}

.js .logo,
.js .button-menu,
.js .button-enter {
  opacity: 0;
}

.js .logo.show,
.js .button-menu.show,
.js .button-enter.show {
  transition: opacity ease-out 0.5s;
  opacity: 1;
}

.js .button-enter.show {
  transition: opacity ease-in-out 1.5s;
}

.content {
  pointer-events: none;
  height: 100%;
  grid-area: 1 / 1 / -1 / -1;
  display: grid;
  padding: 0 1rem;
  grid-template-columns: 31% 31% 31%;
  grid-column-gap: 3.5%;
  grid-template-rows: 4rem min-content min-content 2rem auto auto;
  grid-template-areas:
    "... ... ..."
    "content-title-up content-title-up content-title-up"
    "content-title-down content-title-down content-title-down"
    "... ... ..."
    "content-about content-about content-about"
    "content-img-1 content-img-2 content-img-3";
}

.content__title {
  position: relative;
}

.content__title .intro-content__title {
  font-size: clamp(2rem, 10vh, 8vw);
  width: min-content;
  grid-column: 1 / span 2;
}

.content__title--up {
  z-index: 1;
  grid-area: content-title-up;
}

.content__title--down {
  z-index: 3;
  grid-area: content-title-down;
}

.content__about {
  position: relative;
  z-index: 100;
  grid-area: content-about;
  display: flex;
  flex-direction: column;
  font-size: 1.3rem;
  line-height: 1.1;
  opacity: 0;
}

.content__about-title {
  font-style: italic;
  margin: 0 7vw 0 0;
}

.content__about p {
  margin: 0 0 1rem;
}

.content__image {
  position: relative;
  z-index: 2;
  display: flex;
  align-items: flex-end;
  margin-bottom: -20vh;
}

.content__image--1 {
  grid-area: content-img-1;
}

.content__image--2 {
  grid-area: content-img-2;
}

.content__image--3 {
  grid-area: content-img-3;
}

.content__image-inner,
.content__image .intro-image {
  background-position: 50% 0%;
  background-size: cover;
  width: 100%;
  height: 100%;
  opacity: 0;
  border-radius: 20vw 20vw 0 0;
  will-change: opacity, transform, border-radius;
}

@media screen and (min-width: 53em) {
  main {
    padding: 2.5rem 1rem 0;
    grid-column-gap: 5vw;
    grid-template-columns: 30vw 1fr 30vw;
    grid-template-rows: auto 50% 1fr auto;
    grid-template-areas:
      "logo ... menu"
      "... ... ..."
      "... button-enter ..."
      "frame frame frame";
  }
  .intro-content {
    grid-template-rows: 32% 15% 35% 18%;
    grid-template-areas: "title-up" "title-down" "image" "...";
  }
  .intro-image {
    --img-height: 45vh;
  }

  .intro-content__image .intro-image {
    --img-height: 53vh;
  }
  .content {
    grid-template-rows: 20% 10vh 10vh auto auto;
    grid-template-areas:
      "... ... ..."
      "content-title-up content-about content-about"
      "content-title-down content-about content-about"
      "content-img-1 content-img-2 content-img-3";
  }
  .content__title .intro-content__title {
    grid-column: 1 / span 2;
  }
  .content__about {
    flex-direction: row;
    grid-row: 2 / span 2;
    justify-self: end;
    max-width: 440px;
  }
  .content__image-inner,
  .content__image .intro-image {
    height: 50vh;
    border-radius: 20vw 20vw 0 0;
  }
  .button-enter {
    align-self: center;
  }
  .frame {
    display: grid;
    width: 100%;
    grid-template-areas: "title links sponsor";
    grid-template-columns: auto auto 1fr;
  }

  .frame__title {
    grid-area: title;
  }

  .frame__links {
    grid-area: links;
  }

  .frame__links {
    margin-left: 5vw;
  }
}
</style>
