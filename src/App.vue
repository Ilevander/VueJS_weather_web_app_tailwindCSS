<template>
  <div id="app">
    <Navbar /> <!-- Include the Navbar component -->
    <MarketingSection
      heading="Payments tool for software companies"
      description="From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack."
      button1Text="Get started"
      button2Text="Speak to Sales"
      imageSrc="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
    />
      <Weather /><br><br>
    <Footer /> <!-- Include the Footer component -->
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import MarketingSection from './components/MarketingSection.vue';
import Weather from './components/Weather.vue';
import Footer from './components/Footer.vue';

export default {
  components: {
    Navbar, // Register the Navbar component
    MarketingSection, // Register the MarketingSection component
    Weather,
    Footer, // Register the Footer component
  },
};
</script>
