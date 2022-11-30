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

app.use(router).use(store).use(globalRegister).use(ElementPlus);
app.mount("#app");
// 页面刷新初始化vuex数据
setupStore();
// const data = myRequest.get<DataType>({
//     url: "maimaidxprober/music_data",
//     interceptors: {
//         requestInterceptor: (config: AxiosRequestConfig) => {
//             return config;
//         },
//         responseInterceptor: (res: DataType) => {
//             return res;
//         }
//     }
// });

// data.then((res) => {
//     console.log("data:res", res);
// });
// myRequest.get("maimaidxprober/music_data");
