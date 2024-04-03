<template>
  <div class="box">
   
    <!-- 上 -->
    <div class="top">
      <!-- logo -->
      <div class="logo"></div>
      <!-- 搜索栏 -->
      <div class="search">
        <a-input-search
          v-model:value="value"
          placeholder="input search text"
          enter-button
          @search="onSearch"
        />
         <!-- nav栏 -->
      <div class="nav">
        <ul>
          <li v-for="item in items">{{item.message}}</li>
        </ul>
      </div>
      </div>
  </div>
    <!-- 中 -->
    <div class="middle">
      <!-- tab栏 -->
      
        <div class="midd_tab">
          <ul>
            <li v-for="item in tabList">
              {{item.tabMessage}}
              <!-- <span>家用电器</span> -->
              <div class="p1">{{ item.text }}</div>
            </li>
          
          </ul>
        </div>
      
      <!-- 轮播图 -->
      <div class="midd_swip">
        <a-carousel arrows autoplay>
    <template #prevArrow>
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
  <div class="swip_img">
    <img v-for="(item,index) in middSwip" :src="item.url" :key="index" />
  </div>
  </a-carousel>
      </div>
      <!-- 京东秒杀 -->
      <div class="midd_time">
        <!-- 第一层 -->
       
            <div class="midd_tim_one">
              <div>
                 <img src="https://img14.360buyimg.com/imagetools/jfs/t1/66037/3/24346/9414/64b11b21F51d90361/8f015973cbb7de8d.png" alt="">
          <p>登录 注册</p>
              </div>
              <div>
                 <img src="https://img14.360buyimg.com/imagetools/jfs/t1/66037/3/24346/9414/64b11b21F51d90361/8f015973cbb7de8d.png" alt="">
          <p>登录 注册</p>
              </div>
              <div>
                 <img src="https://img14.360buyimg.com/imagetools/jfs/t1/66037/3/24346/9414/64b11b21F51d90361/8f015973cbb7de8d.png" alt="">
          <p>登录 注册</p>
              </div>
        </div>
       
        <!-- 第二层 -->
          <div class="midd_tim_two">
            <!-- 计时器 -->
            <div>
              <a-statistic-countdown
        title="京东秒杀"
        :value="deadline"
        style="margin-right: 50px"
        @finish="onFinish"
      />
            </div>
            <!-- 二层第二行 -->
            <div class="midd_tim_sp">
              <!-- 轮播商品 -->
            
            </div>
          </div>
          <!-- 三层 -->

          <!-- 四层 -->
      </div>
    </div>
    <!-- 为你推荐 -->
    <p style="text-align: center;font-size: 1.5rem;margin-top: 16px;">为你推荐</p>
    <div class="recom">
          <div class="like">
            <div>
              <div style="border-right: 1px solid #ccc;padding-right:30px;">
              <span>精选</span>
              <p>猜你喜欢</p>
              </div>
            </div>
          
            <div>
              <div style="border-right: 1px solid #ccc;padding-right: 60px;">
              <span>精选</span>
              <p>猜你喜欢</p>
              </div>
            </div>

            <div>
              <div style="border-right: 1px solid #ccc;padding-right: 60px;">
              <span>精选</span>
              <p>猜你喜欢</p>
              </div>
            </div>

            <div>
              <div style="border-right: 1px solid #ccc;padding-right: 60px;">
              <span>精选</span>
              <p>猜你喜欢</p>
              </div>
            </div>

            <div>
              <div >
              <span>精选</span>
              <p>猜你喜欢</p>
              </div>
            </div>
          </div>
    </div>
    <!-- 商品 -->
    <div class="shop">
      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>

      <div>
        <img src="https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif" alt="">
        <p>尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml</p>
      </div>
    </div>
    <!-- 下 -->
  </div>
</template>

<script lang="ts" setup>
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { ref } from 'vue';
const value = ref<string>('');
// nav
  const items = ref([
    {
      message:'电脑数码',
    },
    {
      message:'京东手机',
    },
    {
      message:'拍卖',
    },
    {
      message:'京东家电',
    },
    {
      message:'京东超市',
    },
    {
      message:'京东生鲜',
    },
    {
      message:'大牌奥莱',
    },
    {
      message:'京东五金城'
    },
    {
      message:'进口好物'
    }
  ])
