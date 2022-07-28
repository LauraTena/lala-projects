import Jelly from "./jelly/jelly";

export default function GenerateCanvas(svg, canvas, options, playlist) {
  const svgWidth = options.width ? options.width : window.innerWidth;
  const svgHeight = options.height ? options.height : window.innerHeight;
  const size = options.size ? options.size : 200;
  const gap = options.gap ? options.gap : 30;
  const rectSize = size - gap;
  const totalX = Math.ceil(svgWidth / size);
  const totalY = Math.ceil(svgHeight / size);
  const margin = gap / 2;
  const gridXAdjustment = (totalX * size - svgWidth) / 2;
  const gridYAdjustment = (totalY * size - svgHeight) / 2;

  svg.setAttribute("width", svgWidth);
  svg.setAttribute("height", svgHeight);

  svg.innerHTML = "";

  for (let i = 0; i < totalY; i++) {
    for (let j = 0; j < totalX; j++) {
      const posX = margin + size * j - gridXAdjustment;
      const posY = margin + size * i - gridYAdjustment;
      const rect = document.createElementNS(
        "http://www.w3.org/2000/svg",
        "rect"
      );
      rect.setAttribute("width", `${rectSize}px`);
      rect.setAttribute("height", `${rectSize}px`);
      rect.setAttribute("fill", "white");
      rect.setAttribute("x", posX);
      rect.setAttribute("y", posY);
      rect.setAttribute("class", `square-x-${i}-y-${j}`);
      svg.appendChild(rect);
    }
  }

  const jellyOptions = [];

  for (let i = 0; i < totalY; i++) {
    for (let j = 0; j < totalX; j++) {
      const options = {
        paths: `.square-x-${i}-y-${j}`, // Shape we want to draw
        pointsNumber: 20, // Number of points
        maxDistance: -3000, // Max distance among points
        color: "red",
        imageWidth: size,
        imageHeight: size,
        imageCentroid: true,
        intensity: 0.8,
        index: i,
        alpha: 1
      };
      jellyOptions.push(options);
    }
  }

  const container = document.querySelector(".jelly-container");
  let hoverIndex = -1;
  let current = -1;

  const jelly = new Jelly(canvas, jellyOptions);
  function checkHover() {
    // The `getHoverIndex` function will return the index of the shape being hovered, or -1
    hoverIndex = jelly.getHoverIndex();
    container.style.cursor = hoverIndex === -1 ? "default" : "pointer";
    window.requestAnimationFrame(checkHover);
  }
  window.requestAnimationFrame(checkHover);

  canvas.addEventListener("click", function () {
    current = hoverIndex;
    if (current >= 0) {
      jelly.hide({ i: hoverIndex, maxDelay: 0 });
    }
  });

  function initRandomize(n) {
    jelly.o.forEach((option, i) => {
      jelly.setTrack(i, playlist[i * n]);
    });
  }

  function generateRandom(maxLimit = playlist.length - 1) {
    let rand = Math.random() * maxLimit;
    rand = Math.floor(rand); // 99

    return rand;
  }

  const totalCovers = totalX * totalY;

  function randomize(timer) {
    if (timer < 6000) {
      jelly.setTrack(generateRandom(totalCovers), playlist[generateRandom()]);
      jelly.toggle(generateRandom(totalCovers), Math.round(Math.random()));
      jelly.setTrack(generateRandom(totalCovers), playlist[generateRandom()]);
      jelly.toggle(generateRandom(totalCovers), Math.round(Math.random()));
      jelly.setTrack(generateRandom(totalCovers), playlist[generateRandom()]);
      jelly.toggle(generateRandom(totalCovers), Math.round(Math.random()));
    }
    window.requestAnimationFrame(randomize);
  }
  window.requestAnimationFrame(randomize);

  initRandomize(1);
}
