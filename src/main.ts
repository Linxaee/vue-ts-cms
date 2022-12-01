import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "normalize.css";
import "./assets/css/index.less";

import App from "./App.vue";

// 全局注册
import { globalRegister } from "./global";

import router from "./router";
import store from "./store";
import { setupStore } from "./store";

const app = createApp(App);
setupStore();
app.use(router).use(store).use(globalRegister).use(ElementPlus);
app.mount("#app");
// 页面刷新初始化vuex数据
