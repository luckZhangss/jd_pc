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

        <img :src="shops1.shops.picUrl" alt="" />
      </div>
      <!-- you -->
      <div>
        <!-- <p>TAIC太可钛度钛杯纯钛保温杯 钛水杯男女情侣双层真空 商务高档礼品杯 瀚海蓝 420ml升级款（带滤网）</p> -->
        <p>{{ shops1.shops.title }}</p>
        <div>
          <div>
            <p>
              京东价 ￥<span>{{ shops1.shops.price.toFixed(2) }}</span>
            </p>
            <span>累计评价: 999</span>
          </div>
          <p>促销</p>
        </div>
        <!-- 增值业务 -->
        <p>增值业务: 无</p>
        <p>配送至 贵阳</p>
        <!-- <div style="display: flex; margin-bottom: 10px">
          <div class="colorLef">选择颜色：</div>
          <div class="colorRig" v-for="item in shops1.shops.color">
            <span>{{ item.color }}</span>
          </div>
        </div> -->

        <div
          style="display: flex; margin-bottom: 10px"
          v-for="(item, index) in shops1.shops.spec"
        >
          <div class="specLef">选择{{ item.name }}:</div>
          <div class="specRig">
            <select v-model="selectedSpecs[index]">
              <option
                :value="item1"
                v-for="(item1, index) in item.options"
                :key="index"
              >
                {{ item1 }}
              </option>
            </select>
           
          </div>
        </div>

        <div style="display: flex">
          <button
            @click="shops1.shops.num--"
            :disabled="shops1.shops.num === 1"
          >
            -
          </button>
          <input
            type="text"
            v-model="shops1.shops.num"
            style="width: 30px; text-align: center"
          />

          <button @click="shops1.shops.num++">+</button>
          <button
            style="margin-left: 5px; background-color: red"
            @click="addCart(shops)"
          >
            加入购物车
          </button>
        </div>
      </div>
    </div>

    <!-- 测试盒子 -->
    <div
      class="div"
      :style="{ borderColor: borderColor }"
      @click="changeBorderColor"
      id="div"
    >
      测试盒子
    </div>
  </div>
</template>

<script setup lang="ts">
import { userCartsStore } from "@/stores/carts";
import { reactive, ref } from "vue";
const cartStores = userCartsStore();
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
console.log(route.query);
// 传过来的参数 shop
let shop = route.query.shop;
// console.log(typeof shop) ;

// 字符串转对象为shops
let shops = JSON.parse(shop);

// 当路由传参接收到参数对象后，失去响应式，可以给该对象外层套一层对象，解决失去响应问题
let shops1 = reactive({
  shops,
});

const borderColor = ref("blue");
const changeBorderColor = () => {
  borderColor.value = "red";
};
//   document.getElementById('div').addEventListener('click',function(){
//    this.style.backgroundColor = 'red'
// })

// console.log("111", shops);
const router = useRouter();

// 2024.04/11   22:15分

// let preserveArr = JSON.parse(localStorage.getItem("carts"));

// 用户选择的规格
const selectedSpecs = ref(shops1.shops.spec.map((v) => v.options[0]));

// 通过pinia添加到购物车商品
const addCart = (shops) => {
  // console.log("添加规格为:", selectedSpecs.value);

  let shopss = Object.assign(shops.spec, selectedSpecs.value);
  console.log("444", shopss);
  console.log("1", shops);

  if (cartStores.shop.includes(shops)) {
    cartStores.addItemToArray(shops);
  } else {
    const index = cartStores.shop.findIndex((item) => item.id === shops.id);

    if (index !== -1 ) {
      // 购物车中已有该商品，只增加数量     
      // 如果添加的数量是1
    
      if (shops.num == 1) {      //这里有bug
        cartStores.shop[index].num++;
      } else {
        cartStores.shop[index].num += shops.num++;
      }

      // if(shops.num ==1 && selectedSpecs.value === shops.spec){
      //   cartStores.shop[index].num++;
      // }else{
      //   cartStores.addShop(shops);
      // }

    } else {
    
      // 购物车中没有该商品，添加到购物车
      // cartStores.shop.push({ ...shops});
      cartStores.addShop(shops);
    }
  }
  // console.log("11111", cartStores.shop);

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
};
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

/* .color>div{
  border: solid 1px;
  padding: 8px;
  margin-right: 10px;
  cursor: pointer;
} */
.noneActive {
  background-color: #ccc;
}
.Active {
  background-color: red;
}
.specLef {
  height: 20px;
}

.colorLef {
  height: 20px;
}
.specRig {
  /* margin-left: 5px; */
  height: 30px;
  line-height: 30px;
  margin-left: 15px;
}
.colorRig {
  height: 30px;
  line-height: 20px;
}
.colorRig > span {
  display: block;
  margin-left: 8px;
  border: 1px solid;
  text-align: center;
  padding: 5px 10px;
  cursor: pointer;
}
.specRig > .a-radio-button {
  display: block;
  margin-left: 8px;
  border: 1px solid;
  text-align: center;
  padding: 0 8px;
  cursor: pointer;
}
.div {
  border-style: solid;
  width: 10%;
  cursor: pointer;
}
</style>
