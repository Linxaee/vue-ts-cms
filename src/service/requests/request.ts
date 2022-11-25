import axios from "axios";
import type { AxiosInstance } from "axios";
import type { LinRequestInterceptor, LinRequestConfig } from "@/service/requests/types";
import { ElLoading } from "element-plus";
import { LoadingInstance } from "element-plus/es/components/loading/src/loading";
class LinRequest {
    // 多个request对象时创建多个实例并保留
    instance: AxiosInstance;
    // 可选传入自定义拦截器
    interceptors?: LinRequestInterceptor;
    showLoading: boolean;
    loading?: LoadingInstance;

    constructor(config: LinRequestConfig) {
        // 保留实例
        this.instance = axios.create(config);
        // 保留拦截器
        this.interceptors = config.interceptors;
        // 是否显示loading
        this.showLoading = config?.showLoading ?? true;
        // 实例请求拦截器 ?可链式选
        this.instance.interceptors.request.use(
            this.interceptors?.requestInterceptor,
            this.interceptors?.requestInterceptorCatch
        );
        // 实例响应拦截器
        this.instance?.interceptors.response.use(
            this.interceptors?.responseInterceptor,
            this.interceptors?.responseInterceptorCatch
        );

        // 所有实例的请求拦截器
        this.instance.interceptors.request.use(
            (config) => {
                console.log("所有实例的请求拦截器:请求成功");
                console.log(" this.showLoading", this.showLoading);
                if (this.showLoading) {
                    this.loading = ElLoading.service({
                        lock: true,
                        text: "加载ing.....",
                        background: "rgb(0,0,0,.2)"
                    });
                }

                return config;
            },
            (err) => {
                console.log("所有实例的请求拦截器:请求失败");
                return err;
            }
        );
        // 所有实例的响应拦截器
        this.instance?.interceptors.response.use(
            (res) => {
                console.log("所有实例的响应拦截器:响应成功");
                // 关闭加载遮罩
                if (this.showLoading) this.loading?.close();

                const data = res.data;
                if (data.returnCode === "-1001") {
                    console.log("请求失败");
                }

                return res.data;
            },
            (err) => {
                console.log("所有实例的响应拦截器:响应失败");

                // 关闭加载遮罩
                this.loading?.close();

                if (err.response.status === 404) {
                    console.log("404咯");
                }
                return err;
            }
        );
    }

    request(config: LinRequestConfig) {
        if (config.interceptors?.requestInterceptor) {
            // 局部请求拦截
            config = config.interceptors.requestInterceptor(config);
        }

        // 单独配置关闭loading
        if (config.showLoading === false) this.showLoading = config.showLoading;

        this.instance.request(config).then(
            (res) => {
                if (config.interceptors?.responseInterceptor) {
                    // 局部响应拦截
                    res = config.interceptors.responseInterceptor(res);
                }
                // 恢复初始化
                this.showLoading = !this.showLoading;
                console.log(res);
            },
            (err) => {
                // 恢复初始化
                this.showLoading = !this.showLoading;
                return err;
            }
        );
    }
    get(url: string, config?: LinRequestConfig) {
        this.instance.get(url, config).then((res) => {
            console.log(res);
        });
    }
}
export default LinRequest;
