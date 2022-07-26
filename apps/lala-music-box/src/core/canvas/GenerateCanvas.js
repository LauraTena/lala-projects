import Jelly from "./jelly/jelly";

export default function GenerateCanvas(svg, canvas, options) {
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

  for (var i = 0; i < totalY; i++) {
    for (var j = 0; j < totalX; j++) {
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

  for (var i = 0; i < totalY; i++) {
    for (var j = 0; j < totalX; j++) {
      var optionsTest0 = {
        paths: `.square-x-${i}-y-${j}`, // Shape we want to draw
        pointsNumber: 20, // Number of points
        maxDistance: -3000, // Max distance among points
        color: "red",
        image:
          j < 3
            ? ""
            : "https://cdn.dribbble.com/users/1433291/screenshots/15541759/media/0ca7c78ccbeb259addbda44879e8bf51.jpg?compress=1&resize=400x300&vertical=top",
        imageWidth: size,
        imageHeight: size,
        imageCentroid: true,
        intensity: 0.8,
        index: i,
        alpha: 1
      };
      jellyOptions.push(optionsTest0);
    }
  }

  const jelly = new Jelly(canvas, jellyOptions);
}
