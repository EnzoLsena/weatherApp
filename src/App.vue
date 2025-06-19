<script setup lang="ts">
import { Toaster } from 'vue-sonner';
import 'vue-sonner/style.css'
</script>

<template>
  <main class="w-full h-217 overflow-y-hidden">
    <Toaster position="top-right" richColors />
    <RouterView />
  </main>
</template>

