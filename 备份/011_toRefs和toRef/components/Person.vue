<template>
    <div class="person">
        <h2>姓名:{{ name }}</h2>
        <h2>年龄:{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
    </div>

</template>

<!-- <script lang="ts">
export default {
    name: 'Person',

}
</script> -->

<script lang="ts" setup name="Person">
import { reactive, toRef, toRefs } from 'vue'
//数据
let person = reactive({
    name: '张三',
    age: 18
})

let { name, age } = toRefs(person)
let nl = toRef(person, 'age')
console.log(nl.value);


//方法
function changeName() {
    name.value += '~'
    console.log(name.value, person.name);
}
function changeAge() {
    age.value += 1
}


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