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

  let tapped = false;
  let positions = [];

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

    for (let i = 0; i < 100; i++) {
      const rx = p5.random(size.x / -2, size.x / 2);
      const ry = p5.random(size.y / -2, size.y / 2);
      positions.push({
        x: rx,
        y: ry,
      });
    }
  };

  /**
   * Draw
   */
  p5.draw = () => {
    p5.background(0);
    p5.translate(p5.width / 2, p5.height / 2);

    const volume = amp.getLevel();
    const mapW = p5.map(volume, 0, 0.5, 0, window.innerWidth);
    const strokeW = p5.map(volume, 0, 0.5, 0, 50);
    for (let i = 0; i < 100; i++) {
      const rvx = p5.random(0.3, 0.8) * mapW * 0.5;
      const rvy = p5.random(0.3, 0.5) * mapW * 2;
      // p5.stroke('red');
      p5.strokeWeight(strokeW);
      p5.rect(positions[i].x, positions[i].y / 2, rvx, rvy);
      // p5.rect(positions[i].x, size.y * 0.4 - rvy / 2, rvx, rvy);
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
