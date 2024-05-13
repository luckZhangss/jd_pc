<template>
  <div class="box">
    <div class="user">
      <h3>
        <a href="/chartList">图标列表</a>
        <a href="/keepAliveB" style="margin-left: 10px">缓存组件</a>
        欢迎你
        <span style="color: red">【{{ userInfo.username }}】</span> 登录!!!
      </h3>
      <div
        style="font-size: 14px; margin-left: 20px; cursor: pointer; color: blue"
      >
        <a-popconfirm
          title="您确定要注销嘛?"
          ok-text="确认"
          cancel-text="取消"
          @confirm="confirm"
          @cancel="cancel"
          style="cursor: pointer"
        >
          退出登录
        </a-popconfirm>
      </div>
    </div>
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
            <li v-for="item in data.nav">{{ item.title }}</li>
          </ul>
        </div>
      </div>
      <!-- 购物车 -->
      <div
        style="
          border: solid 1px;
          margin-left: 60px;
          padding: 10px;
          cursor: pointer;
        "
      >
        <a-badge :count="cartStores.shop.length" show-zero>
          <a-avatar shape="square" size="small"
            ><ShoppingCartOutlined
          /></a-avatar>
        </a-badge>
        <a style="text-decoration: none; color: black" @click="goCart"
          >我的购物车</a
        >
      </div>
    </div>
    <!-- 中 -->
    <div class="middle">
      <!-- tab栏 -->
      <div class="midd_tab">
        <ul>
          <li v-for="item in data.tabList">
            {{ item.tabName }}
            <!-- <span>家用电器</span> -->
            <div class="p1">{{ item.tabContent }}</div>
          </li>
        </ul>
      </div>

      <!-- 轮播图 -->
      <div class="midd_swip">
        <a-carousel arrows autoplay effect="fade">
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
          <div
            class="swip_img"
            v-for="(item, index) in data.middSwip"
            :key="index"
          >
            <img :src="item.picUrl" />
          </div>
        </a-carousel>
      </div>
      <!-- 京东秒杀 -->
      <div class="midd_time">
        <!-- 第一层 -->

        <div class="midd_tim_one">
          <div v-for="item in 3" :key="item">
            <p>PLUS会员</p>
            <p>专享立减</p>
            <p>立即开通></p>
          </div>
        </div>

        <!-- 第二层 -->
        <div class="midd_tim_two">
          <!-- 左 -->
          <div class="left">
            <p>京东秒杀</p>
            <img
              src="https://img10.360buyimg.com/imagetools/jfs/t1/161181/16/42128/3025/65d5bb70F884567d5/9b0af44f42faedc1.png"
              alt=""
            />
            <span style="">16:00场</span>
            <div style="width: 5px">
              <a-statistic-countdown
                title=""
                :value="deadline"
                style="margin-right: 50px"
                @finish="onFinish"
              />
            </div>
          </div>
          <!-- 右 -->
          <div class="right">
            <a-carousel arrows>
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
              <!-- 第一页 -->
              <div v-for="item in 3" :key="item">
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div
                    v-for="item in data.smallSwiper"
                    :key="item.id"
                    style="margin-top: -10px; margin-left: -10px"
                  >
                    <img
                      style="width: 60px; height: 60px"
                      :src="item.picUrl"
                      alt=""
                    />
                    <p style="color: red; font-weight: 600">
                      ￥{{ item.price }}
                    </p>
                  </div>
                </div>
              </div>
            </a-carousel>
          </div>
        </div>
        <!-- 第三层 -->
        <div class="midd_tim_three">
          <!-- 左 -->
          <div class="left">
            <img
              src="https://img10.360buyimg.com/imagetools/jfs/t1/156950/38/39896/25927/65d45c60F03d153e3/9522a4f8db12af40.png"
              alt=""
            />
          </div>
          <!-- 右 -->
          <div class="right">
            <a-carousel arrows>
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
              <!-- 第一页 -->
              <div v-for="item in 3" :key="item">
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div
                    v-for="item in data.smallSwiper"
                    :key="item.id"
                    style="margin-top: -10px; margin-left: -10px"
                  >
                    <img
                      style="width: 60px; height: 60px"
                      :src="item.picUrl"
                      alt=""
                    />
                    <p style="color: red; font-weight: 600">
                      ￥{{ item.price }}
                    </p>
                  </div>
                </div>
              </div>
            </a-carousel>
          </div>
        </div>
        <!-- 四层 -->
        <div class="midd_tim_four">
          <div>
            <div
              v-for="item in data.Otherfunction"
              :key="item"
              @click="otherFunction(item)"
            >
              <img :src="item.picUrl" alt="" />
              <p>{{ item.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 为你推荐 -->
    <p style="text-align: center; font-size: 1.5rem; margin-top: 16px">
      为你推荐
    </p>
    <div class="recom">
      <div class="like">
        <div v-for="item in data.guessLike" :key="item">
          <div>
            <span>{{ item.bigTitle }}</span>
            <p>{{ item.title }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品 -->
    <div class="shop">
      <div
        v-for="item in data.shopping"
        :key="item.id"
        @click="goDetails(item)"
      >
        <img :src="item.picUrl" />
        <p>{{ item.title }}</p>
        <p>
          <!-- ￥<span>{{ item.price.toFixed(2) }}</span> -->
          ￥<span>{{ item.price.toFixed(2) }}</span>
        </p>
      </div>
    </div>

    <!-- 回到顶部 -->
    <span class="goTop" id="btn" @click="goTop">回到顶部</span>

    <!-- 下 -->
  </div>
</template>

<script lang="ts" setup>
// import {userCartStore} from '../stores/cart'
import {
  getTabList,
  getNav,
  getShopping,
  getOtherfunction,
  getGuessLike,
  getSwiper,
  getSmallSwiper,
} from "@/config/api";
import { userCartsStore } from "@/stores/carts";
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons-vue";
import { onMounted, reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { message } from "ant-design-vue";
// // 退出登录
const confirm = (e: MouseEvent) => {
  console.log(e);
  localStorage.removeItem("token");
  localStorage.removeItem("userInfo");
  router.push("/");
  message.success("已注销");
};
//
const cancel = (e: MouseEvent) => {
  console.log(e);
  message.error("已取消");
};

const otherFunction = (e) => {
  message.info(e.name + "功能正在开发中");
};

// 去购物车
const goCart = () => {
  if (localStorage.getItem("token") && localStorage.getItem("userInfo")) {
    router.push("/shopCart");
  } else {
    router.push("/");
  }
};

const router = useRouter();
// const cartStore = userCartStore()
const cartStores = userCartsStore();
const goDetails = (item) => {
  router.push({
    path: "/detailsPage",
    query: {
      shop: JSON.stringify(item),
    },
  });
};

// 本地获取存储的用户信息
let userInfo = JSON.parse(localStorage.getItem("userInfo"));
window.onscroll = () => {
  let currHeight = document.documentElement.scrollTop;
  if (currHeight > 300) {
    document.querySelector("#btn").style.display = "block";
  } else {
    document.querySelector("#btn").style.display = "none";
  }
};
// 回顶部
const goTop = () => {
  document.body.scrollTop = document.documentElement.scrollTop = 0;
};

const value = ref<string>("");

// 商品
const data = reactive({
  shopping: [],
  guessLike: [],
  middSwip: [],
  Otherfunction: [],
  nav: [],
  tabList: [],
  smallSwiper: [],
});



// tab
onMounted(() => {
  getTabList().then((res) => {
    data.tabList = res.data;
  });
  // nav
  getNav().then((res) => {
    data.nav = res.data;
  });
  // 请求获取商品详情
  getShopping().then((res) => {
    data.shopping = res.data;
  });
  // Otherfunction
  getOtherfunction().then((res) => {
    data.Otherfunction = res.data;
  });
  // 猜你喜欢
  getGuessLike().then((res) => {
    data.guessLike = res.data;
  });
  // 轮播图
  getSwiper().then((res) => {
    data.middSwip = res.data;
  });
  // 小轮播
  getSmallSwiper().then((res) => {
    data.smallSwiper = res.data;
  });
});

const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
};

// 计时器
const onFinish = () => {
  console.log("finished!");
};
const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30;
</script>

<style lang="scss" scoped>
:root,
html,
body {
  width: 100%;
}
a {
  text-decoration: none;
  color: black;
}
.box {
  background-color: #f5f5f5;
}
.top {
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
.middle {
  display: flex;
  // flex-wrap: nowrap;
  // justify-content: center;
  flex-direction: row;
  justify-content: center;
  // height: 100vh;
  margin-top: 10px;
}
// 推荐
.recom {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  // background-color: #364d79;
  // height: 100vh;
}
//  精选
.like {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 10vh;
  width: 100%;
}

.like > :last-child > div {
  border: none !important;
}
// 商品
.shop {
  display: flex;
  // justify-content: space-around;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  // background-color: yellow;
  // height: 100vh;
  width: 90%;
  margin-left: 75px;
  margin-top: -1rem;
}
.shop > div {
  display: flex;
  flex-direction: column;
  justify-self: start;
  //  background-color: #e1251b;
  background-color: white;
  width: 31vh;
  height: 46.5vh;
  margin: 5px 6px;
  cursor: pointer;
}
.shop > div > img {
  width: 220px;
  height: 220px;
}
// 文字换行2行显示
.shop > div > p {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
  margin-left: 10px;
  margin-right: 10px;
}
.shop > div > :nth-child(3) {
  color: red;
}
.shop > div > :nth-child(3) > span {
  font-size: 18px;
  font-weight: 600;
  color: #e1251b;
}

.like > div {
  padding: 9px 0;
  padding-left: 60px;

  background-color: #fff;
  text-align: center;
  align-items: center;
}
.like > div > div {
  text-align: center;
  align-items: center;
  border-right: 1px solid #ccc;
  padding-right: 65px;
}
.like > div > div:hover {
  color: #e1251b;
  cursor: pointer;
}

.like > div > div:hover p {
  color: #e1251b;
  cursor: pointer;
}

.like > :first-child > div > span {
  color: white;
  font-weight: 700;
  border-radius: 50px;
  background-color: red;
  padding: 0px 20px;
}
.like > div > div > span {
  font-weight: 800;
}
.like > div > div > p {
  font-size: 14px;
  color: #999;
  margin-top: 10px;
}
.like > :first-child > div > p {
  margin-top: 5px;
  color: #e1251b;
  font-size: 14px;
}
.midd_tab {
  // width: 10%;
  height: 60vh;
  margin-right: 10px;
  background-color: white;
}
.midd_swip {
  // background-color: blue;
  width: 35%;
  height: 60vh;
}
.midd_time {
  // background-color: red;
  width: 25%;
  height: 60vh;
  margin-left: 10px;
}
.midd_tim_one {
  display: flex;
  // justify-content: space-around;
  background-color: #fff;
  height: 14vh;
  // text-align: center;
  // align-items: center;
}
.midd_tim_two {
  display: flex;
  justify-content: space-between;
  // background-color: green;
  background-color: white;
  margin-top: 10px;
  height: 14vh;
}

.midd_tim_three {
  display: flex;
  justify-content: space-between;
  // background-color: green;
  background-color: white;
  margin-top: 10px;
  height: 14vh;
}
.midd_tim_four {
  // display: flex;
  // flex-wrap: wrap;
  // justify-content: flex-start;
  // justify-self: start;
  height: 14vh;
  // background-color: greenyellow;
  background-color: white;
  margin-top: 10px;
}
.midd_tim_four > :nth-child(1) {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  justify-self: start;
  margin-left: 10px;
}
.midd_tim_four > :nth-child(1) > div {
  width: 20%;
  text-align: center;
}
.midd_tim_four > div > div > img {
  width: 28px;
  height: 28px;
}
.midd_tim_four > div > div > p {
  font-size: 12px;
}

.midd_tim_three > .left > img {
  width: 70px;
  height: 85px;
}
.midd_tim_three > .left {
  //  background-color: #e1251b;
  text-align: center;
  margin: 9px;
}

.midd_tim_three > .right {
  // background-color: yellow;
  // width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.midd_tim_three > .right > .swip_sp {
  width: 255px;
  display: flex;

  // padding: 0;
}
.midd_tim_three > .right > .swip_sp > div {
  width: 40px;
  height: 40px;
}

.midd_tim_two > .left {
  position: relative;
  //  background-color: #e1251b;
  text-align: center;
  background-image: url("https://img13.360buyimg.com/imagetools/jfs/t1/179159/2/43444/4097/65d55ce7F9c9cb193/631adf4e860c1010.png");
  background-size: cover;
  // width: 140px;
  margin: 9px;
  width: 70px;
  height: 85px;
}
.midd_tim_two > .left > span {
  display: block;
  font-weight: 400;
  margin-top: 30px;
  font-size: 12px;
  margin-bottom: -10px;
}
.midd_tim_two > .left > p {
  font-weight: 800;
  font-size: 14px;
}
// 计时器数字大小
::v-deep(
    :where(.css-dev-only-do-not-override-1hsjdkk).ant-statistic
      .ant-statistic-content
      .ant-statistic-content-value
  ) {
  font-size: 15px;
  margin-left: 5px;
  font-weight: 600;
}
.midd_tim_two > .left > img {
  position: absolute;
  top: 25px;
  left: 20px;
  width: 24px;
  height: 24px;
}

.midd_tim_two > .right {
  // background-color: yellow;
  // width: 200px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.midd_tim_two > .right > .swip_sp {
  width: 255px;
  display: flex;

  // padding: 0;
}
.midd_tim_two > .right > .swip_sp > div {
  width: 40px;
  height: 40px;
}

.midd_time > .midd_tim_one > div {
  width: 115px;
  height: 80px;
  background-color: powderblue;
  margin: 7px;
  border-radius: 10px;
  cursor: pointer;
}

.midd_time > .midd_tim_one > div > p {
  font-size: 0.8rem;
  margin-top: 0.4rem;
  margin-left: 5px;
}
.midd_time > .midd_tim_one > div > :nth-child(1) {
  font-weight: 600;
}
.midd_time > .midd_tim_one > div > :nth-child(2) {
  font-size: 0.65rem;
  // color: #f5f5f5;
}
.midd_time > .midd_tim_one > div > :nth-child(3) {
  font-size: 0.7rem;
}
.midd_swip > .swip_img > img {
  width: 100%;
  height: 100%;
}
.midd_tab > ul {
  height: 50vh;
  line-height: 5vh;
  list-style: none;
}
.midd_tab > ul > li {
  margin-right: 35px;
  cursor: pointer;
}

.midd_tab > ul > li:hover {
  color: yellow;
}

.midd_tab > ul > li > span {
  margin-right: 40px;
}
.midd_tab > ul > li > div {
  width: 65%;
  height: 60vh;
  position: absolute;
  left: 365px;
  top: 172px;
  display: none;
}

.midd_tab > ul > li:hover > div {
  display: block;
  z-index: 999;
  background-color: white;
  border: 1px solid gray;
}
.top > :nth-child(2) > .nav > ul > li {
  list-style: none;
  float: left;
  padding-left: 0.4rem;
  padding-right: 0.22rem;
  padding-top: 1rem;
}
.top > :nth-child(2) > .nav > ul > li:hover {
  cursor: pointer;
  color: red;
}
.logo {
  background-image: url("https://img10.360buyimg.com/img/jfs/t1/192028/25/33459/5661/63fc2af2F1f6ae1b6/d0e4fdc2f126cbf5.png");
  background-size: cover;
  width: 200px;
  height: 120px;
}
// 第二行
::v-deep(
    .midd_tim_two
      > .right
      > :where(.css-dev-only-do-not-override-1hsjdkk)
      .slick-slider
  ) {
  height: 60px;
  width: 290px;
  //  margin-top: 30px;
  text-align: center;
}
// 第三行
::v-deep(
    .midd_tim_three
      > .right
      > :where(.css-dev-only-do-not-override-1hsjdkk)
      .slick-slider
  ) {
  height: 60px;
  width: 290px;
  //  margin-top: 30px;
  text-align: center;
}

// .midd_tim_three > .right> :deep(.slick-slide) {
//   text-align: center;
//   height:60px;
//   line-height:60px;
//   background: #364d79;
//   overflow: hidden;
// }

.midd_tim_two > .right > :deep(.slick-slide) {
  text-align: center;
  height: 60px;
  line-height: 60px;
  background: #364d79;
  overflow: hidden;
}
[data-v-b4e148ca] .slick-arrow.custom-slick-arrow {
  width: 13px;
}
.midd_tim_two > .right > :deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #ccc;
  background-color: rgba(11, 11, 11, 0.11);
  transition: ease all 0.3s;
  opacity: 0.3;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
// :deep(.slick-arrow.custom-slick-arrow:hover) {
//   color: #fff;
//   opacity: 0.5;
// }

:deep(.slick-slide h3) {
  color: #fff;
}

// 轮播
/* For demo */
.midd_swip > :deep(.slick-slide) {
  text-align: center;
  height: 420px;
  line-height: 420px;
  background: #364d79;
  overflow: hidden;
}

// 设置轮播图图片大小
:where(.css-dev-only-do-not-override-1hsjdkk).ant-carousel .slick-slide img {
  width: 530px;
}

:deep(.slick-arrow.custom-slick-arrow) {
  width: 25px;
  height: 25px;
  font-size: 20px;
  color: gray;
  // background-color: rgba(31, 45, 61, 0.12);
  transition: ease all 0.3s;
  opacity: 0.4;
  z-index: 1;
}
:deep(.slick-arrow.custom-slick-arrow:before) {
  display: none;
}
// :deep(.slick-arrow.custom-slick-arrow:hover) {
//   color: #fff;
//   opacity: 0.5;
// }

:deep(.slick-slide h3) {
  color: #fff;
}
// 回到顶部
.goTop {
  position: fixed;
  display: none;
  width: 50px;
  padding: 5px;
  background-color: #e1251b;
  cursor: pointer;
  top: 500px;
  left: 1400px;
}
.user {
  text-align: center;
  display: flex;
  justify-content: end;
  margin-right: 50px;
  height: 40px;
  line-height: 40px;
  font-size: 20px;
}
</style>
