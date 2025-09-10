<template>
    <p>{{ count }}</p>
    <button class="btn" @click="increment">CLIQUEZ</button>
</template>

<script setup>
import { ref, watch } from "vue";

const count = ref(0);

const increment = () => {
    count.value++;
};

watch(count, (newValue) => {
    if (newValue === 7) {
        count.value = 0;
    }
});
</script>
