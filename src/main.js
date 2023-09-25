import { createApp } from 'vue';
import App from './App.vue';
import './assets/tailwind.css'; // Update the import path if necessary
import Weather from './components/Weather.vue';

const app = createApp(App);

// Register the Weather component globally
app.component('Weather', Weather);

app.mount('#app');
