import { defineStore } from "pinia";
//真正存储数据的地方
export const useCountStore = defineStore("count", {
  state() {
    return {
      sum: 6,
    };
  },
});
