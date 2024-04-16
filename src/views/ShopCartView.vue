<template>
  <div>
    <!-- 返回首页 -->
    <div style="margin: 5px 0 10px;cursor: pointer;">
       <a href="/home" style="text-decoration: none;">返回首页</a>
    </div>
   
    <div
      style="
        width: 100%;
        height: 40px;
        background-color: #f5f5f5;
        display: flex;
        justify-content: space-around;
        align-items: center;
      "
    >
      <a-checkbox v-model:checked="isChecked" @change="checkAll" >
        全选
        <!-- {{ isChecked }} -->
      </a-checkbox>
      <div>商品</div>
      <div>单价</div>
      <div>数量</div>
      <div>小计</div>
      <div>操作</div>
    </div>
    <!-- 2 -->

    <div class="second" v-for="(item, index) in cartList" :key="item.id" v-if="cartList.length>0">
      <a-checkbox @change="cartStore.itemChecked(index)" v-model:checked="item.check"></a-checkbox>
      <img :src="item.picUrl" alt="" />
      <span>{{ item.title }}</span>
      <p>
        ￥<span> {{ item.price }}</span>
      </p>
      <div>
         <button @click="item.num--"  :disabled="item.num ===1">-</button>
         <!-- {{ item.num }} -->
        
          <input type="text"  v-model="item.num" style="width: 50px;text-align: center; text-decoration: none;"/>

         
      <button @click="item.num++">+</button>
      </div>
     
      <p>
        ￥<span>{{ (item.num * item.price).toFixed(2) }}</span>
      </p>
      
      <a-popconfirm placement="top" ok-text="Yes" cancel-text="No" @confirm="confirm">
        <a-button type="primary" danger @click="del(item.id,index)">删除</a-button>
        <template #title>
          <p>{{ text }}</p>
        </template>
        
      </a-popconfirm>


    </div>
    <div class="balance" v-if="cartList.length>0">
      <p @click="selectShop(index)" style="cursor: pointer;">删除选中商品</p>
      <p style="cursor: pointer" @click="clear(index)">清除购物车</p>
      <p>总计:￥<span>{{(total.price).toFixed(2)  }}</span></p>
      <p>数量：<span>{{ total.number }}</span></p>
      <a-button type="primary" danger>去结算</a-button>
    </div>
     <h1 style="text-align:center ;align-items: center;" v-else>当前没有任何商品</h1>
  </div>
</template>
<script setup lang="ts">
import { message } from 'ant-design-vue';

import { userCartStore } from "@/stores/cart";
import { storeToRefs } from "pinia";
const cartStore = userCartStore()
import axios from "axios";
import { reactive, ref, watch } from "vue";

// import {useRoute} from 'vue-router'
// const route = useRoute()

// console.log('888',route.query);
// let shop = route.query.shop;

// let shops = localStorage.getItem("carts");
// console.log("444", shops);
// let shop = JSON.parse(shops);
// console.log('555',shops);


let {cartList,isChecked,total} = storeToRefs(cartStore)

// 获取购物车数据
axios.get('http://localhost:3000/shopCart').then((res)=>{
  console.log(res.data);
  cartStore.addCart(res.data)
})



//  cartStore.addCart(shop)

// 删除选中商品




const checkAll = ()=>{
  if(isChecked.value){
    // 不选
    cartStore.unAll()
  }else{
    // 全选
    cartStore.all()
  }
}
 const text = '您确定要删除嘛？';
  const confirm = (index) => {
    cartStore.cartList.splice(index,1)
    message.info('已删除');
    
  };
// 删除购物车数据
const del = (id,index)=>{
  // axios.delete('http://localhost:3000/shopCart',id).then((res)=>{
  //   console.log(res);
  // })
}


// import { useRoute } from "vue-router";



// 全选
// const state = reactive({
//   checkAll: false,
// });

// const onCheckAllChange = (e) => {
//   console.log(e);
// };

// const data = reactive({
//   shops:[]
// })

// 删除商品，截取数组下标
// const del = (index: any) => {
//   console.log("删除了");
//   // console.log(index);

//   shop.splice(index, 1);
//   localStorage.setItem("carts", JSON.stringify(shop));
//   location.reload();
// };

// // 清空购物车
const clear = (index) => {
  // shop.splice(index);
  // localStorage.setItem("carts", JSON.stringify(shop));
  // location.reload();
  cartStore.cartList.splice(index)
};



// route 接收路由传过来的参数
// const route = useRoute()
// let title = route.query.title
// console.log(route.query.title);
// let pics = route.query.pics
// let price = route.query.price
// let shop = route.query.shop

// props 限制类型，渲染传过来的图片
// const props = defineProps({
//   type:String
// })

// const route = useRoute()
// console.log(route.query);
// let shops = route.query.shops
// let shop = JSON.parse(shops)
// console.log(shop);
// localStorage.setItem('shop',JSON.stringify(shop))
</script>

<style scoped>
:deep(#components-a-popconfirm-demo-placement) .ant-btn {
  width: 70px;
  text-align: center;
  padding: 0;
  margin-right: 8px;
  margin-bottom: 8px;
}
.second {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid;
}
.second > img {
  width: 80px;
  height: 80px;
}
.second > span {
  width: 10%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.balance {
  display: flex;
  justify-content: flex-end;
  margin-top: 80px;
}
.balance > p {
  margin: 5px 10px;
}
</style>
