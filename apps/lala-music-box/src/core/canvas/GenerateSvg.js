export default function GenerateSvg(svg, options) {
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
}
