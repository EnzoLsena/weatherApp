import axios from 'axios'
const apikey = import.meta.env.VITE_API_KEY

class Weather {
     
    getTemperature(city: string) {
        const params = new URLSearchParams;
        
        params.append('city', city)

        return axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=pt&appid=${apikey}`);
    }
}

export default new(Weather);