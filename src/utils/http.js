// 统一封装请求
// 拦截器使用
import * as url from '../config/url'
import axios from "axios";
// alert(url.BASE_URL)
const http = axios.create({
  baseURL:url.BASE_URL,
  timeout: 5000
})

// 请求拦截器
http.interceptors.request.use((cfg)=>{
    return cfg
})
// 响应拦截器
http.interceptors.response.use((res)=>{
    return res
})
const request = (oldConfig = {}) => {
  const config = {
    method: "get",
    params: {},
    ...oldConfig,
  };
  return new Promise((resolve, reject) => {
    http[config.method](config.url, config.params).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    });
  });
};
export default request
