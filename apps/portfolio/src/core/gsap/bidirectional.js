import gsap from "gsap";
import { Flip } from "gsap/Flip";
import { typing } from "./index";

gsap.registerPlugin(Flip);

const drawInvertedBox = () => {
  gsap.to(".home__frame__bg", {
    height: "100vw",
    ease: "bounce.in",
    duration: 1
  });
};

const flipFrame = () => {
  const group = document.querySelector("#bidirectional");

  const stateFrame = Flip.getState("#bidirectional *");

  group.classList.add("home__frame--rotated");
  Flip.from(stateFrame, {
    duration: 0.8,
    stagger: 0,
    ease: "power1.inOut",
    onComplete: () => {
      drawInvertedBox();
    }
  });
};

const setInitialState = () => {
  gsap.set(".home__horizontal", {
    width: 0
  });
  gsap.set(".home__vertical", {
    height: 0
  });
  gsap.set(".home__creative", {
    opacity: "0.2",
    overflow: "hidden"
  });
};

const showBoxes = () => {
  gsap.to(".home__vertical", {
    height: "100%",
    ease: "power3.in",
    duration: 1
  });
  gsap.to(".home__horizontal", {
    width: "100%",
    ease: "power3.in",
    duration: 1
  });
};

const showCreative = () => {
  const word = document.querySelector(".home__creative");
  typing(word);
};

const bidirectionalRotation = () => {
  const tl = gsap.timeline();

  tl.add(showBoxes);
  showCreative();
};

export { setInitialState, bidirectionalRotation };
