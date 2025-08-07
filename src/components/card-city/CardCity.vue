<script lang="ts" setup>
import { computed, ref } from 'vue';

const props = defineProps({
    places: Object
});

const temperature = computed(() => {
    return props.places && props.places.temp !== undefined
    ? `Temperatura: ${Math.trunc(props.places.temp)}°C `
    : "Temperatura: --°C";
});
</script>
<template>
  <div class="w-full h-screen flex justify-center items-start mt-[4rem]">
    <Card
      class="md:w-[25rem] xl:w-[25rem] max-sm:w-[22rem] overflow-hidden border-solid border-primary border-2 shadow-lg m-4"
    >
      <template #header>
        <div class="flex justify-between items-center px-5">
          <h1 class="text-2xl font-bold">
            {{ `${props.places?.name} - ${props.places?.country}` }}
          </h1>
          <img
            v-if="props.places?.weather === 'Clear'"
            alt="user header"
            width="50"
            src="/src/assets/images/clear-sky.png"
          />
          <img
            v-if="props.places?.weather === 'Rain'"
            alt="user header"
            src="/src/assets/images/rainy-day.png"
          />
          <img
            v-if="props.places?.weather === 'Clouds'"
            alt="user header"
            width="60"
            src="/src/assets/images/cloud.png"
          />
        </div>
      </template>
      <template #title>
        <h1 class="text-2xl font-bold">
          {{ temperature }}
        </h1>
      </template>
      <template #content>
        <p class="m-0">
          {{
            props.places?.description
              ? `Descrição: ${props.places.description}`
              : "Descrição: --"
          }}
        </p>
        <p class="m-0">
          {{
            props.places?.humidity
              ? `humidade do ar: ${props.places.humidity}`
              : "humidade do ar: --"
          }}
        </p>
        <p class="m-0">
          {{ props.places?.pressure ? `Pressão: ${props.places.pressure}` : "Pressão: --" }}
        </p>
      </template>
    </Card>
  </div>
</template>
