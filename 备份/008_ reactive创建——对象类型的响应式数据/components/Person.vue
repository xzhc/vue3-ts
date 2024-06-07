<template>
    <div class="person">
        <h2>汽车信息：一辆{{ car.brand }}车,价值{{ car.price }}万</h2>
        <button @click="changePrice">修改汽车的价格</button>
        <h2>游戏列表：</h2>
        <ul>
            <li v-for="game in games" :key="game.id">{{ game.name }}</li>
        </ul>
        <button @click="changeFirstName">修改第一个游戏名字</button>
        <hr>
        <h2>测试{{ obj.a.b.c }}</h2>
        <button @click="changeObj">修改obj.a.b.c的值</button>
    </div>

</template>

<!-- <script lang="ts">
export default {
    name: 'Person',

}
</script> -->

<script lang="ts" setup name="Person">
import { reactive } from 'vue'
//数据
let car = reactive({
    brand: "奔驰",
    price: 100
})
let games = reactive([
    { id: 1, name: "LOL" },
    { id: 2, name: "CSGO" },
    { id: 3, name: "DOTA2" }
])

let obj = reactive({
    a: {
        b: {
            c: 666
        }
    }
})

console.log(car);
console.log(games);





//方法
function changePrice() {
    car.price += 10
    console.log(car.price);

}

function changeFirstName() {
    games[0].name = "LOL2"
    console.log(games[0].name);


}

function changeObj() {
    obj.a.b.c = 999
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