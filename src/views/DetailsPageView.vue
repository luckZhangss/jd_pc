<template>
  <div>
    <!-- 面包屑 -->
    <div class="head">
      <div>
        <a-breadcrumb separator=">">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application Center</a-breadcrumb-item>
          <a-breadcrumb-item href="">Application List</a-breadcrumb-item>
          <a-breadcrumb-item>An Application</a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div>
        <span>五星店铺</span>
        <span>五星店铺</span>
        <span>五星店铺</span>
      </div>
    </div>
    <!-- 中 -->
    <div class="midd">
        <!-- zuo -->
        <div>
            <img src="https://img10.360buyimg.com/n1/jfs/t1/191085/38/27662/403531/62f07bccEe2bdde24/a2c274f3884f08fa.jpg.avif" alt="">
        </div>
        <!-- you -->
        <div>
            <p>TAIC太可钛度钛杯纯钛保温杯 钛水杯男女情侣双层真空 商务高档礼品杯 瀚海蓝 420ml升级款（带滤网）</p>
            <div>
                <div>
                     <p>京东价 ￥降价通知</p>
                <span>累计评价</span>
                </div>
                <p>促销</p>
            </div>
             <!-- 增值业务 -->
        <p>增值业务</p>
        <p>配送至</p>
        <p>选择颜色</p>
        <p>选择规格</p>
        <div style="display: flex;">
             <!-- <button onclick="value--">-</button><input type="text" value="1" style="width: 40px;text-align: center;"><button onclick="value--">+</button> -->
             <a-input-number id="inputNumber" v-model:value="value" :min="1" :max="999"/>
        <button style="margin-left: 5px;background-color: red;">加入购物车</button>
        </div>
       
        </div>
        
    </div>
   
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const value = ref<number>(1);
</script>

<style scoped>
.head{
    display: flex;
    justify-content: space-around;
    background-color: #f5f5f5;
    margin-top: 10px;
}
.midd{
    display: flex;
    flex-wrap: nowrap;
    justify-self: start;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
}
.midd>:nth-child(2)>div>div{
    background-color: #f5f5f5;
}
.midd>:nth-child(2)>div>div{
        display: flex;
        justify-content: space-between;
}
.head>:nth-child(2)>span{
    margin-left: 20px;
}
</style>
