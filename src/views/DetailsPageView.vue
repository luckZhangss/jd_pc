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
              京东价 ￥<span>{{ shops.price }}</span>
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
          <a-input-number
            id="inputNumber"
            v-model:value="value"
            :min="1"
            :max="999"
          />
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
// import axios from 'axios';
import { ref } from "vue";
const value = ref<number>(1);
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
console.log(route.query);

const router = useRouter();




// 2024.04/11   22:15分才想通

let preserveArr = JSON.parse(localStorage.getItem("carts"));

// 添加到购物车商品
const addCard = (shops: any) => {

    localStorage.setItem('carts',JSON.stringify([shops]))    // []

// let preserveArr = JSON.parse(localStorage.getItem("carts"));

if(preserveArr){
   let currentInfo = preserveArr.find(el=>{
    return el.id === shops.id
   })
   if(currentInfo){
    currentInfo.num = currentInfo.num+1
    localStorage.setItem('carts',JSON.stringify(preserveArr))
   }else{
    shops.num = 1
    localStorage.setItem('carts',JSON.stringify([shops,...preserveArr]))
   }
   
}else{
  shops.num =1
  localStorage.setItem('carts',JSON.stringify([shops]) )
}
// 获取本地存储的carts
// let preserve = JSON.parse(localStorage.getItem("carts"));
// let preserveArr = Object.keys(preserve)
// console.log('qwe',typeof preserveArr);

  

  // axios.get('http://localhost:3000/shopCart',shops).then((res)=>{
  //   console.log(res);
  // 将商品存入本地，名称为carts
  // localStorage.setItem('carts',JSON.stringify(product))
  // 点击加入购物车商品，如果本地有查找本地商品和目标商品id是否相同
  // if (preserveArr) {
  //   console.log('dffdcg',preserveArr);
  
    
  //   let currentInfo = preserveArr.find(el =>{
  //     return el.id === shops.id;
  //   });
  //   // 如果id相同，加入购物车只加数量sum ,加完后存入本地
  //   if (currentInfo) {
  //     currentInfo.num = currentInfo.num + 1;
  //     localStorage.setItem("carts", JSON.stringify(preserveArr));
  //   } else {
  //     // 否则就是没有存入的商品 默认数量为1，将新商品和旧商品一起存入本地，
  //     shops.num = 1;
  //     localStorage.setItem("carts", JSON.stringify([shops, ...preserveArr]));
  //   }
  // } 
  
  // else {
  //   product.num = 1;
  //   localStorage.setItem("carts", JSON.stringify([product]));
  // }
  console.log("加购成功");


  // })

  router.push({
    path: "/shopCard",
   
  });
};

// 接收的商品
let shop = route.query.shop;
// console.log(typeof shop) ;
// 字符串转对象
let shops = JSON.parse(shop);
console.log(shops);

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
