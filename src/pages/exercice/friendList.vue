<template>
    <div v-for="Amis in lesAmis" style="margin: 20px;">
        <List :id="Amis.id" :name="Amis.name" :phone="Amis.phone" :email="Amis.email" :premium="Amis.premium" />
    </div>
</template>

<script setup>
import List from "./list.vue";
import { ref } from "vue";
const lesAmis = ref([
    {
        id: "lasticot",
        name: "COCO L ASTICOT",
        phone: "01234 5678 991",
        email: "coco@lasticot.com",
        premium: true,
    },
    {
        id: "lasticot2",
        name: "COCO L ASTICOT",
        phone: "01234 5678 991",
        email: "coco@lasticot.com",
        premium: true,
    },
    {
        id: "kimonoSurUnFrigo",
        name: "Steven Seagal",
        phone: "+338765477",
        email: "steven@seagal.com",
        premium: true,
    },
    {
        id: "yoyoyo",
        name: "JAROD",
        phone: "+338765477",
        email: "jAROD@seagal.com",
        premium: true,
    },
]);
</script>
