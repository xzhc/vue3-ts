<template>
  <div class="talk">
    <button @click="getLoveTalk">获取一句土味情话</button>
    <ul>
      <li v-for="talk in talkStore.talkList" :key="talk.id">{{ talk.title }}</li>
    </ul>
  </div>
</template>
<script setup name="LoveTalk">
import { useTalkStore } from '@/store/loveTalk';
import axios from 'axios';
import { nanoid } from 'nanoid';



const talkStore = useTalkStore()
//数据

//方法
async function getLoveTalk() {
  //发请求，下面的写法是：连续解构赋值+重命名
  let { data: { content: title } } = await axios.get('https://api.uomg.com/api/rand.qinghua?format=json')
  // console.log(result);
  //把请求回来的字符串包装成一个对象
  let obj = { id: nanoid(), title }
  talkStore.talkList.unshift(obj)
}
</script>

<style scoped>
.talk {
  background-color: orange;
  padding: 10px;
  border-radius: 10px;
  box-shadow: 0 0 10px;
}
</style>