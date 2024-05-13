// 统一封装请求
// 拦截器使用
import * as url from '../config/url'
import axios from "axios";
const http2 = axios.create({
    baseURL:url.BASE_URL2,
    timeout: 5000
})
// 请求拦截器
http2.interceptors.request.use((cfg)=>{
    return cfg
})
// 响应拦截器
http2.interceptors.response.use((res)=>{
    return res
})
const request2 = (oldConfig = {}) => {
    const config = {
      method: "get",
      params: {},
      ...oldConfig,
    };
    return new Promise((resolve, reject) => {
      http2[config.method](config.url, config.params).then((res) => {
        resolve(res);
      }).catch((err) => {
        reject(err);
      });
    });
  };
export default request2