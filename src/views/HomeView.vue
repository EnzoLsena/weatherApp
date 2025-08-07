<script setup lang="ts">
import { toast } from "vue-sonner"
import { onMounted, ref} from 'vue';
import Weather from "@/services/service-weather"
import Header from "@/components/header/Header.vue";
import CardCity from "@/components/card-city/CardCity.vue";
import type {Place} from "@/@types/place";
const cityDefault = ref("Paris")
const places = ref<Place>();
const getWeatherData = async (city: string) => {
    try {
        const { data } = await Weather.getTemperature(city);
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
        toast.error("Erro ao carregar os dados", { duration: 700 });
    }
};
  
const handleSearch = (city: string) => {
    getWeatherData(city);
    toast.success('Dados do tempo atualizados com sucesso!', { duration: 700 });
}
onMounted(() => {
    getWeatherData(cityDefault.value);
})
</script>

<template>
    <Header @update-city="(city) => handleSearch(city)"/>
    <CardCity :places="places"/>
</template>
