import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import { createPinia } from 'pinia';
import vuep5 from './P5Plugin';

createApp(App).use(vuep5).use(router).use(createPinia()).mount('#app');
