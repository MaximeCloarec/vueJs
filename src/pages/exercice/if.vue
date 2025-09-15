<template>
    <div class="container mx-auto p-4">
        <div class="card shadow-lg p-6 bg-base-100">
            <h2 class="text-2xl font-bold mb-4">
                WatchList 🎬 (Films à voir) - Mode : Composition
            </h2>

            <input
                type="text"
                placeholder="Entrez le nom d'un film"
                class="input input-bordered w-full mb-3"
                v-model="film"
            />

            <button @click="tableau.push(film)" class="btn btn-primary mb-4">
                Ajouter à votre Liste
            </button>

            <hr class="my-4" />

            <div>
                <h3 class="text-xl font-semibold mb-2">Votre film ajouté :</h3>
            </div>

            <p
                v-if="tableau.length"
                class="text-gray-500"
                v-for="(film, index) in tableau" :key="tableau.index"
                @click="tableau.splice(index,1)"
            >
                {{ `${index} ${film}` }}
            </p>

            <p v-else class="text-gray-500">
                Pas encore de films dans votre liste ? Veuillez en ajouter un.
            </p>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const tableau = ref([]);
const film = ref("");
</script>
