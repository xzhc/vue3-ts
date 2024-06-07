import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";

// export const useTalkStore = defineStore("talk", {
//   actions: {
//     async getATalk() {
//       //发请求，下面的写法是：连续解构赋值+重命名
//       let {
//         data: { content: title },
//       } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
//       // console.log(result);
//       //把请求回来的字符串包装成一个对象
//       let obj = { id: nanoid(), title };
//       this.talkList.unshift(obj);
//     },
//   },
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem("talkList") as string) || [],
//     };
//   },
// });
export const useTalkStore = defineStore("talk", () => {
  //talkList就是state
  const talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );
  //getATalk函数相当于action
  async function getATalk() {
    //发请求，下面的写法是：连续解构赋值+重命名
    let {
      data: { content: title },
    } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");

    //把请求回来的字符串包装成一个对象
    let obj = { id: nanoid(), title };
    talkList.unshift(obj);
  }

  return { talkList, getATalk };
});
