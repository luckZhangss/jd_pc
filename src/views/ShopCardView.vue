<template>
  <div>
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
      <a-checkbox >
        全选
      </a-checkbox>
      <div>商品</div>
      <div>单价</div>
      <div>数量</div>
      <div>小计</div>
      <div>操作</div>
    </div>
    <!-- 2 -->
  
    
      <div class="second" v-for="(item, index) in shop" :key="item.id">
        <a-checkbox  @change="(val)=>changeCheck(val,item)"></a-checkbox>
        <img :src="item.picUrl" alt="" />
        <span>{{ item.title }}</span>
        <p>
          ￥<span> {{ item.price }}</span>
        </p>
        <a-input-number
          id="inputNumber"
          v-model:value="item.num"
          :min="1"
          :max="999"
        />
        <p>￥<span>9999</span></p>
        <a-button type="primary" danger @click="del(index)">删除</a-button>
  
      </div>
      <div class="balance">
        <p>删除选中商品</p>
        <p style="cursor: pointer" @click="clear(index)">清除购物车</p>
        <p>总价:￥<span></span></p>
        <a-button type="primary" danger>去结算</a-button>
      </div>
    </div>

</template>
<script setup lang="ts">
// import axios from "axios";
import { computed, reactive, ref, watch } from "vue";

let shops = localStorage.getItem("carts");
console.log(shops);
let shop = JSON.parse(shops);
// console.log('11111111111',shop);


// const sum = ref<number>(1);
// import { useRoute } from "vue-router";


//多选框 
const changeCheck =(val,item)=>{
  // console.log('2222',val);
  // console.log('aaaa',shop);
  console.log('111111111',val,item);
  
}

// 全选




// const data = reactive({
//   shops:[]
// })



// 删除商品，截取数组下标
const del = (index: any) => {
  console.log('删除了');
  // console.log(index);

  shop.splice(index, 1);
  localStorage.setItem("carts", JSON.stringify(shop));
  location.reload();
};

// 清空购物车
const clear = (index) => {
  shop.splice(index);
  localStorage.setItem("carts", JSON.stringify(shop));
  location.reload();
};

// 获取购物车数据
// axios.get('http://localhost:3000/shopCart').then((res)=>{
//   console.log(res);
//   data.shopCart = res.data
// })

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
