<template>
    <p>{{ text }}</p>
    <button @click="random()" class="btn">Reload</button>
</template>

<script setup lang="js">

import { ref } from 'vue'

let text = ref("")

function random(){
    if(Math.random()>0.5){
        text.value = "livre boba fett"
    }else{
        text.value = "livre de la jungle"
    }
}
</script>

<style scoped></style>
