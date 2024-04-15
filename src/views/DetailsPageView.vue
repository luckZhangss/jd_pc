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
        <!-- <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" > -->

        <img :src="shops.picUrl" alt="" />
      </div>
      <!-- you -->
      <div>
        <!-- <p>TAIC太可钛度钛杯纯钛保温杯 钛水杯男女情侣双层真空 商务高档礼品杯 瀚海蓝 420ml升级款（带滤网）</p> -->
        <p>{{ shops.title }}</p>
        <div>
          <div>
            <p>
              京东价 ￥<span>{{ shops.price.toFixed(2) }}</span>
            </p>
            <span>累计评价: 999</span>
          </div>
          <p>促销</p>
        </div>
        <!-- 增值业务 -->
        <p>增值业务: 无</p>
        <p>配送至 贵阳</p>
        <p>选择颜色： 红色</p>
        <p>选择规格: 550ml</p>
        <div style="display: flex">
          <!-- <button onclick="value--">-</button><input type="text" value="1" style="width: 40px;text-align: center;"><button onclick="value--">+</button> -->
          <button @click="shops.num--">-</button>
          {{ shops.num }}
          <button @click="shops.num++">+</button>
          <button
            style="margin-left: 5px; background-color: red"
            @click="addCard(shops)"
          >
            加入购物车
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
// const value = ref<number>(1);
import { userCartStore } from "@/stores/cart";
const cartStore = userCartStore()
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
console.log(route.query);
let shop = route.query.shop;
// console.log(typeof shop) ;
// 字符串转对象
let shops = JSON.parse(shop);

console.log("111", shops);
const router = useRouter();

// 2024.04/11   22:15分

// let preserveArr = JSON.parse(localStorage.getItem("carts"));

// 添加到购物车商品
const addCard = (shops:Object) => {

//   localStorage.setItem("carts", JSON.stringify([shops])); // []
//   if (preserveArr) {
//     let currentInfo = preserveArr.find((el) => {
//       return el.id === shops.id;
//     });
//     if (currentInfo) {
//       currentInfo.num = currentInfo.num + 1;
//       localStorage.setItem("carts", JSON.stringify(preserveArr));
//     } else {
//       shops.num = 1;
//       localStorage.setItem("carts", JSON.stringify([shops, ...preserveArr]));
//     }

// }


    router.push({
    path: "/shopCart",
    // query:{
    //   shop:JSON.stringify(shops)
    // }
  });

}
// 接收的商品

// 渲染传递过来的图片
// const props = defineProps({
//   picUrl: {
//     type: String,
//   },
// });
</script>

<style scoped>
.head {
  display: flex;
  justify-content: space-around;
  background-color: #f5f5f5;
  margin-top: 10px;
}
.midd {
  display: flex;
  flex-wrap: nowrap;
  justify-self: start;
  justify-content: center;
  width: 100%;
  margin-top: 10px;
}
.midd > :nth-child(2) > div > div {
  background-color: #f5f5f5;
}
.midd > :nth-child(2) > div > div {
  display: flex;
  justify-content: space-between;
}
.head > :nth-child(2) > span {
  margin-left: 20px;
}
</style>
