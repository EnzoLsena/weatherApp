<script setup>
import { ref } from "vue";
import Select from 'primevue/select';
const selectedCity = ref();
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
</script>
<template lang="">
    <div class="w-full bg-primary z-10 top-0 p-[1rem] flex justify-between">
        <div class="text-white text-2xl font-bold">
            <img class="cursor-pointer"
                src="@/assets/cloudy.png"
                alt="Logo"
                width="40"
                height="40">
        </div>
        <div>
            <div class="card flex justify-center">
        <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Selecione uma cidade" class="w-full md:w-56" />
    </div>
        </div>    
</div>
</template>
