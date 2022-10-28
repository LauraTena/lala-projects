<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import p52 from 'p5';
import 'p5/lib/addons/p5.sound';

const sketch = (p5: p5) => {
  const size = {
    x: window.innerWidth,
    y: window.innerHeight,
  };
  let audio: any;
  let amp: any;
  let fft: any;
  const bins = 1024;
  let binWidth;
  let tapped = false;

  /**
   * Preload
   */
  p5.preload = () => {
    audio = p5.loadSound('/audios/spaceIsOnlyNoise.mp3');
  };
  /**
   * Setup
   */
  p5.setup = () => {
    p5.createCanvas(size.x, size.y);
    amp = new p52.Amplitude();
    fft = new p52.FFT(0, bins);

    binWidth = p5.width / bins;
  };

  /**
   * Draw
   */
  p5.draw = () => {
    p5.background(0);
    p5.noStroke();

    const spectrum = fft.analyze();

    for (let i = 0; i < spectrum.length; i++) {
      const y = p5.map(spectrum[i], 0, 255, p5.height, 0);
      p5.rect(i * binWidth, y, binWidth, p5.height - y);
    }
  };

  p5.mousePressed = () => {
    tapped = !tapped;
    if (tapped) {
      audio.play();
    } else {
      audio.pause();
    }
  };
};
</script>

<template>
  <P5 :sketch="sketch" />
</template>
