import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
class LinRequest {
    // 多个request对象时创建多个实例
    instance: AxiosInstance;

    constructor(config: AxiosRequestConfig) {
        this.instance = axios.create(config);
    }
    request(config: AxiosRequestConfig) {
        this.instance.request(config).then((res) => {
            console.log(res);
        });
    }
    get(url: string, config?: AxiosRequestConfig) {
        this.instance.get(url, config).then((res) => {
            console.log(res);
        });
    }
}
export default LinRequest;
