<template>
    <div :id="id">
        <h2>{{ name }}</h2>
        <p>{{ phone }}</p>
        <p>{{ email }}</p>
        <p v-if="premium == true">Amis premium</p>
        <p v-else>AMIS DE MERDE</p>
        <button class="btn btn-error" @click="suppr">SUPPRIMER</button>
        <button class="btn" @click="changement">INVERSATION</button>
    </div>
</template>

<script setup>
import { defineProps } from "vue";

const emit = defineEmits(["supprimer", "changement"]);

const props = defineProps({
    id: String,
    name: String,
    phone: String,
    email: String,
    premium: Boolean,
});

function suppr() {
    emit("supprimer", props.id);
}

function changement() {
    emit("changement", props.id);
}
</script>
