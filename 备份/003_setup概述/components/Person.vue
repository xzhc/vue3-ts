<template>
    <div class="person">
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="changeName">修改姓名</button>
        <button @click="changeAge">修改年龄</button>
        <button @click="showTel"> 查看联系方式</button>
    </div>

</template>

<script lang="ts">
export default {
    name: 'Person',

    beforeCreate() {
        console.log('beforeCreate');

    },
    setup() {
        console.log('setup');

        // console.log(this); //setup中无法使用this（this是undefined），vue3中已经弱化this了

        //数据原来是写在data对象中的， 此时name,age, tel都是非响应式
        let name = '张三'
        let age = 18
        let tel = '12345678901'

        //方法
        function changeName() {
            name = '李四' //注意：这样修改name页面是没有变化的
            console.log(name); //name确实改了，但name是非响应式的

        }

        function changeAge() {
            age += 1    //注意：这样修改age页面是没有变化的
            console.log(age);   //age确实改了，但age是非响应式的

        }

        function showTel() {
            alert(tel)
        }
        //将数据方法交出去以后，模板才可以使用
        return { name, age, changeName, changeAge, showTel }
    }
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
</style>