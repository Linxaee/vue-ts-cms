import LinRequest from "./requests/request";
import { BASE_URL, TIME_OUT } from "./requests/config";
const myRequest = new LinRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            // token携带
            const token = "";
            if (token) {
                config.headers!.Authorization = `Bearer ${token}`;
            }
            console.log("单个实例的请求拦截器：请求成功");
            return config;
        },
        requestInterceptorCatch: (err) => {
            console.log("单个实例的请求拦截器：请求失败");
            return err;
        },
        responseInterceptor: (res) => {
            console.log("单个实例的响应拦截器：响应成功");
            return res;
        },
        responseInterceptorCatch: (err) => {
            console.log("单个实例的响应拦截器：响应失败");
            return err;
        }
    }
});
// service统一出口
export default myRequest;
