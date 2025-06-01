<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'
import { toast, Toaster } from "vue-sonner"
import { ref, onMounted } from 'vue';
import Weather from "@/service-weather"

const cidade = ref('Aracaju, SE');
const city = ref("Paris")
const places = ref({});
const success = () => {
 return toast.success('Brisio é gay')
}

const getWeatherData =() => {
    Weather.getTemperature(city.value)
        .then(({ data }) => {
            places.value = {
                name: data.name,
                temp: data.main.temp,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
        }
        
    }) 
    .finally(()=>{
        cidade.value = `${places.value.name}, ${places.value.temp}°C`
        console.log(places.value)
    })
}

onMounted(()=>{
    getWeatherData()
})
</script>

<template>
<main class="w-full h-full bg-secondary">
    <Card class=" h-[20rem] w-[20rem] mx-auto p-4">
        <h1 class="text-3xl font-bold text-center mb-6 text-black">Temperatura Atual</h1>
        <p class="text-lg text-center">{{ cidade }}</p>
        <Toaster position="top-right" richColors/>
         <Button   @click="success">submit</Button>
    </Card>
</main>    
</template>
