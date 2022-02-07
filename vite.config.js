import { defineConfig } from 'vite'
const path = require('path')
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/vue3-tailwind-form-components/',
  resolve:{
    alias:{
      '@' : path.resolve(__dirname, './src'),
      '@components' : path.resolve(__dirname, './src/components'),
    },
  },
  plugins: [
    vue(),
    viteCompression({
      filter: /\.(js|mjs|css)$/i
    })
  ]
})
