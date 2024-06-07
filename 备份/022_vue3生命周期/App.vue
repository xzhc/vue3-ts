<template>
    <!-- html-->
    <Person v-if="isShow" />

</template>

<script lang="ts" setup name="App">
// js or ts 
import { onMounted, ref } from 'vue';
import Person from './components/Person.vue'

let isShow = ref(true)

//挂载
onMounted(() => {
    console.log('父--挂载完毕');
})

</script>
