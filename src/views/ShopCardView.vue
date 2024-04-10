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
      <a-checkbox
        v-model:checked="state.checkAll"
        :indeterminate="state.indeterminate"
        @change="onCheckAllChange"
      >
        全选
      </a-checkbox>
      <div>商品</div>
      <div>单价</div>
      <div>数量</div>
      <div>小计</div>
      <div>操作</div>
    </div>
    <!-- 2 -->
    <div>
        
       <div class="second" v-for="item in data.shopCart" :key="item.id">
       <a-checkbox-group v-model:checked="checked" :options="plainOptions">  </a-checkbox-group>
   
      <img :src="item.picUrl" alt="">
      <span>{{ item.title }}</span>
      <p>￥<span> {{ item.price }}</span></p>
      <a-input-number
        id="inputNumber"
        v-model:value="value"
        :min="1"
        :max="999"
      />
      <p> ￥<span>9999</span> </p>
      <a-button type="primary" danger>删除</a-button>
  
    </div>



    <div class="balance">
      <p>删除选中商品</p>
      <p>清除购物车</p>
      <p>总价:￥<span>999</span></p>
      <a-button type="primary" danger>去结算</a-button>
    </div>
    </div>
    
  </div>
</template>
<script setup lang="ts">
import axios from "axios";
import { reactive, watch } from "vue";
import { ref } from "vue";



const data = reactive({
  shops:[]
})

// 获取购物车数据
axios.get('http://localhost:3000/shopCart').then((res)=>{
  console.log(res);
  data.shopCart = res.data
})

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

const value = ref<number>(1);
const plainOptions = [""];
const state = reactive({
  indeterminate: true,
  checkAll: false,
  checkedList: ["1","2","3"],
});

const checked = ref([])

const onCheckAllChange = (e: any) => {
  Object.assign(state, {
    checkedList: e.target.checked ? plainOptions : [],
    indeterminate: false,
  });
};
watch(
  () => state.checkedList,
  (val) => {
    state.indeterminate = !!val.length && val.length < plainOptions.length;
    state.checkAll = val.length === plainOptions.length;
  }
);
</script>

<style scoped>


.second {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid;
}
.second>img{
  width: 80px;
  height: 80px;
}
.second>span{
    width: 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.balance{
    display: flex;
    justify-content: flex-end;
    margin-top: 80px;
}
.balance>p{
  margin: 5px 10px;
}
</style>
