<template>
    <div class="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center justify-center">
        <div class="bg-white p-6 rounded-lg shadow-md">
            <h1 class="text-3xl font-bold mb-4">Weather App</h1>
            <label for="location" class="block text-lg mb-2">Enter a city:</label>
            <div class="flex">
            <input v-model="location" @keyup.enter="getWeather" id="location" class="border rounded-l-lg py-2 px-4 w-full" />
            <button @click="getWeather" class="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-r-lg">Get Weather</button>
        </div>
    
           <div v-if="weatherData" class="mt-6 bg-gray-200 p-4 rounded-lg shadow-md">
                <h2 class="text-2xl font-semibold">Weather in <i class="fa-solid fa-location-dot fa-flip fa-xl"></i> {{ weatherData.name }}, {{ weatherData.sys.country }}</h2>
                <p class="text-xl font-semibold"><span class="oldstyle-nums">Temperature:</span> <i class="fa-solid fa-temperature-half"></i> <strong class="leading-none text-blue-400 text-6xl block font-weight-bolder text-center">{{ weatherData.main.temp }}°C</strong></p>
                <!-- Display temperature, feels like, min, and max temperatures -->
                <p class="text-xl font-semibold">
                   (Feels Like: {{ weatherData.main.feels_like }}°C) <br>
                    <br />Min Temperature: <strong class="leading-none text-blue-300 text-2xl  font-weight-bolder">{{ weatherData.main.temp_min }}°C <i class="fa-solid fa-temperature-quarter"></i></strong>
  
                    <br />Max Temperature: <strong class="leading-none text-blue-300 text-2xl  font-weight-bolder">{{ weatherData.main.temp_max }}°C <i class="fa-solid fa-temperature-quarter"></i></strong> 
                </p>
                   <!-- Display humidity, weather description, and weather icon -->
                <p class="text-xl font-semibold">
                    Humidity: <strong class="leading-none text-blue-300 text-2xl  font-weight-bolder">{{ weatherData.main.humidity }}%  <i class="fa-solid fa-wind"></i> </strong> 
                    <br />Weather: <i class="fa-solid fa-sun"></i> <i class="fa-solid fa-cloud"></i> <i class="fa-solid fa-wind"></i> {{ weatherData.weather[0].description }}
                    <img
                        :src="'http://openweathermap.org/img/w/' + weatherData.weather[0].icon + '.png'"
                        alt="Weather Icon"
                        class="w-40 h-40 mx-auto my-auto"/>
                </p>
                <!-- Display wind speed and wind direction -->
                <p class="text-xl font-semibold">
                  Wind Speed: <strong class="leading-none text-blue-600 text-xl font-weight-bolder">{{ weatherData.wind.speed }} m/s <i class="fa-solid fa-wind fa-beat"></i></strong>  
                  <br />Wind Direction: <strong class="leading-none text-blue-600 text-xl font-weight-bolder">{{ weatherData.wind.deg }}° <i class="fa-regular fa-compass fa-beat"></i></strong>   
                </p>
                <!-- Display cloudiness -->
                <p class="text-xl font-semibold">Cloudiness: <strong class="leading-none text-blue-600 text-xl font-weight-bolder">{{ weatherData.clouds.all }}% <i class="fa-solid fa-cloud fa-beat"></i></strong>  </p>
            </div>
        </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        location: '',
        weatherData: null,
      };
    },
    methods: {
      async getWeather() {
        const apiKey = '7cd19b757806a68685d5116bb5a6fb01';
        try {
          const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${this.location}&appid=${apiKey}&units=metric`
          );
          this.weatherData = response.data;
        } catch (error) {
          console.error('Error fetching weather data:', error);
          this.weatherData = null;
        }
      },
    },
  };
  </script>
  
  <style scoped>
  
  
  </style>