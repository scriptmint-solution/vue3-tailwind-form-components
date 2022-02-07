import { createApp } from 'vue/dist/vue.esm-bundler'
import App from './App.vue'
import './app.css'

const app = createApp(App);

import components from '@components/index.js'
components(app)

app.mount('#app')
