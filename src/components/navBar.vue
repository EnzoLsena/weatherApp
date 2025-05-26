<script setup>
import { ref } from "vue";
import MultiSelect from 'primevue/multiselect';
const selectedCities = ref();
const cities = ref([
{name: 'Nova York', code: 'NY' },
{name: 'Roma', code: 'RM' },
{name: 'Londres', code: 'LDN' },
{name: 'Istanbul', code: 'IST' },
{name: 'Paris', code: 'PRS' }
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
            <MultiSelect v-model="selectedCities" :options="cities" optionLabel="name" filter placeholder="Selecione uma cidade"
            :maxSelectedLabels="3" class="w-full md:w-80 bg-secondary " />
        </div>    
</div>
</template>
