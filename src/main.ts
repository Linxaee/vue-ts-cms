import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";

import myRequest from "./service/index";

import { globalRegister } from "./global";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router).use(ElementPlus).use(store).use(globalRegister);

app.mount("#app");

// myRequest.request({
//     url: "maimaidxprober/music_data",
//     method: "GET"
// });
myRequest.get("maimaidxprober/music_data");
