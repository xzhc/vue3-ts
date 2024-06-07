<template>
    <div class="person">
        <h1>情况三：监视【reactive】的【对象类型】数据</h1>
        <h2>姓名：{{ person.name }}</h2>
        <h2>年龄： {{ person.age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="changePerson">修改整个人</button>
        <hr>
        <h2>测试：{{ obj.a.b.c }}</h2>
        <button @click="test">修改obj.a.b.c</button>
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
import { reactive, watch } from 'vue'

//数据
let person = reactive({
    name: '张三',
    age: 18
})

let obj = reactive({
    a: {
        b: {
            c: 10
        }
    }
})

//方法
function changeName() {
    person.name += '~'
}
function changeAge() {
    person.age += 1
}



function changePerson() {
    Object.assign(person, { name: 'lisi', age: 19 })
}

function test() {
    obj.a.b.c = 666
}

//监视 情况三：【reactive】监视的【对象类型】数据，默认开启深度监视,且不可关闭
//watch的第一个参数：被监视的数据
//watch的第二个参数：监视的回调函数
//watch的第三个参数：配置对象（deep, immediate）
watch(person, (newValue, oldValue) => {
    console.log('person变化了', newValue, oldValue);

})

watch(obj, (newValue, oldValue) => {
    console.log('obj变化了', newValue, oldValue);
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