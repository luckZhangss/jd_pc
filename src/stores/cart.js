import { defineStore } from "pinia";

export const userCartStore = defineStore({
  id: "cart",
  state: () => {
    return {
      cartList: [], //购物车数据
      select: [], //商品选中的id
    };
  },
  getters: {
    isChecked() {
      return this.select.length === this.cartList.length;
    },
    // 总价
    total() {
      let total = {
        price: 0,
        number: 0,
      };

      this.cartList.forEach((v) => {
        if (this.select.indexOf(v.id) != -1) {
          total.price += v.num * v.price;
          total.number += Number(this.select.length && v.num);
        }
      });
      return total;
    },
  },
  actions: {
    addCart(list) {
      this.select = [];
      list.forEach((v) => {
        v["check"] = true;
        this.select.push(v.id);
      });
      this.cartList = list;
    },
    // 全选
    all() {
      this.select = this.cartList.map((v) => {
        v["check"] = true;
        return v.id;
      });
    },
    // 全不选
    unAll() {
      this.cartList.forEach((v) => {
        v["check"] = false;
        this.select = [];
      });
    },
    // 单选
    itemChecked(index) {
      // 获取点击商品的id
      let id = this.cartList[index].id;
      // 下标查询该id是否被选中
      let idx = this.select.indexOf(id);

      if (idx > -1) {
        //有
        this.cartList[index].check = false;
        this.select.splice(idx, 1);
      } else {
        // 没有
        this.cartList[index].check = true;
        this.select.push(id);
      }
    },
    // 删除选中商品
   
  },
});
