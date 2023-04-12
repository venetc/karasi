import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
// @ts-ignore
import { worker } from '../mock/browser';

// if (process.env.NODE_ENV === 'development') {
  worker.start({
    onUnhandledRequest: 'bypass',
  });
// }

createApp(App).use(VueQueryPlugin).mount('#app');
