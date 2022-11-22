import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";

import "./service/axios_demo";

import { globalRegister } from "./global";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router).use(ElementPlus).use(store).use(globalRegister);

app.mount("#app");

console.log(process.env.VUE_APP_BASE_NAME);
