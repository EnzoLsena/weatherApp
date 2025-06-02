<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import { toast, Toaster } from "vue-sonner"
import { ref, onMounted } from 'vue';
import Weather from "@/service-weather"

const city = ref("Aracaju")
const places = ref({
    name: '',
    country: '',
    temp: 0,
    humidity: '',
    pressure: '',
});
const success = () => {
    return toast.success('Brisio é gay')
}

const getWeatherData = () => {
    Weather.getTemperature(city.value)
        .then(({ data }) => {
            places.value = {
                name: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
            }
            toast.success('Dados do tempo atualizados com sucesso!')
        })
        .catch(() => {
            toast.error('Erro ao buscar dados do tempo');
        });
}

onMounted(() => {
    getWeatherData()
})
</script>

<template>
    <Card class="w-[25rem] overflow-hidden">
        <template #header>
            <div class="flex justify-between items-center px-5">
                <img alt="user header" src="/src/assets/rainy-day.png" />
                <h1 class="text-2xl font-bold">{{ `${Math.trunc(places.temp)}°` }}</h1>
            </div>
        </template>
        <template #title>
            <h1 class="text-2xl font-bold">
                {{ `${places.name} - ${places.country}` }}
            </h1>
        </template>
        <template #content>
            <p class="m-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Inventore sed consequuntur error repudiandae
                numquam deserunt quisquam repellat libero asperiores earum nam nobis, culpa ratione quam perferendis
                esse, cupiditate neque
                quas!
            </p>
        </template>
        <template #footer>
            <div class="flex gap-4 mt-1">
                <Toaster position="top-right" richColors />
                <Button @click="success">submit</Button>
            </div>
        </template>
    </Card>
</template>
