import gsap from "gsap";

const typing = (word) => {
  word.style.opacity = "1";
  const wordLength = word.innerText.length;
  const widthState = word.clientWidth;
  // letter animation
  gsap.fromTo(
    word,
    {
      width: "0",
      x: -widthState
    },
    {
      duration: wordLength * 0.1,
      width: `${widthState}px`,
      ease: `steps(${wordLength})`
    },
    0
  );
  // text cursor animation
  gsap.fromTo(
    word,
    {
      borderRightColor: "rgba(255,255,255,0.75)"
    },
    {
      duration: 0.5,
      borderRightColor: "rgba(255,255,255,0)",
      repeat: -1,
      ease: `steps(${wordLength})`
    }
  );
};

export { typing };
