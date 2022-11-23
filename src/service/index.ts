import LinRequest from "./requests/request";
import { BASE_URL, TIME_OUT } from "./requests/config";
const myRequest = new LinRequest({
    baseURL: BASE_URL,
    timeout: TIME_OUT
});
// service统一出口
export default myRequest;
