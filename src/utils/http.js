// 统一封装请求
// 拦截器使用

import axios from "axios";
const http = axios.create({
    baseUrl:'http://localhost:5000/api/v1',
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











export default http