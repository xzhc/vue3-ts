import { defineStore } from "pinia";

export const useCountStore = defineStore("count", {
  // actions里面放置的是一个一个的方法，用于响应组件中的“动作”
  actions: {
    increment(value: number) {
      // 在action中使用store.$onAction()观察actions的执行
      // debugger;
      console.log("increment被调用了", value);

      console.log(this);

      if (this.sum < 10) {
        // 修改数据（this是当前的store）
        this.sum += value;
      }
    },
  },
  // 真正存储数据的地方
  state() {
    return {
      sum: 1,
      school: "atguigu",
      address: "宏福科技园",
    };
  },
});
