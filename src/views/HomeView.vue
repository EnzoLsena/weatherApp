<script setup lang="ts">
import { toast } from "vue-sonner"
import { ref, onMounted, computed, watch } from 'vue';
import Weather from "@/services/service-weather"
import type {Place} from "@/@types/place";

const city = ref("Paris")
const places = ref<Place>();
const selectedCity = ref();
const cities = ref([
  { name: "Paris" },
  { name: "Rio de Janeiro" },
  { name: "Aracaju" },
  { name: "Gramado" },
  { name: "New York" },
  { name: "Tokyo" },
  { name: "London" },
  { name: "Berlin" },
  { name: "Salvador" },
  { name: "Buenos Aires" },
  { name: "Seoul" },
  { name: "Bangkok" },
  { name: "Los Angeles" },
  { name: "Toronto" },
  { name: "Dubai" },
  { name: "Singapore" },
  { name: "Madrid" },
  { name: "Rome" },
  { name: "Amsterdam" },
  { name: "Lisbon" },
])
  
const getWeatherData = async () => {
    try {
        const { data } = await Weather.getTemperature(city.value);
        places.value = {
            name: data.name,
            country: data.sys.country,
            temp: data.main?.temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            weather: data.weather[0].main,
            description: data.weather[0].description,
        }
    } catch (error) {
        toast.error('Erro ao buscar dados do tempo');
    }
}
    
const temperature = computed(() => {
    return places.value && places.value.temp !== undefined
    ? `Temperatura: ${Math.trunc(places.value.temp)}°C `
    : "Temperatura: --°C";
});

watch(selectedCity, (newCity) => {
    city.value = newCity.name;
   
})
    
const handleSearch = () => {
    getWeatherData();
    toast.success('Dados do tempo atualizados com sucesso!')
}
onMounted(() => {
    getWeatherData();
})
</script>

<template>
    <div class="lg:w-full md:w-[60rem] sm:w-[4rem] bg-primary z-10 top-0 p-[1rem] flex justify-between">
        <div class="sm:w-[1rem] md:w-[4rem] lg:w-[5rem]">
            <img class="cursor-pointer" src="@/assets/images/cloudy.png" alt="Logo" width="40" height="40">
        </div>
        <div class=" hidden max-sm:flex items-center gap-2">
            <h1 class="text-2xl font-bold text-white">Front-Enzo</h1>
        </div>
        <div class="hidden sm:flex justify-between gap-4">
            <Select v-model="selectedCity" :options="cities" @v-model="selectedCity" optionLabel="name" placeholder="Selecione uma cidade"
                class="w-full md:w-56 border-2 border-solid border-blue-600" />
            <Button label="Pesquisar" icon="pi pi-search" iconPos="left" @click="handleSearch()"
                class="bg-midnight border-2 border-solid border-blue-600" />
        </div>
    </div>
    <div class="w-full h-screen flex justify-center items-start mt-[4rem]">
        <Card class="md:w-[25rem] xl:w-[25rem] max-sm:w-[22rem] overflow-hidden border-solid border-primary border-2 shadow-lg m-4">
            <template #header>
                <div class="flex justify-between items-center px-5">
                    <h1 class="text-2xl font-bold">{{ `${places?.name} - ${places?.country}` }}</h1>
                    <img v-if="places?.weather === 'Clear'" alt="user header" width="50" src="/src/assets/images/clear-sky.png" />
                    <img v-if="places?.weather === 'Rain'" alt="user header" src="/src/assets/images/rainy-day.png" />
                    <img v-if="places?.weather === 'Clouds'" alt="user header" width="60" src="/src/assets/images/cloud.png" />
                </div>
            </template>
            <template #title>
                <h1 class="text-2xl font-bold">
                    {{ temperature }}
                </h1>
            </template>
            <template #content>
                <p class="m-0">
                    {{ places?.description ? `Descrição: ${places.description}` : "Descrição: --" }}
                </p>
                <p class="m-0">
                    {{ places?.humidity ? `humidade do ar: ${places.humidity}` : "humidade do ar: --" }}
                </p>
                <p class="m-0">
                    {{ places?.pressure ? `Pressão: ${places.pressure}` : "Pressão: --" }}
                </p>
            </template>
            <template #footer>
            <div class="hidden max-sm:flex gap-2">
            <Select v-model="selectedCity" :options="cities" @v-model="selectedCity" optionLabel="name" placeholder="Selecione uma cidade"
                class="w-full md:w-56 border-2 border-solid border-blue-600" />
            <Button icon="pi pi-search" iconPos="left" @click="handleSearch()"
                class="bg-midnight border-2 border-solid border-blue-600" />
        </div>
            </template>
        </Card>
    </div>
</template>
