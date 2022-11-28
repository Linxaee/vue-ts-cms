import axios from "axios";
import type { AxiosInstance } from "axios";
import type { LinInterceptor, LinRequestConfig } from "@/service/requests/types";
import { ElLoading } from "element-plus";
import { LoadingInstance } from "element-plus/es/components/loading/src/loading";

const DEFAULT_LOADING = true;
class LinRequest {
    // 多个request对象时创建多个实例并保留
    instance: AxiosInstance;
    // 可选传入自定义拦截器
    interceptors?: LinInterceptor;
    showLoading: boolean;
    loading?: LoadingInstance;

    constructor(config: LinRequestConfig) {
        // 保留实例
        this.instance = axios.create(config);
        // 保留拦截器
        this.interceptors = config.interceptors;
        // 是否显示loading
        this.showLoading = config?.showLoading ?? DEFAULT_LOADING;
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
                return err;
            }
        );
        // 所有实例的响应拦截器
        this.instance?.interceptors.response.use(
            (res) => {
                // 关闭加载遮罩
                if (this.showLoading) this.loading?.close();

                const data = res.data;
                if (data.returnCode === "-1001") {
                    console.log("请求失败");
                }

                return res.data;
            },
            (err) => {
                // 关闭加载遮罩
                this.loading?.close();

                if (err.response.status === 404) {
                    console.log("404咯");
                }
                return err;
            }
        );
    }
    request<T>(config: LinRequestConfig<T>): Promise<T> {
        return new Promise<T>((resolve, reject) => {
            if (config.interceptors?.requestInterceptor) {
                // 局部请求拦截
                config = config.interceptors.requestInterceptor(config);
            }

            // 单独配置关闭loading
            if (config.showLoading === false) this.showLoading = config.showLoading;

            this.instance.request<any, T>(config).then(
                (res) => {
                    if (config.interceptors?.responseInterceptor) {
                        // T(DataType)的传递
                        // get<DataType> -> request<DataType> -> LinRequestConfig<DataType>
                        // -> LinInterceptor<DataType> -> responseInterceptor?: (res: DataType) => DataType;
                        // 局部响应拦截
                        res = config.interceptors.responseInterceptor(res);
                    }
                    // 恢复初始化不影响下一个请求
                    this.showLoading = DEFAULT_LOADING;
                    // 返回结果
                    resolve(res);
                },
                (err) => {
                    // 恢复初始化不影响下一个请求
                    this.showLoading = DEFAULT_LOADING;
                    reject(err);
                }
            );
        });
    }
    get<T>(url: string, config?: LinRequestConfig<T>) {
        return this.request<T>({ ...config, method: "GET", url });
    }
    post<T>(url: string, config?: LinRequestConfig<T>) {
        return this.request<T>({ ...config, method: "POST", url });
    }
    delete<T>(url: string, config?: LinRequestConfig<T>) {
        return this.request<T>({ ...config, method: "DELETE", url });
    }
    patch<T>(url: string, config?: LinRequestConfig<T>) {
        return this.request<T>({ ...config, method: "PATCH", url });
    }
}
export default LinRequest;
