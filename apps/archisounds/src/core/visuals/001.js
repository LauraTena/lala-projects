/* eslint no-param-reassign: "error" */
import p5 from 'p5';

const drawVisualization = (params) => (p) => {
  let shader;
  let img;
  let fft;
  let audio;

  p.preload = () => {};

  p.setup = () => {
    audio = p.loadSound(params.audio);
    img = p.loadImage(params.img);

    p.pixelDensity(1);
    const canvas = p.createCanvas(params.size, params.size, p.WEBGL);
    canvas.elt.className = 'canvas__p5-cover';
    canvas.elt.id = 'canvasCover';
    canvas.parent('p5-parent');

    fft = new p5.FFT();
    shader = p.createShader(params.shaderBase, params.shaderFrag);
    p.shader(shader);
    shader.setUniform('u_resolution', [params.size, params.size]);
    shader.setUniform('u_texture', img);
    shader.setUniform('u_tResolution', [params.size, params.size]);
  };

  p.draw = () => {
    fft.analyze();

    const bass = fft.getEnergy('bass');
    const treble = fft.getEnergy('treble');
    const mid = fft.getEnergy('mid');

    const mapBass = p.map(bass, 0, 255, 5, 10.0);
    const mapTremble = p.map(treble, 0, 255, 0, 0.0);
    const mapMid = p.map(mid, 0, 255, 0.0, 0.1);

    shader.setUniform('u_time', p.frameCount / 20);
    shader.setUniform('u_bass', mapBass);
    shader.setUniform('u_tremble', mapTremble);
    shader.setUniform('u_mid', mapMid);
    p.rect(0, 0, p.width, p.height);
  };

  p.windowResized = () => {
    p.resizeCanvas(p.size, p.size);
    shader.setUniform('u_resolution', [p.size, p.size]);
  };

  p.toggleAudio = () => {
    if (audio.isPlaying()) {
      audio.pause();
    } else {
      audio.loop();
    }
  };
};

export default drawVisualization;
