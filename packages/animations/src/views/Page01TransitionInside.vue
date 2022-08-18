<template>

  

  <div data-barba="wrapper" >
    <div class="header">
    <!-- <a href="/page-01-transition" class="logo">Title Of Project</a> -->
    <router-link
          to="/page-01-transition"
          > Go back </router-link>

  </div>

    <div data-barba="container" data-barba-namespace="inside">
      <div asscroll-container>
        <div class="scroll-wrap">
          <!-- BEGIN content -->
          <div class="inside xxx">
            <!-- BEGIN item -->
            <div class="single">
              <div
                class="single__top"
                style="
                  background-image: url('/images/page-01-transition/texture.jpg');
                "
              ></div>
              <div class="single__content">
                <h1><a href="/index.html"> Some title</a></h1>
                <figure>
                  <img
                    src="/images/page-01-transition/4.jpg"
                    width="300"
                    alt=""
                  />
                  <figcaption>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Iste ipsum doloribus commodi atque pariatur!
                      Quia expedita debitis aperiam molestiae eum
                      recusandae, corrupti architecto aut quod sapiente
                      voluptas consequatur, explicabo mollitia.
                    </p>
                  </figcaption>
                </figure>

                <figure>
                  <img
                    src="/images/page-01-transition/4.jpg"
                    width="300"
                    alt=""
                  />
                  <figcaption>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing
                      elit. Iste ipsum doloribus commodi atque pariatur!
                      Quia expedita debitis aperiam molestiae eum
                      recusandae, corrupti architecto aut quod sapiente
                      voluptas consequatur, explicabo mollitia.
                    </p>
                  </figcaption>
                </figure>

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iste ipsum doloribus commodi atque pariatur! Quia
                  expedita debitis aperiam molestiae eum recusandae,
                  corrupti architecto aut quod sapiente voluptas
                  consequatur, explicabo mollitia.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Iste ipsum doloribus commodi atque pariatur! Quia
                  expedita debitis aperiam molestiae eum recusandae,
                  corrupti architecto aut quod sapiente voluptas
                  consequatur, explicabo mollitia.
                </p>

                <!-- BEGIN footer -->
                <footer class="footer">
                  <p>&copy; 2021</p>
                  <p>
                    This page was made for
                    <a
                      href="https://www.awwwards.com/academy/course/creating-a-simple-portfolio-website-with-webgl-and-barba-js"
                      >Creating a simple portfolio website with WebGL and
                      Barba.js</a
                    >
                    <br />Wish you a good day! =)
                  </p>
                </footer>
                <!-- END footer -->
              </div>
            </div>
            <!-- END item -->
          </div>
          <!-- END inside -->
        </div>
      </div>
      <!-- scroll divs -->
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
import gsap from "gsap"; 

export default {
  name: 'Page01TransitionInside',
  layout: EmptyLayout,
  setup() {
    const transitionOnEnter = (el) => {
      console.log(el)
      gsap.fromTo(el, {
        opacity:0
      }, {
        opacity: 1,
        duration: 3,
        onComplete: () => {
          console.log('red')
        }
      })
    }

    const onBeforeLeave = (el) => {
      gsap.fromTo(el, {
        opacity:0
      }, {
        opacity: 1,
        duration: 3,
        onComplete: () => {
          console.log('red')
        }
      })
    }

    onMounted(() => {
      document
        .getElementsByTagName('body')[0]
        .classList.add('page-01-transition');

      new Sketch({
        domElement: document.getElementById('container'),
        urlTexture: '/images/page-01-transition/texture.jpg',
      });
    });

    return { transitionOnEnter, onBeforeLeave };
  },
};
</script>

<style lang="scss" scoped>
@import '../../../styles/src/config/config.scss';

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
