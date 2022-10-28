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
    p5.rectMode(p5.CENTER);
    audio.setVolume(0.5);
    amp = new p52.Amplitude();
    fft = new p52.FFT();
  };

  /**
   * Draw
   */
  p5.draw = () => {
    p5.background(0);
    p5.stroke(255);
    // p5.translate(0, p5.height / 2);

    const volume = amp.getLevel();
    const waveform = fft.waveform();

    // const mapW = p5.map(volume, 0, 0.5, 0, window.innerWidth);
    // const strokeW = p5.map(volume, 0, 0.5, 0, 50);

    for (let i = 0; i < waveform.length; i++) {
      const x = p5.map(i, 0, waveform.length, 0, p5.width);
      const y = p5.map(waveform[i], -1, 1, 0, p5.height);
      p5.point(x, y);
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
