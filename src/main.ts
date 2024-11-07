import { createApp } from "vue";
import FloatingVue from "floating-vue";
import "floating-vue/dist/style.css";
import "./style.css";
import App from "./App.vue";
import router from "./router";

createApp(App).use(router).use(FloatingVue).mount("#app");
