import { createApp } from "vue";

// import ElementPlus from "element-plus";
import "element-plus/dist/index.css";

import App from "./App.vue";

import myRequest from "./service/index";

// 全局注册
import { globalRegister } from "./global";

import router from "./router";
import store from "./store";
import { AxiosRequestConfig, AxiosResponse } from "axios";

const app = createApp(App);

app.use(router).use(store).use(globalRegister);
app.mount("#app");
interface DataType {
    data: any;
    success: boolean;
}
const data = myRequest.get<DataType>({
    url: "maimaidxprober/music_data",
    interceptors: {
        requestInterceptor: (config: AxiosRequestConfig) => {
            return config;
        },
        responseInterceptor: (res: AxiosResponse) => {
            return res;
        }
    }
});

data.then((res) => {
    console.log("data:res", res);
});
// myRequest.get("maimaidxprober/music_data");
