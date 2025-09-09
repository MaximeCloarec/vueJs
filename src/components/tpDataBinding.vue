<template>
    <img :src="image" />
    <h3>{{ nom }}</h3>
    <input name="text" type="text"  :value="nom"/>
    <p>{{ age }}</p>
    <p>age + 10 : {{ age + 10 }}</p>
    <p>NB random : {{ random }}</p>
</template>

<script setup>
import { ref } from "vue";

const image = ref(
"https://i.pinimg.com/736x/09/09/f8/0909f88ee2d7ab5c89844e33fb2ccd33.jpg"
);

const nom = "mario";

const age = 45;

const random = Math.random()
</script>

<style scoped>
/* Les styles sont gérés par DaisyUI et Tailwind, donc pas besoin de CSS ici. */
</style>
