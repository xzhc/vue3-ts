<template>
  <div class="app">
    <h2>姓名：{{ rawPerson.name }}</h2>
    <h2>年龄：{{ rawPerson.age }}</h2>
    <button @click="rawPerson.age += 1">修改年龄</button>

  </div>
</template>

<script setup lang="ts" name="App">
import { markRaw, reactive, toRaw } from 'vue';

import mockjs from 'mockjs'
/* toRaw */
let person = reactive({
  name: 'tony',
  age: 18
})
//用于获取一个响应式对象的原始对象
let rawPerson = toRaw(person)
console.log('响应式数据', person);
console.log('原始数据', rawPerson);

/*markRaw */

let car = markRaw({ brand: '奔驰', price: 100 })
let car2 = reactive(car)
console.log(car);
console.log(car2);

let mockJs = markRaw(mockjs)
console.log(mockJs);



</script>

<style scoped>
.app {
  background-color: #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px;
  padding: 10px;
}

button {
  margin: 0 5px;
}
</style>