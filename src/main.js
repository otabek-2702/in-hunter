import './assets/main.css';

import { createApp } from 'vue/dist/vue.esm-bundler';
import App from './App.vue';
import router from './router';
import addClassesToHtml from './utilities/addClassesToHtml';

import i18n from './i18n';
import 'https://code.jquery.com/jquery-3.5.1.min.js'
import '@/webflow';

const app = createApp(App)
    .use(router)
    .use(i18n)
    .mount('#app');

addClassesToHtml();
