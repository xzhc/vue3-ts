import axios from "axios";
import { onMounted, reactive } from "vue";

export default function () {
  //https://dog.ceo/api/breed/pembroke/images/random

  //数据
  let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_14516.jpg",
  ]);
  //方法
  async function getDog() {
    try {
      let result = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      // console.log(result.data.message);
      dogList.push(result.data.message);
    } catch (error) {
      alert(error);
    }
  }
  //钩子
  onMounted(() => {
    getDog();
  });
  //向外部提供东西
  return { dogList, getDog };
}
