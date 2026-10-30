<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="min-h-screen w-full bg-white text-black font-genos flex flex-col overflow-x-hidden">
    <Header />
    <main class="flex-1 w-full bg-white">
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>