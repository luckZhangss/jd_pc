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
            <li v-for="item in items">{{ item.message }}</li>
          </ul>
        </div>
      </div>
      <!-- 购物车 -->
      <div
        style="
          border: solid 1px;
          margin-left: 60px;
          padding: 6px;
          cursor: pointer;
        "
      >
        <a-badge count="0" show-zero>
          <a-avatar shape="square" size="large"><HeartTwoTone /></a-avatar>
        </a-badge>
        <a style="text-decoration: none;color: black;" href="./shopCard">我的购物车</a>
      </div>
    </div>
    <!-- 中 -->
    <div class="middle">
      <!-- tab栏 -->

      <div class="midd_tab">
        <ul>
          <li v-for="item in tabList">
            {{ item.tabMessage }}
            <!-- <span>家用电器</span> -->
            <div class="p1">{{ item.text }}</div>
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
          <div class="swip_img" v-for="(item, index) in middSwip" :key="index">
            <img :src="item.url" />
          </div>
        </a-carousel>
      </div>
      <!-- 京东秒杀 -->
      <div class="midd_time">
        <!-- 第一层 -->

        <div class="midd_tim_one">
          <div>
            <img
              src="https://img14.360buyimg.com/imagetools/jfs/t1/66037/3/24346/9414/64b11b21F51d90361/8f015973cbb7de8d.png"
              alt=""
            />
            <p><a href="/login">登录 注册</a></p>
          </div>
          <div>
            <img
              src="https://img14.360buyimg.com/imagetools/jfs/t1/66037/3/24346/9414/64b11b21F51d90361/8f015973cbb7de8d.png"
              alt=""
            />
            <p>登录 注册</p>
          </div>
          <div>
            <img
              src="https://img14.360buyimg.com/imagetools/jfs/t1/66037/3/24346/9414/64b11b21F51d90361/8f015973cbb7de8d.png"
              alt=""
            />
            <p>登录 注册</p>
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
            <a-carousel arrows >
              <template #prevArrow >
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
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img10.360buyimg.com/seckillcms/s280x280_jfs/t1/135839/17/30155/28012/633e7f90E07895bc9/48a298ac513ab3fd.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img12.360buyimg.com/seckillcms/s280x280_jfs/t1/178006/24/43021/97592/65ee9ae4F2677705b/123d2fb20bc0da36.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img12.360buyimg.com/seckillcms/s280x280_jfs/t20270324/242214/11/6337/12383/66003e2fFdc857e49/06b9a02d3c88438e.png.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>
                </div>
              </div>
              <!-- 第二页 -->
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>
                </div>
              </div>
              <!-- 第三页 -->
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
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
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>18</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>18</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>18</p>
                  </div>
                </div>
              </div>
              <!-- 第二页 -->
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>
                </div>
              </div>
              <!-- 第三页 -->
              <div>
                <div
                  style="
                    display: flex;
                    justify-content: space-around;
                    flex-direction: row;
                  "
                >
                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>

                  <div>
                    <img
                      style="width: 40px; height: 40px"
                      src="https://img11.360buyimg.com/seckillcms/s280x280_jfs/t1/157758/29/44673/108448/6608c238F44d693c9/2916c45e7aa37c00.jpg.avif"
                      alt=""
                    />
                    <p>19</p>
                  </div>
                </div>
              </div>
            </a-carousel>
          </div>
        </div>
        <!-- 四层 -->
        <div class="midd_tim_four">
          <div>
            <div v-for="item in fourInfo" :key="item">
              <img :src="item.url" alt="" />
              <p>{{ item.p }}</p>
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
        <div v-for="item in likeInfo" :key="item">
          <div>
            <span>{{ item.span }}</span>
            <p>{{ item.p }}</p>
          </div>
        </div>
      </div>
    </div>
    <!-- 商品 -->
    <div class="shop">
      <div v-for="item in shopPic" :key="item">
        <img :src="item.url" />
        <p>{{ item.text }}</p>
      </div>
    </div>
    <!-- 下 -->
  </div>
