import LinRequest from "./requests/request";
import { BASE_URL, TIME_OUT } from "./requests/config";
const myRequest = new LinRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            console.log("请求拦截成功");
            return config;
        },
        requestInterceptorCatch: (err) => {
            console.log("请求错误拦截成功");
            return err;
        },
        responseInterceptor: (config) => {
            console.log("响应拦截成功");
            return config;
        },
        responseInterceptorCatch: (err) => {
            console.log("响应错误拦截成功");
            return err;
        }
    }
});
// service统一出口
export default myRequest;
