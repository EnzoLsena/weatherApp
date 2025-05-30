<script setup lang="ts">
import layout from './components/layout.vue';
  import 'vue-sonner/style.css'
  import { Toaster } from 'vue-sonner'
</script>

<template>
  <layout>
    <Toaster />
    <router-view />
  </layout>
</template>

