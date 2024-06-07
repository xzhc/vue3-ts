<template>
    <div class="person">
        <h1>情况二：监视【ref】的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄： {{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>

    </div>

</template>
<!-- vue2中写watch-->
<!-- <script lang="ts">
    export default {
        watch: {

        }
    }
</script> -->

<script lang="ts" setup name="Person">
import { ref, watch } from 'vue'

//数据
let person = ref({
    name: '张三',
    age: 18
})

//方法
function changeName() {
    person.value.name += '~'
}
function changeAge() {
    person.value.age += 1
}


function changePerson() {
    person.value = { name: 'lisi', age: 19 }
}

//监视 情况二：【ref】监视的【对象类型】数据，监视的是对象的地址值，若想监视对象内部属性的变化，需要手动开启深度监视
//watch的第一个参数：被监视的数据
//watch的第二个参数：监视的回调函数
//watch的第三个参数：配置对象（deep, immediate）


watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue);

}, {
    deep: true, //immediate: true
})



</script>

<style scoped>
.person {
    background-color: skyblue;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}

button {
    margin: 0 5px;
}

li {
    font-size: 20px;
}
</style>