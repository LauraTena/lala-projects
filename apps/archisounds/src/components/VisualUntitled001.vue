<template>
  <canvas id="visual" class="canvas__visual"></canvas>
  <div class="track" id="p5-parent"></div>
</template>

<script>
import { onMounted } from 'vue';
import p5 from 'p5';
import '../core/visuals/p5.sound';
import { shaderBase, shaderFrag1 } from '../core/shaders/index';
import drawVisualization from '../core/visuals/001';

export default {
  name: 'VisualUntitled001',
  setup() {
    let canvas = null;
    const drawCover = () => {
      canvas = new p5(
        drawVisualization({
          img: 'https://i.scdn.co/image/ab67616d0000b2737da6d6787071a97593cfbcee',
          audio:
            'https://p.scdn.co/mp3-preview/e3b8ace9fc96512877f2a0092e794e56ac7022d3?cid=87a48d5b00524fd080faadee1545dace',
          shaderBase,
          shaderFrag: shaderFrag1,
          size: {
            width: 0.9 * window.innerWidth,
            height: 0.9 * window.innerHeight,
          },
        }),
      );
    };

    onMounted(() => {
      drawCover();
    });
  },
};
</script>

<style lang="scss">
#visual {
  border: 1px solid red;
  width: 90vw;
  height: 90vh;
}
</style>
