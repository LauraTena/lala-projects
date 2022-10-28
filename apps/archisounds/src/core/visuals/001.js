/* eslint no-param-reassign: "error" */
import p5 from 'p5';

const drawVisualization = (params) => (p) => {
  const size = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
  let audio;
  let amp;
  let tapped = false;
  /**
   * Preload
   */
  p.preload = () => {
    audio = p.loadSound(params.audio);
  };
  /**
   * Setup
   */
  p.setup = () => {
    p.createCanvas(size.x, size.y);
    canvas.parent('p5-parent')
    p.rectMode(p.CENTER);
    audio.setVolume(0.5);
    amp = new p5.Amplitude();
  };

  /**
   * Draw
   */
  p.draw = () => {
    p.background(0);
    p.translate(p.width / 2, p.height / 2);

    const volume = amp.getLevel();
    const mapW = p.map(volume, 0, 0.5, 0, window.innerWidth);
    p.rect(0, 0, mapW, mapW);
  };

  p.mousePressed = () => {
    tapped = !tapped;
    if (tapped) {
      audio.play();
    } else {
      audio.pause();
    }
  };
};

export default drawVisualization;
