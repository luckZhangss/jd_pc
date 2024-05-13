<template>
  <div>
    <div ref="chart" style="width: 600px; height: 400px"></div>
    <button @click="parents">点击</button>
    <!-- 插槽 -->
      <slot name="child">子组件插槽</slot>
      <!-- 插槽中 子传父 -->
      <slot :data="{text:'999'}"></slot>
  </div>
</template>

<script setup>
import * as echarts from "echarts";
import { inject, onMounted, ref } from "vue";


// 祖先 接收数据值
// const injectMessage = inject('chartMessage')
// console.log('111',injectMessage);


// 子传父
const emit = defineEmits(['goParents'])

const parents = ()=>{
    const value = '你好父元素'
    emit('goParents',value)
}

const chart = ref(null);

// 父传子   子组件接收参数
const props = defineProps({
  title: {
    type: String,
    default: () => "echarts 新人示例",
  },
  xdata: {
    type: Array,
    default:["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
  },
  ydata: {
    type: Array,
    // default:["50", "40", "66", "999", "100", "773"]
    default:[5, 20, 36, 10, 10, 20]
  },
  seriesType:{
    type:String,
    default:'bar'
  }
//   computed: {
//     xdata() {
//       return props.data.map((item) => item.name);
//     },
//     ydata() {
//       return props.data.map((item) => item.num);
//     },
//   },
});

// 挂载完成调用 
onMounted(() => {
  chartMethod();
});

const chartMethod = () => {
  var myChart = echarts.init(chart.value);

  // 指定图表的配置项和数据
  var option = {
    title: {
      text: props.title,
    },
    tooltip: {},
    legend: {
      data: ["销量"],
    },
    xAxis: {
      data:props.xdata ,
    },
    yAxis: {},
    // xAxis: {
    //   data: props.xdata,
    // },
    // yAxis: {
    //   data: props.ydata,
    // },
    series: [
      {
        name: "销量",
        type: props.seriesType,
        data: props.ydata,
      },
    ],
  };

  // 使用刚指定的配置项和数据显示图表。
  myChart.setOption(option);
};
</script>

<style lang="scss" scoped></style>
