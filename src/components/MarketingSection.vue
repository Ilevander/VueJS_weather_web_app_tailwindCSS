<template>
    <div class="bg-gradient-to-r from-blue-500 to-teal-500 min-h-screen flex items-center justify-center">
      <div class="text-white text-center">
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
          Welcome to Weatherly
        </h1>
        <p class="text-lg md:text-xl lg:text-2xl font-light mb-8">
          Your Ultimate Weather Forecast App crated by Ilyass
        </p>
        <a
    href="/"
    class="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900"
  >
    Get started
    <svg class="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
  </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      navigateToWeatherPage() {
        // Implement your navigation logic to the weather page here
        // Example: You can use Vue Router to navigate to another route
      },
    },
  };
  </script>
  
  <style scoped>
  /* Add custom styles for the landing page title if needed */
  </style>