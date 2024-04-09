// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import http from './utils/http'


import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import App from './App.vue'
import router from './router'



const app = createApp(App)
// 全局绑定http请求
app.config.globalProperties.$http = http

app.use(createPinia())
app.use(router)


// app.mount('#app')
app.use(Antd).mount('#app');
