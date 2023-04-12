import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import { VueQueryPlugin } from '@tanstack/vue-query';
// @ts-ignore
import { worker } from '../mock/browser';



/*if (process.env.NODE_ENV === 'development') {
  if (window.location.pathname === '/login') {
    window.location.pathname = '/login/'
    return
  }
  const { worker } = require('./mocks/browser')
  await worker.start({
    serviceWorker: {
      url: '/login/mockServiceWorker.js',
    },
  })
}*/

// if (process.env.NODE_ENV === 'development') {
  worker.start({
    serviceWorker: {
      url: '/karasi/mockServiceWorker.js',
    },
    onUnhandledRequest: 'bypass',
  });
// }

createApp(App).use(VueQueryPlugin).mount('#app');
