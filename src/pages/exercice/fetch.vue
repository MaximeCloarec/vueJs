<template>
    <div class="card bg-base-100 w-96 shadow-sm">
        <div class="card-body">
            <h2 class="card-title">Pokémon</h2>
            <p v-if="pokemon" v-for="pokemonData,index in pokemon.results" :key="index" class="badge badge-secondary">
                {{ pokemonData.name }}
            </p>
            <p v-else>Chargement...</p>
            <h2 class="card-title">Météo</h2>
            <div v-if="meteo">
                <p>Température max : {{ meteo.fcst_day_0.tmax }}°C</p>
                <p>Température min : {{ meteo.fcst_day_0.tmin }}°C</p>
                <p>
                    Température actuelle : {{ meteo.current_condition.tmp }}°C
                </p>
                <p>Condition météo : {{ meteo.current_condition.condition }}</p>
            </div>
            <p v-else>Chargement...</p>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const meteo = ref(null);
const pokemon = ref(null);



onMounted(async () => {
    await fetchMeteo();
    await fetchPokemon();
});

async function fetchMeteo() {
    try {
        const response = await fetch(
            "https://prevision-meteo.ch/services/json/toulouse"
        );
        const data = await response.json();
        meteo.value = data;
    } catch (error) {
        console.error("Erreur lors de la récupération météo:", error);
    }
}

async function fetchPokemon() {
    try {
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
        const data = await response.json();
        pokemon.value = data;
    } catch (error) {
        console.error("Erreur lors de la récupération pokémon:", error);
    }
}
</script>
