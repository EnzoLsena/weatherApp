<script setup lang="ts">
import { RouterView } from 'vue-router';
import { ref, onMounted } from 'vue';
const cidade = ref('Aracaju, SE');

</script>

<template>
<main class="w-full h-full bg-secondary">
    <Card class="container mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-6 text-black">Temperatura Atual</h1>
        <p class="text-lg text-center">{{ cidade }}</p>
    </Card>
</main>    
</template>
