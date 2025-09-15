<template>
    <div :id="id">
        <h2>{{ name }}</h2>
        <p>{{ phone }}</p>
        <p>{{ email }}</p>
        <p :v-if="premium">Amis premium</p>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps({
    id: String,
    name: String,
    phone: String,
    email: String,
    premium: Boolean,
});
</script>
