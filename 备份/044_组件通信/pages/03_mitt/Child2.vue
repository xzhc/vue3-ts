<template>
  <div class="child2">
    <h3>子组件2</h3>
    <h4>电脑: {{ computer }}</h4>
    <h4 v-show="toy">哥哥给的玩具:{{ toy }}</h4>
  </div>
</template>

<script setup lang="ts" name="Child2">
import emiter from '@/utils/emitter';
import { ref } from 'vue';

//数据
let computer = ref('联想')
let toy = ref('')

//给emitter绑定send-toy事件
emiter.on('send-toy', (value: any) => {
  toy.value = value
})
</script>
<style scoped>
.child1 {
  margin-top: 50px;
  background-color: skyblue;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}

.child1 button {
  margin-right: 10px;
}
</style>

<style scoped>
.child2 {
  margin-top: 50px;
  background-color: orange;
  padding: 10px;
  box-shadow: 0 0 10px black;
  border-radius: 10px;
}
</style>