// import './assets/main.css'
import { createApp } from "vue";
import { createPinia } from "pinia";
import http from "./utils/http";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/reset.css";
import App from "./App.vue";
import router from "./router";

// 导入组件
import myComponent from "./components/componentA.vue";
const app = createApp(App);
// 全局绑定http请求
app.config.globalProperties.$http = http;
app.use(createPinia());
app.use(router);
// 全局注册组件
app.component("myComponent", myComponent);
// 全局注册指令
app.directive("colorFontsize", (el, binding) => {
  el.style.color = "red";
  el.style.color = binding.value.color;
  el.style.fontSize = binding.value.fontSize;
});
// app.mount('#app')
app.use(Antd).mount("#app");
