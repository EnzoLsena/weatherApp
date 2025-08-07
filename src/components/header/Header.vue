<script setup lang="ts">
import { ref } from 'vue';
import { cities } from './constants';
const selectedCity = ref("");
const emit = defineEmits(['updateCity'])
const submitCitySelected = (city: string) => {
    selectedCity.value = city;
    emit('updateCity', selectedCity.value);
}
</script>
<template>
  <div
    class="lg:w-full md:w-[60rem] sm:w-[4rem] bg-primary z-10 top-0 p-[1rem] flex justify-between"
  >
    <div class="sm:w-[1rem] md:w-[4rem] lg:w-[5rem]">
      <img
        class="cursor-pointer"
        src="@/assets/images/cloudy.png"
        alt="Logo"
        width="40"
        height="40"
      />
    </div>
    <div class="hidden max-sm:flex items-center gap-2">
      <h1 class="text-2xl font-bold text-white">Front-Enzo</h1>
    </div>
    <div class="hidden sm:flex justify-between gap-4">
      <Select
        class="w-full md:w-56 border-2 border-solid border-blue-600"
        v-model="selectedCity"
        :options="cities"
        optionLabel="name"
        @update:modelValue="(city) => submitCitySelected(city.name)"
        placeholder="Selecione uma cidade"
      />
    </div>
  </div>
</template>
