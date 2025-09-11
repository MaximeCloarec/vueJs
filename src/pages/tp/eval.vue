<template>
    <div>
        <input type="text" v-model="style" />
        <h2
            :class="{
                hidden: existe,
                maClassHello: style === 'helllo',
                maClassWorld: style === 'world',
            }"
        >
            HELLO WORLD
        </h2>
    </div>
    <div>
        <input type="text" v-model="color" />
        <h2 :style="{ backgroundColor: color }">HELLLLL COLOR</h2>
    </div>
    <div>
        <button class="btn" @click="existe = !existe">CLIQUE MOI</button>
    </div>
</template>

<script setup>
import { ref } from "vue";

let existe = ref(false);
let style = ref("");
let color = ref("");
</script>

<style>
.maClassHello {
    background-color: red;
}

.maClassWorld {
    background-color: green;
}
</style>
