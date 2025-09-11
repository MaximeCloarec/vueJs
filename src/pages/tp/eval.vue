<template>
    <div>
        <input type="text" v-model="style" />
        <h2
            :class="{
                maClassHello: style === 'helllo',
                maClassWorld: style === 'world',
            }"
        >
            HELLO WORLD
        </h2>
    </div>
    <div>
        <input type="text" v-model="color" />
        <h2 :style="{backgroundColor: color}">HELLLLL COLOR</h2>
    </div>
</template>

<script setup>
import { ref } from "vue";

let style = ref("");
let color = ref("")

</script>

<style>
.maClassHello {
    background-color: red;
}

.maClassWorld {
    background-color: green;
}
</style>
