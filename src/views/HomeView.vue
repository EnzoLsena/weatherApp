<script setup lang="ts">
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
const selectedCity = ref(null);
const cities = ref([
    { name: 'New York', code: 'NY' },
    { name: 'Rome', code: 'RM' },
    { name: 'London', code: 'LDN' },
    { name: 'Istanbul', code: 'IST' },
    { name: 'Paris', code: 'PRS' }
]);
const handleSearch = () => {

}
const success = () => {
    return toast.success('Brisio é gay')
}

async function getWeatherData() {
    try {
        const { data } = await Weather.getTemperature(city.value);
        places.value = {
            name: data.name,
            country: data.sys.country,
            temp: data.main.temp,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
        }
        toast.success('Dados do tempo atualizados com sucesso!')
    } catch (error) {
        toast.error('Erro ao buscar dados do tempo');
    }
}

onMounted(() => {
    getWeatherData()
})
</script>

<template>
    <div class="w-full bg-primary z-10 top-0 p-[1rem] flex justify-between">
        <div class="text-white text-2xl font-bold">
            <img class="cursor-pointer" src="@/assets/images/cloudy.png" alt="Logo" width="40" height="40">
        </div>
        <div class=" flex justify-between gap-4">
            <Select v-model="selectedCity" :options="cities" optionLabel="name" placeholder="Selecione uma cidade"
                class="w-full md:w-56 border-2 border-solid border-blue-600" />
            <Button label="Pesquisar" icon="pi pi-search" iconPos="left" @click="handleSearch()"
                class="bg-midnight border-2 border-solid border-blue-600" />
        </div>
    </div>
    <Card class="w-[25rem] overflow-hidden border-solid border-primary border-2 shadow-lg m-4">
        <template #header>
            <div class="flex justify-between items-center px-5">
                <h1 class="text-2xl font-bold">{{ `${places.name} - ${places.country}` }}</h1>
                <img alt="user header" src="/src/assets/rainy-day.png" />
            </div>
        </template>
        <template #title>
            <h1 class="text-2xl font-bold">
                {{ `Temperatura: ${Math.trunc(places.temp)}° ` }}
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
                <Button @click="success" class="bg-midnight border-2 border-solid border-blue-600">Ativar</Button>
            </div>
        </template>
    </Card>
</template>
