<script setup lang="ts">
import { RouterView } from 'vue-router'
import navBar from './navBar.vue'
</script>
<template>
    <header>
        <navBar />
    </header>
    <main class="w-full h-217 overflow-y-hidden">
        <RouterView />
    </main>
</template>