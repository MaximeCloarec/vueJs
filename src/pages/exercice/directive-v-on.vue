<template>
    <button class="btn btn-warning" @click="diminuer">-</button>
    <p>Le nombre : {{ nombre }}</p>
    <button class="btn btn-success" @click.middle="augmenter">+</button>
</template>

<script setup lang="js">
import { ref } from 'vue';

let nombre = ref(0)

function augmenter(){
    nombre.value +=5
}

function diminuer(){
    nombre.value -= 11
}
</script>

<style lang="css"></style>
