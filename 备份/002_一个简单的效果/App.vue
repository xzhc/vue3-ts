<template>
    <!-- html-->
    <div class="app">
        <h1>你好啊</h1>
        <Person></Person>
    </div>
</template>

<script lang="ts">
// js or ts 
import Person from './components/Person.vue'
export default {

    name: 'App', //组件名
    components: {
        Person //注册组件
    }
} 
</script>

<style>
/* 样式 */
.app {
    background-color: #ddd;
    box-shadow: 0 0 10px;
    border-radius: 10px;
    padding: 20px;
}
</style>
