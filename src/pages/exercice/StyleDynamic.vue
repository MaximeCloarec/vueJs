<template>
    <div>
        <div
            class="card w-96 shadow-sm"
            :class="{ 'bg-green-500': isActive }"
            @click="isActive = !isActive"
        >
            <div class="card-body">
                <h2 class="card-title">Card Title</h2>
                <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                </p>
            </div>
        </div>
        <div class="card bg-base-100 w-96 shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Card Title</h2>
                <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                </p>
            </div>
        </div>
    </div>
    <div>
        <div
            class="card w-96 shadow-sm"
            :style="{ backgroundColor: other }"
            @click="other = other === 'green' ? 'red' : 'green'"
        >
            <div class="card-body">
                <h2 class="card-title">Card Title</h2>
                <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                </p>
            </div>
        </div>
        <div class="card bg-base-100 w-96 shadow-sm">
            <div class="card-body">
                <h2 class="card-title">Card Title</h2>
                <p>
                    A card component has a figure, a body part, and inside body
                    there are title and actions parts
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";

const isActive = ref(true);
const other = ref("red");
</script>

<style></style>
