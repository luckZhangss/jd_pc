<template>
  <div>
    <p v-colorFontsize="{ color: 'pink', fontSize: '50px' }">测试文字</p>
    <componentA :title="'七天数据销量'" @goParents="handleClick" v-color>
      <template #child>
        <p>111223</p>
      </template>
      <!-- 插槽子传父 接收的子传过来的data -->
      <template #default="{data}">
        <div>{{ data.text }}</div>
      </template>
    </componentA>
    <componentA :seriesType="'line'" :ydata="ydata" :xdata="xdata" />

   
      <myComponent name="a"/>
 
  </div>
</template>

<!-- 使用子插槽 -->

<script setup>
// 自定义指令
const vColor = {
  mounted: (el) => (el.style.backgroundColor = "orange"),
};

// 祖先传递数据
const value = "祖先传的柱形图";
provide("chartMessage", value); // chartMessage 代表数据名称，value 代表传递值

// const color = ref('green')
const handleClick = (value) => {
  console.log(value);
};
// 局部注册组件a
import componentA from "@/components/componentA.vue";

import { provide, reactive } from "vue";

const ydata = reactive(["50", "40", "66", "999", "100", "773"]);

const xdata = reactive([
  "周一",
  "周二",
  "周三",
  "周四",
  "周五",
  "周六",
  "周日",
]);
</script>

<style lang="scss" scoped></style>
