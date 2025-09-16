<template>
    <fieldset
        class="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4"
    >
        <label class="label">Name</label>
        <input
            type="text"
            name="name"
            id=""
            class="input"
            required
            v-model="name"
        />
        <label class="label">Tel</label>
        <input
            type="text"
            name="Tel"
            id=""
            class="input"
            required
            v-model="tel"
        />
        <label class="label">Email</label>
        <input
            type="text"
            name="Email"
            id=""
            class="input"
            required
            v-model="email"
        />
        <button class="btn btn-primary" @click="send()">Créer un ami</button>
    </fieldset>
</template>

<script setup>
import { ref, defineEmits } from "vue";

const emit = defineEmits(["newFriend"]);

const name = ref("");
const tel = ref("");
const email = ref("");

function send() {
    emit("newFriend", {
        name: name.value,
        phone: tel.value,
        email: email.value,
        premium: false, 
        id: Date.now().toString(), 
    });
}
</script>
