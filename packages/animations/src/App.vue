
<template>
  <router-view v-slot="{ Component }">
    <transition :css="false" @before-enter="beforeEnter" @enter="enter" @before-leave="beforeLeave" @leave="leave">
      <component :is="Component" class="component-wrapper"></component>
    </transition>
  </router-view>
</template>

<script>
import { onMounted, watch } from 'vue';
import { useRoute } from 'vue-router';
import gsap from "gsap"; 

export default {
  name: 'Page01Transition',
  
 setup() {
    const beforeEnter = (el) => {
      console.log('before enter');
      const content = el.querySelector(".xxx")
      const header = el.querySelector(".header")
      gsap.set([content, header], {
        y: "-100vh",
        opacity: 0,
      })
    };

    const enter = (el, done) => {
      console.log('enter');
      const content = el.querySelector(".xxx")
      const header = el.querySelector(".header")
      gsap.to([content, header], {
        duration: 1,
        opacity: 1,
        y: 0,
        ease: 'power1.inOut',
        onComplete: done
      });
    };

    const beforeLeave = (el) => {
      console.log('before leave');
      const canvas = el.querySelector("#container")
      gsap.set(canvas, {
        opacity: 0,
      })
    };

    const leave = (el, done) => {
      console.log('leave');

      const content = el.querySelector(".xxx")
      const header = el.querySelector(".header")
      gsap.to([content, header], {
        duration: 1,
        opacity: 1,
        y: "100vh",
        ease: 'power1.inOut',
        onComplete: done
      });
    };

    const route = useRoute();

    watch(() => route.name, () => {
      console.log(`MyCoolComponent -  ${route.path}`);
      // Do something here...

    // Optionally you can set immediate: true config for the watcher to run on init
    //}, { immediate: true });
    });


    return { beforeEnter, enter, beforeLeave, leave, route };
  }
};
</script>


<style lang="scss">

</style>
