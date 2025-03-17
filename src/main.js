import "./assets/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import 'vue3-toastify/dist/index.css';

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import addClassesToHtml from "./utilities/addClassesToHtml";

import i18n from "./i18n";
import "https://code.jquery.com/jquery-3.5.1.min.js";
import "@/webflow";
import Vue3Toastify from "vue3-toastify";

const app = createApp(App)
  .use(router)
  .use(i18n)
  .use(Vue3Toastify, {
    autoClose: 3000,
    position: "top-right",
  })
  .mount("#app");

addClassesToHtml();
