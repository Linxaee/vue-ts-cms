import { AxiosRequestConfig, AxiosResponse } from "axios";
// 自定义请求/响应拦截器接口
export interface LinInterceptor<T = AxiosResponse> {
    requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
    requestInterceptorCatch?: (error: any) => any;
    responseInterceptor?: (res: T) => T;
    responseInterceptorCatch?: (error: any) => any;
}
// 自定义config接口继承AxiosRequestConfig的基础上，扩展interceptors属性，其上有待实现的拦截器
export interface LinRequestConfig<T = AxiosResponse> extends AxiosRequestConfig {
    interceptors?: LinInterceptor<T>;
    showLoading?: boolean;
}

export interface IDataType<T = any> {
    code: number;
    data: T;
}
