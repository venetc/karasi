import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import msw from '@iodigital/vite-plugin-msw';
import { handlers } from './mock/handlers';

export default defineConfig({
  plugins: [vue(), msw({ handlers })],
  base: '/karasi/',
  build: {
    emptyOutDir: true,
/*    outDir: './docs', // this line place index.html in the public folder
    assetsDir: './', // this line place your assets in the public/dist folder*/
  },
});
