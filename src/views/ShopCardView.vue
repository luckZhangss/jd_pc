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
        
       <div class="second">
       <a-checkbox-group v-model:checked="checked" :options="plainOptions">  </a-checkbox-group>
    <!-- <a-checkbox-group   v-model:value="state.checkedList" :options="plainOptions"/> -->
      <img
        src="https://img11.360buyimg.com/n0/s80x80_jfs/t1/235965/23/3280/25868/655717dcF8d60543c/1e79e5e1aea3786c.jpg.dpg"
        alt=""
      />
      <span>餐客厅皮艺沙发售楼部接待室沙发单人多人沙发组合会员室沙发</span>
      <p>￥9999</p>
      <a-input-number
        id="inputNumber"
        v-model:value="value"
        :min="1"
        :max="999"
      />
      <p>9999</p>
      <a-button type="primary" danger>删除</a-button>
  
    </div>

    <div class="second">
       <a-checkbox-group v-model:checked="checked" :options="plainOptions">  </a-checkbox-group>
    <!-- <a-checkbox-group   v-model:value="state.checkedList" :options="plainOptions"/> -->
      <img
        src="https://img11.360buyimg.com/n0/s80x80_jfs/t1/235965/23/3280/25868/655717dcF8d60543c/1e79e5e1aea3786c.jpg.dpg"
        alt=""
      />
      <span>餐客厅皮艺沙发售楼部接待室沙发单人多人沙发组合会员室沙发</span>
      <p>￥9999</p>
      <a-input-number
        id="inputNumber"
        v-model:value="value"
        :min="1"
        :max="999"
      />
      <p>9999</p>
      <a-button type="primary" danger>删除</a-button>
  
    </div>

    
    </div>
    

  </div>
</template>

<script setup lang="ts">
import { reactive, watch } from "vue";
import { ref } from "vue";
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
.second>span{
    width: 10%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.balance{
    display: flex;
    justify-content: flex-end;
    margin-top: 40px;
}
</style>
