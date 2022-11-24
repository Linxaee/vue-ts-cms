import axios from "axios";
import type { AxiosInstance } from "axios";
import type { LinRequestInterceptor, LinRequestConfig } from "@/service/requests/types";
class LinRequest {
    // 多个request对象时创建多个实例并保留
    instance: AxiosInstance;
    // 可选传入自定义拦截器
    interceptors?: LinRequestInterceptor;

    constructor(config: LinRequestConfig) {
        // 保留实例
        this.instance = axios.create(config);
        // 保留拦截器
        this.interceptors = config.interceptors;
        // 请求拦截器 ?可链式选
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        // 响应拦截器
        this.instance?.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        );

        // 全局请求拦截器
        this.instance.interceptors.request.use((config) => {
            console.log("全局请求拦截器");
            return config;
        });
        // 全局响应拦截器
        this.instance?.interceptors.response.use((res) => {
            console.log("全局响应拦截器");
            return res;
        });
    }

    request(config: LinRequestConfig) {
        if (config.interceptors?.requestInterceptor) {
            config = config.interceptors.requestInterceptor(config);
        }
        this.instance.request(config).then((res) => {
            if (config.interceptors?.responseInterceptor) {
                res = config.interceptors.responseInterceptor(res);
            }
            console.log(res);
        });
    }
    get(url: string, config?: LinRequestConfig) {
        this.instance.get(url, config).then((res) => {
            console.log(res);
        });
    }
}
export default LinRequest;
