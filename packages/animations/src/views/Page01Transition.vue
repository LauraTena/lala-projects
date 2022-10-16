<template>


  <div data-barba="container" data-barba-namespace="home">
    <div class="header">
      <!-- <a href="/page-01-transition-inside" class="logo">Title Of Project</a> -->
      <router-link
            to="/page-01-transition-inside"
            > Go inside </router-link>
    </div>
    <div data-barba="wrapper">
      <div data-barba="container" data-barba-namespace="home">
        <div asscroll-container>
          <div class="scroll-wrap">
            <!-- BEGIN content -->
            <div class="content xxx">
              <!-- BEGIN item -->
              <a href="inside.html" class="item">
                <img
                  src="/images/page-01-transition/texture.jpg"
                  class="js-image"
                  alt=""
                />
                <h2>Some title</h2>
                <p>And some very interesting description.</p>
              </a>
              <!-- END item -->
              <!-- BEGIN item -->
              <a href="inside.html" class="item">
                <img
                  src="/images/page-01-transition/texture.jpg"
                  class="js-image"
                  alt=""
                />
                <h2>Some title</h2>
                <p>And some very interesting description.</p>
              </a>
              <!-- END item -->
              <!-- BEGIN item -->
              <a href="inside.html" class="item">
                <img
                  src="/images/page-01-transition/texture.jpg"
                  class="js-image"
                  alt=""
                />
                <h2>Some title</h2>
                <p>And some very interesting description.</p>
              </a>
              <!-- END item -->
              <!-- BEGIN item -->
              <a href="inside.html" class="item">
                <img
                  src="/images/page-01-transition/texture.jpg"
                  class="js-image"
                  alt=""
                />
                <h2>Some title</h2>
                <p>And some very interesting description.</p>
              </a>
              <!-- END item -->
              <!-- BEGIN item -->
              <a href="inside.html" class="item">
                <img
                  src="/images/page-01-transition/texture.jpg"
                  class="js-image"
                  alt=""
                />
                <h2>Some title</h2>
                <p>And some very interesting description.</p>
              </a>
              <!-- END item -->
            </div>
            <!-- END content -->
          </div>
        </div>
      </div>
    </div>

    <div class="curtain"></div>
    <div id="container"></div>
  </div>

  <!-- end barba -->
</template>

<script>
import { onMounted } from 'vue';
import EmptyLayout from '../layouts/Empty.vue';
import Sketch from '../core/pages/01/Sketch';

export default {
  name: 'Page01Transition',
  layout: EmptyLayout,

  
  setup() {

    onMounted(() => {
      document
        .getElementsByTagName('body')[0]
        .classList.add('page-01-transition');

      setTimeout(() => {
        new Sketch({
          domElement: document.getElementById('container'),
          urlTexture: '/images/page-01-transition/texture.jpg',
        });

      }, 2000)
    });

  },
};
</script>

<style lang="scss" scoped>
@import '@lau.ra/styles/src/config/config.scss';

* {
  margin: 0;
  padding: 0;
}

.header {
  font-weight: 900;
  color: #eee;
  position: fixed;
  left: 50px;
  top: 50px;
  font-size: 30px;
  z-index: 10;
  text-shadow: 0 2px 2px #000;
}
.header a {
  text-decoration: none;
  color: #eee;
}
main {
  // background: #000;
  font-family: 'Coustard', serif;
  font-weight: 400;
  color: #fff;
  overflow-x: auto;
  margin: 0;
  padding: 0;
  height: calc(90vh + 17px);
}

canvas {
  display: block;
  z-index: 1000;
}
#container {
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
}
.content {
  display: inline-flex;
  flex-wrap: nowrap;
  flex-direction: row;
  gap: 100px;
  padding: 200px;
  /* width: auto; */
}

/* item */
.item {
  font-family: 'Coustard', serif;
  text-decoration: none;
  color: #eee;
}
.item a {
  text-decoration: none;
  color: #eee;
}
.item h2 {
  font-weight: 900;
  color: #fff;
  font-size: 48px;
}
.item p {
  font-weight: 400;
  color: #ccc;
}
.item:last-child {
  margin-right: 300px;
}
.item img {
  width: 30vw;
  height: 30vw;
}
/* single */
.single {
}
.single h1 {
  margin-bottom: 1em;
  font-size: 3em;
}
figure {
  margin: 0 0 3em 0;
  display: flex;
  gap: 50px;
}
figure + figure {
  flex-direction: row-reverse;
}
figure img {
  float: left;
  margin-right: 30px;
}
.single__content {
  max-width: 1000px;
  margin: 50px auto;
}
.single__content p {
  margin: 2em 0;
  line-height: 1.7;
  font-size: 1.1em;
}
.single__content a {
  color: #fff;
}
.single__top {
  height: 100vh;
  width: 100%;
  background-size: cover;
  background-position: 50% 50%;
}

.footer {
  border-top: 1px solid #ccc;
  padding-top: 10px;

  margin-top: 100px;
  padding-bottom: 150px;
  display: flex;
  font-size: 0.8em;
}
.footer p + p {
  margin-left: auto;
  text-align-last: left;
}

.curtain {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  background: #949494;
  transform: translate(0, 100%);
}

[data-barba-namespace] {
  position: absolute;
  top: 0;
}

canvas {
  /* display: none !important; */
}
</style>