// tab
const tabList = ref([{
    tabMessage:'家用电器', 
    text:'ssssssssss'
},
  {
    tabMessage:'手机/运营商/电脑',
    text:'sssssssppppppsss'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'qwqqqqqqqq'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'kkkkkkkkkkkkkkkkkkk'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'vvvvvvvvvvvvvvvvv'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'mmmmmmmmmmmmmm'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'mmmmmmmmmmmmmm7'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'mmmmmmmmmmmmmm6'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'mmmmmmmmmmmmmm5'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'mmmmmmmmmmmmmm4'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'mmmmmmmmmmmmmm2'
  },
  {
    tabMessage:'手机/运营商/电脑',
    text:'mmmmmmmmmmmmmm4'
  }
 
])
// 轮播图
const middSwip = ref([{
    url:"https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000322/10066754549304/FocusFullshop/CkJqZnMvdDEvMjA3MTEwLzYvNDA4MDEvMTU0MzIvNjVmYjM5NDFGNDQ1ZWE5ZTkvMmVkZTRjYWNkMWQ2MzY2OS5wbmcSCTQtdHlfMF81NTABOMKLekIYChLmtbfph4_lsJbotKfmnaXooq0QARgBQhYKEueyvuW9qeS4jeWuuemUmei_hxACQhAKDOeri-WNs-aKoui0rRAGQgoKBuS8mOmAiRAHWLjs0Mr9pAI/cr/s/q.jpg"
},
  {
    url:"https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000322/10066754549304/FocusFullshop/CkJqZnMvdDEvMjA3MTEwLzYvNDA4MDEvMTU0MzIvNjVmYjM5NDFGNDQ1ZWE5ZTkvMmVkZTRjYWNkMWQ2MzY2OS5wbmcSCTQtdHlfMF81NTABOMKLekIYChLmtbfph4_lsJbotKfmnaXooq0QARgBQhYKEueyvuW9qeS4jeWuuemUmei_hxACQhAKDOeri-WNs-aKoui0rRAGQgoKBuS8mOmAiRAHWLjs0Mr9pAI/cr/s/q.jpg"
  },
  {
    url:'https://imgcps.jd.com/ling-cubic/ling4/lab/amZzL3QxLzEyNjU0OS8xMS8zODEyMi80MTU3MTcvNjRlYzY2YmVGNTIzNjYxMGUvMTI5NTM1MDFiMDI3ZWM2NC5wbmc/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/1635185254164787202/cr/s/q.jpg'
  }
])
const onSearch = (searchValue: string) => {
  console.log('use value', searchValue);
  console.log('or use this.value', value.value);
};
// 计时器
const onFinish = () => {
  console.log('finished!');
};
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;


</script>

<style lang="scss" scoped>
:root,html,body{
  width: 100%;
}
.box{
  background-color: #f5f5f5;
}
.top{
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  max-height: 150vh;
  width: 100%;
  flex-wrap: wrap;
  justify-content: center;
  background-color: white;
  border: 1px solid #f5f5f5;
  
}
.middle{
  display: flex;
  // flex-wrap: nowrap;
  // justify-content: center;
  flex-direction: row;
  justify-content: center;
  // height: 100vh;
  margin-top: 10px;
 
}
// 推荐
.recom{
  display: flex;
  justify-content: center;
  // background-color: #364d79;
  // height: 100vh;
}
//  精选
.like{
  display: flex;
  justify-content: center;
  height: 10vh;
}
// 商品
.shop{
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // background-color: yellow;
  height: 100vh;
  width: 90%;
  margin-left: 75px;
  margin-top: -1rem;
}
.shop>div{
  display: flex;
  flex-direction: column;
   justify-self: start;
  //  background-color: #e1251b;
  background-color: white;
   width: 31vh;
   height: 40vh;
   margin: 5px 6px;
}
.shop>div>img{
  width: 220px;
  height: 220px;
}
// 文字换行2行显示
.shop>div>p{
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
   overflow: hidden;
   text-overflow: ellipsis;
}

.like>div{
  padding: 20px 60px;
  background-color: #fff;
  text-align: center;
}

.like>:first-child>div>span{
  color: white;
 font-weight: 700;
  border-radius: 50px;
  background-color: red;
  padding: 0px 20px;
}
.like>:first-child>div>p{
  margin-top: 5px;
  color: #e1251b;
  font-size: 14px;
}
.midd_tab{
  // width: 10%;
  height: 60vh;
  margin-right: 10px;
  background-color: white;
}
.midd_swip{
  // background-color: blue;
  width: 35%;
  height: 60vh
}
.midd_time{
  
  background-color: red;
  width: 25%;
  height: 60vh;
  margin-left: 10px;
}
.midd_tim_one{
  display: flex;
  justify-content: space-around;
  background-color: #fff;
 
}
.midd_tim_two{
  display: flex;
  justify-content: space-around;
  background-color: green;
  
}
.midd_time>.midd_tim_one>div>img{
  width: 28px;
  height: 28px;
}
.midd_time>.midd_tim_one>div>p{
  font-size: 0.6rem;
  // text-align: center;
  margin-top: 0.4rem;
}
.midd_swip>.swip_img>img{
  width: 100%;
  height: 100%;
}
.midd_tab>ul{
  height: 50vh;
  line-height: 5vh;
  list-style: none;
}
.midd_tab>ul>li{
  margin-right: 35px;
  cursor: pointer;
}
.midd_tab>ul>li>span{
  margin-right: 40px;
}
.midd_tab > ul > li > div {
  width: 65%;
  height: 60vh;
  position: absolute;
  left: 360px;
  top: 130px;
  display: none;
}
.midd_tab > ul > li > .p1 {
  background-color: red;
}

.midd_tab > ul > li:hover > div {
  display: block;
  z-index: 999;
}
.top>:nth-child(2)>.nav>ul>li{
  list-style: none;
  float: left;
  padding-left: 0.4rem;
  padding-right: 0.22rem;
  padding-top: 1rem;
}
.top>:nth-child(2)>.nav>ul>li:hover{
  cursor: pointer;
  color: red;
}
.logo {
  background-image: url("https://img10.360buyimg.com/img/jfs/t1/192028/25/33459/5661/63fc2af2F1f6ae1b6/d0e4fdc2f126cbf5.png");
  background-size: cover;
  width: 200px;
  height: 120px;
}




// 轮播
/* For demo */
:deep(.slick-slide) {
  text-align: center;
  height: 420px;
  line-height: 420px;
  background: #364d79;
  overflow: hidden;
}
:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
:deep(.slick-arrow.custom-slick-arrow:hover) {
  color: #fff;
  opacity: 0.5;
}

:deep(.slick-slide h3) {
  color: #fff;
}
</style>
