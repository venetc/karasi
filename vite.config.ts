import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import msw from '@iodigital/vite-plugin-msw';
import { handlers } from './mock/handlers';

export default defineConfig({
  plugins: [vue(), msw({ handlers })],
  base: '/karasi/',
});
