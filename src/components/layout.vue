<script setup lang="ts">
import { RouterView } from 'vue-router'
import navBar from './navBar.vue'
</script>
<template>
    <header>
        <navBar />
    </header>
    <main class="w-full h-full bg-secondary">
        <div class="container mx-auto p-4">
            <RouterView />
        </div>
    </main>
</template>