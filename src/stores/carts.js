import { defineStore } from "pinia";

export const userCartsStore = defineStore({
  id: "carts",
  
  state: () => {
    return {
      shop:[],
    //   cartList: [], //购物车数据
      select: [], //商品选中的id
    };
  },
  persist: true,
  getters: {
    isChecked() {
      return this.select.length === this.shop.length;
    },
    // 总价
    total() {
      let total = {
        price: 0,
        number: 0,
      };

      this.shop.forEach((v) => {
        if (this.select.indexOf(v.id) != -1) {
          total.price += v.num * v.price;
          total.number += Number(this.select.length && v.num);
        }
      });
      return total;
    },
  },
  actions: {
    addShop(shops){
      this.shop.push(shops)
    },

    addItemToArray(shops){
      if(!this.shop.includes(shops)){
        this.shop.push(shops)
      }
    },


    addCart(list) {
      this.select = [];
      list.forEach((v) => {
        v["check"] = false;
        this.select.push(v.id);
      });
      this.shop = list;
    },
    // 全选
    all() {
      this.select = this.shop.map((v) => {
        v["check"] = true;
        return v.id;
      });
    },
    // 全不选
    unAll() {
      this.shop.forEach((v) => {
        v["check"] = false;
        this.select = [];
      });
    },
    // 单选
    itemChecked(index) {
      // 获取点击商品的id
      let id = this.shop[index].id;
      // 下标查询该id是否被选中
      let idx = this.select.indexOf(id);

      if (idx > -1) {
        //有
        this.shop[index].check = false;
        this.select.splice(idx, 1);
      } else {
        // 没有
        this.shop[index].check = true;
        this.select.push(id);
      }
    },
    // 删除选中商品
   
  },
});