</template>

<script lang="ts" setup>
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  HeartTwoTone,
} from "@ant-design/icons-vue";

import { reactive, ref } from "vue";
const value = ref<string>("");
// nav
const items = ref([
  {
    message: "电脑数码",
  },
  {
    message: "京东手机",
  },
  {
    message: "拍卖",
  },
  {
    message: "京东家电",
  },
  {
    message: "京东超市",
  },
  {
    message: "京东生鲜",
  },
  {
    message: "大牌奥莱",
  },
  {
    message: "京东五金城",
  },
  {
    message: "进口好物",
  },
]);
// tab
const tabList = ref([
  {
    tabMessage: "家用电器",
    text: "ssssssssss",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "sssssssppppppsss",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "qwqqqqqqqq",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "kkkkkkkkkkkkkkkkkkk",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "vvvvvvvvvvvvvvvvv",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "mmmmmmmmmmmmmm",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "mmmmmmmmmmmmmm7",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "mmmmmmmmmmmmmm6",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "mmmmmmmmmmmmmm5",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "mmmmmmmmmmmmmm4",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "mmmmmmmmmmmmmm2",
  },
  {
    tabMessage: "手机/运营商/电脑",
    text: "mmmmmmmmmmmmmm4",
  },
]);
// 轮播图
const middSwip = ref([
  {
    url: "https://imgcps.jd.com/img-cubic/creative_server_cia_jdcloud/v2/2000322/10066754549304/FocusFullshop/CkJqZnMvdDEvMjA3MTEwLzYvNDA4MDEvMTU0MzIvNjVmYjM5NDFGNDQ1ZWE5ZTkvMmVkZTRjYWNkMWQ2MzY2OS5wbmcSCTQtdHlfMF81NTABOMKLekIYChLmtbfph4_lsJbotKfmnaXooq0QARgBQhYKEueyvuW9qeS4jeWuuemUmei_hxACQhAKDOeri-WNs-aKoui0rRAGQgoKBuS8mOmAiRAHWLjs0Mr9pAI/cr/s/q.jpg",
  },
  {
    url: "https://img10.360buyimg.com/pop/s1180x940_jfs/t1/226091/13/8500/93547/658d3b59F01b1f7ac/e835e81062f5ca73.jpg.avif",
  },
  {
    url: "https://imgcps.jd.com/ling-cubic/ling4/lab/amZzL3QxLzEyNjU0OS8xMS8zODEyMi80MTU3MTcvNjRlYzY2YmVGNTIzNjYxMGUvMTI5NTM1MDFiMDI3ZWM2NC5wbmc/5Lqs6YCJ5aW96LSn/5L2g5YC85b6X5oul5pyJ/1635185254164787202/cr/s/q.jpg",
  },
]);
// 商品图片
const shopPic = reactive([
  {
    url: "https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/162433/11/38114/159740/64a69427F33674f32/cf5fdb3c22954604.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img13.360buyimg.com/jdcms/s460x460_jfs/t1/225127/26/8803/116317/657d61f0F56490429/b09afd6dc6143e84.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img10.360buyimg.com/jdcms/s460x460_jfs/t1/110125/28/22518/94297/65ed47c2Fe58760ff/9203ee2e2cc7d450.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img11.360buyimg.com/jdcms/s460x460_jfs/t1/179539/28/44085/129038/65f4507aF1cffde29/1e1470135b2613bd.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img12.360buyimg.com/jdcms/s460x460_jfs/t1/194275/34/43184/134425/660bce55F8a1de97d/7cb13fa4565053fb.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img11.360buyimg.com/jdcms/s460x460_jfs/t1/164665/3/42710/130725/65d5c305F9a18fbf0/95459bf051c0068f.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img14.360buyimg.com/jdcms/s460x460_jfs/t1/225170/30/14905/159135/660c2897F13abe5fb/31e5c8eb6e2dc982.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/249097/18/46/109922/65840c3dFe9712f07/d38ea759597ad3b9.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img10.360buyimg.com/jdcms/s460x460_jfs/t1/8971/31/22569/86417/651269feF8e7f35b8/83d1381a43659f29.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img11.360buyimg.com/jdcms/s460x460_jfs/t1/107419/4/42512/134158/65f39e74Ffe3a44ee/61119ef740055e89.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },

  {
    url: "https://img11.360buyimg.com/jdcms/s460x460_jfs/t1/164665/3/42710/130725/65d5c305F9a18fbf0/95459bf051c0068f.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img14.360buyimg.com/jdcms/s460x460_jfs/t1/225170/30/14905/159135/660c2897F13abe5fb/31e5c8eb6e2dc982.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img30.360buyimg.com/jdcms/s460x460_jfs/t1/249097/18/46/109922/65840c3dFe9712f07/d38ea759597ad3b9.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img10.360buyimg.com/jdcms/s460x460_jfs/t1/8971/31/22569/86417/651269feF8e7f35b8/83d1381a43659f29.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
  {
    url: "https://img11.360buyimg.com/jdcms/s460x460_jfs/t1/107419/4/42512/134158/65f39e74Ffe3a44ee/61119ef740055e89.jpg.avif",
    text: "尚明钛焖茶杯闷杯泡茶杯家用办公保温杯大容量陶瓷涂层内胆车载杯 橙色 400ml",
  },
]);
const onSearch = (searchValue: string) => {
  console.log("use value", searchValue);
  console.log("or use this.value", value.value);
};
// 猜你喜欢
const likeInfo = ref([
  {
    span: "精选",
    p: "猜你喜欢",
  },
  {
    span: "智能先锋",
    p: "大电器城",
  },
  {
    span: "居家优品",
    p: "品质生活",
  },
  {
    span: "超市百货",
    p: "百货生鲜",
  },
  {
    span: "时尚达人",
    p: "美妆穿搭",
  },
  {
    span: "进口好物",
    p: "京东国际",
  },
]);

// middle_tim_four 第四层
const fourInfo = ref([
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/105718/32/47548/4135/6601555fFdbb76302/ce8e1355e08435d0.png",
    p: "礼品卡",
  },
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/245377/11/6502/4819/66015572F6a2bfe2e/4ea919942857b414.png",
    p: "礼品卡",
  },
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/235866/12/13511/4965/6601558bFea6e3da9/eef2630c4a64e1c9.png",
    p: "话费",
  },
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/244809/25/6038/6141/66015785F20dc859f/5a558f1115431306.png",
    p: "游戏",
  },
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/238494/28/6797/4809/660157afFfc6d74bd/46cdd6392cafe0f0.png",
    p: "酒店",
  },
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/60865/19/20309/4778/660157d4F65db1655/b869b66cd4a18079.png",
    p: "云建站",
  },
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/189590/5/43143/7643/660157ebF638a43d9/b2843ee17c84c1b4.png",
    p: "五金城",
  },
  {
    url: "https://m.360buyimg.com/babel/jfs/t1/204343/6/40409/5370/66015823Fe443972a/bebfba4042fbaef5.png",
    p: "PLUS会员",
  },
]);
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
a{
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
  height: 40vh;
  margin: 5px 6px;
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
  justify-content: space-around;
  background-color: #fff;
  height: 14vh;
  text-align: center;
  align-items: center;
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
  margin: 6px;
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
  margin: 6px;
}
.midd_tim_two > .left > span {
  display: block;
  font-weight: 800;
  margin-top: 30px;
  font-size: 12px;
  margin-bottom: -10px;
}
.midd_tim_two > .left > p {
  font-weight: 800;
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

.midd_time > .midd_tim_one > div > img {
  width: 28px;
  height: 28px;
}
.midd_time > .midd_tim_one > div > p {
  font-size: 0.6rem;
  // text-align: center;
  margin-top: 0.4rem;
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
  left: 360px;
  top: 130px;
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
  width: 540px;
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
</style>
