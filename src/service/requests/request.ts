import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
interface LinRequestInterceptor {
    requestInterceptor: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch: (error: any) => any;
    responseInterceptor: (config: AxiosResponse) => AxiosResponse;
    responseInterceptorCatch: (error: any) => any;
}
// 自定义config接口继承AxiosRequestConfig的基础上，扩展interceptors属性，其上有待实现的拦截器
interface LinRequestConfig extends AxiosRequestConfig {
    interceptors: LinRequestInterceptor;
}
class LinRequest {
    // 多个request对象时创建多个实例并保留
    instance: AxiosInstance;
    // 可传入自定义拦截器
    interceptors: LinRequestInterceptor;

    constructor(config: LinRequestConfig) {
        // 保留实例
        this.instance = axios.create(config);
        // 保留拦截器
        this.interceptors = config.interceptors;
        // 请求拦截器
        this.instance.interceptors.request.use(
            this.interceptors.requestInterceptor,
            this.interceptors.requestInterceptorCatch
        );
        // 响应拦截器
        this.instance.interceptors.response.use(
            this.interceptors.responseInterceptor,
            this.interceptors.responseInterceptorCatch
        );
    }
    request(config: LinRequestConfig) {
        this.instance.request(config).then((res) => {
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
