import LinRequest from "./requests/request";
import { BASE_URL, TIME_OUT } from "./requests/config";
import LocalCache from "@/utils/cache";
const myRequest = new LinRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT,
    interceptors: {
        requestInterceptor: (config) => {
            // token携带
            const token = LocalCache.getCache("token");
            if (token) {
                config.headers!.Authorization = `Bearer ${token}`;
            }
            return config;
        },
        requestInterceptorCatch: (err) => {
            return err;
        },
        responseInterceptor: (res) => {
            return res;
        },
        responseInterceptorCatch: (err) => {
            return err;
        }
    }
});
// service统一出口
export default myRequest;
