import axios from "axios";
console.log(process.env.NODE_ENV);
// axios 实例

/**
 * @param {function} fn1 请求发送成功的回调
 * @param {function} fn2 请求发送失败的回调
 */
axios.interceptors.request.use(
    (config) => {
        // 设置token
        // loading动画
        console.log("请求拦截成功");
        return config;
    },
    () => {}
);
/**
 * @param {function} fn1 响应成功的回调
 * @param {function} fn2 响应失败的回调
 */
axios.interceptors.response.use(
    (response) => {
        console.log("响应拦截成功");
        return response;
    },
    () => {}
);

// axios.get("https://www.diving-fish.com/api/maimaidxprober/music_data").then((res) => {
//     console.log(res.data);
// });
