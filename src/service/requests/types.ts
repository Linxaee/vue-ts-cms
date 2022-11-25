import { AxiosRequestConfig, AxiosResponse } from "axios";
// 自定义请求/响应拦截器接口
export interface LinRequestInterceptor {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (res: any) => any;
    responseInterceptorCatch?: (error: any) => any;
}
// 自定义config接口继承AxiosRequestConfig的基础上，扩展interceptors属性，其上有待实现的拦截器
export interface LinRequestConfig extends AxiosRequestConfig {
    interceptors?: LinRequestInterceptor;
    showLoading?: boolean;
}
export interface DataType {
    data: any;
    success: boolean;
}
