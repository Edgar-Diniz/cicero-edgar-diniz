<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
<div class="flex flex-col min-h-screen bg-white text-black font-genos overflow-x-hidden">
<Header/>

<main class="flex-1 w-full overflow-x-hidden">
  <router-view></router-view>
</main>

<Footer/>
</div>
</template>