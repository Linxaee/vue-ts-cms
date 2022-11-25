import { createApp } from "vue";

import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import { ElLoading } from "element-plus";

import App from "./App.vue";

import myRequest from "./service/index";

// 全局注册
import { globalRegister } from "./global";

import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router).use(ElementPlus).use(store).use(globalRegister);

app.mount("#app");

myRequest.request({
    url: "maimaidxprober/music_data",
    method: "GET",
    interceptors: {
        requestInterceptor: (config) => {
            console.log("单独的请求拦截器");
            return config;
        },
        responseInterceptor: (res) => {
            console.log("单独的响应拦截器");
            return res;
        }
    }
});
// myRequest.get("maimaidxprober/music_data");
