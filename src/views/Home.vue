<script setup>
</script>

<template>

<div class="relative w-full h-[85vh] sm:h-[80vh] md:h-screen flex items-end sm:items-center">
  <img src="/img/car_banner1.jpg" alt="Banner1_Home" class="absolute inset-0 w-full h-full object-cover">

  <div class="relative z-10 w-full max-w-7xl mx-auto p-4 sm:p-8 md:p-12 flex flex-col gap-3 pb-8 sm:pb-0">
    <h1 class="text-white text-3xl sm:text-5xl md:text-[4rem] font-medium leading-tight">VINCI MODEL V3</h1>

    <p class="text-white text-sm sm:text-lg md:text-[1.3rem] max-w-xl leading-relaxed">
      O Vinci Model V3 redefine os padrões de inovação e performance. 
      Projetado com aerodinâmica de ponta e tecnologia inteligente.
    </p>

    <div class="flex flex-col sm:flex-row gap-3 mt-2 sm:mt-4 font-medium">
      <button class="rounded-sm w-full sm:w-auto bg-red-500 text-base sm:text-[1.2rem] text-white px-6 sm:px-12 py-3 transition-colors hover:bg-red-600">
        MODELOS
      </button>
      <button class="rounded-sm w-full sm:w-auto text-base sm:text-[1.2rem] text-white px-6 sm:px-12 py-3 border border-white transition-colors hover:bg-white hover:text-black">
        TEST DRIVE
      </button>
    </div>
  </div>
</div>

<div class="w-full bg-white py-12 md:py-20 px-4 sm:px-8 flex justify-center">
  <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl w-full">

    <div class="flex flex-col justify-between w-full h-full gap-6"> 
      <div class="flex flex-col sm:flex-row justify-between items-start w-full gap-4">
        <div class="flex flex-col"> 
          <h2 class="text-2xl sm:text-3xl tracking-[0.4em] text-black font-normal">VINCI</h2>
          <h2 class="text-2xl sm:text-3xl tracking-[0.4em] text-black mt-1 font-normal">MODEL V2</h2>
        </div>
        
        <div class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm sm:text-base">
          <span class="font-bold text-gray-700">Potência:</span>
          <span class="text-gray-500">300 cavalos</span>
          
          <span class="font-bold text-gray-700">Autonomia:</span>
          <span class="text-gray-500">500km por carga</span>
          
          <span class="font-bold text-gray-700">Peso:</span>
          <span class="text-gray-500">1.500 kg</span>

          <span class="font-bold text-gray-700">Tecnologia:</span>
          <span class="text-gray-500">GPS e Smartlink</span>
        </div>
      </div>
          
      <div class="flex-1 flex items-center justify-center py-6 sm:py-8">
        <img src="/img/vinci2.png" alt="carv2" class="max-h-[260px] sm:max-h-[380px] md:max-h-[460px] w-auto object-contain">
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full border-t border-gray-200 pt-4 mt-auto gap-3">
        <p class="text-gray-500 uppercase tracking-widest text-xs sm:text-sm md:text-base">A SUV mais robusta da categoria</p>
        <router-link to="/infocar" class="font-semibold text-black uppercase tracking-[0.2em] text-sm sm:text-base border-b-2 border-black pb-1 hover:text-red-500 hover:border-red-500 transition-colors">CONHEÇA</router-link>   
      </div>
    </div>
   
    <div class="flex flex-col justify-between w-full h-full gap-6"> 
      <div class="flex flex-col sm:flex-row justify-between items-start w-full gap-4">
        <div class="flex flex-col"> 
          <h2 class="text-2xl sm:text-3xl tracking-[0.4em] text-black font-normal">VINCI</h2>
          <h2 class="text-2xl sm:text-3xl tracking-[0.4em] text-black mt-1 font-normal">MODEL V1</h2>
        </div>

        <div class="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5 text-sm sm:text-base">
          <span class="font-bold text-gray-700">Potência:</span>
          <span class="text-gray-500">220 cavalos</span>
          
          <span class="font-bold text-gray-700">Autonomia:</span>
          <span class="text-gray-500">450km por carga</span>
          
          <span class="font-bold text-gray-700">Peso:</span>
          <span class="text-gray-500">1.300 kg</span>

          <span class="font-bold text-gray-700">Tecnologia:</span>
          <span class="text-gray-500">GPS e Smartlink</span>
        </div>
      </div>
          
      <div class="flex-1 flex items-center justify-center py-6 sm:py-8">
        <img src="/img/vinci1.png" alt="carv1" class="max-h-[260px] sm:max-h-[380px] md:max-h-[460px] w-auto object-contain">
      </div>

      <div class="flex flex-col sm:flex-row justify-between items-start sm:items-end w-full border-t border-gray-200 pt-4 mt-auto gap-3">
        <p class="text-gray-500 uppercase tracking-widest text-xs sm:text-sm md:text-base">Design e eficiência na cidade</p>
        <button class="font-semibold text-black uppercase tracking-[0.2em] text-sm sm:text-base border-b-2 border-black pb-1 hover:text-red-500 hover:border-red-500 transition-colors">CONHEÇA</button>
      </div>
    </div>

  </div>
</div>

<div class="w-full h-[40vh] sm:h-[60vh] md:h-screen">
  <img src="/img/car_banner2.png" alt="Banner2_home" class="w-full h-full object-cover">
</div>

<section class="w-full bg-white py-10 md:py-16 px-4 sm:px-8">
  <div class="w-full max-w-7xl mx-auto flex flex-col gap-4 sm:gap-6">
    <a href="#" class="flex justify-between items-center border-b border-gray-300 pb-3 sm:pb-4 text-black hover:text-red-500 transition-colors group">
      <span class="text-lg sm:text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest font-normal">agende um test drive</span>
      <span class="text-lg sm:text-3xl md:text-5xl lg:text-7xl font-bold transition-transform group-hover:translate-x-2">&gt;</span>
    </a>

    <a href="#" class="flex justify-between items-center border-b border-gray-300 pb-3 sm:pb-4 text-black hover:text-red-500 transition-colors group">
      <span class="text-lg sm:text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest font-normal">veja ofertas</span>
      <span class="text-lg sm:text-3xl md:text-5xl lg:text-7xl font-bold transition-transform group-hover:translate-x-2">&gt;</span>
    </a>

    <a href="#" class="flex justify-between items-center border-b border-gray-300 pb-4 text-black hover:text-red-500 transition-colors group">
      <span class="text-lg sm:text-3xl md:text-5xl lg:text-7xl uppercase tracking-widest font-normal">encontre uma loja</span>
      <span class="text-lg sm:text-3xl md:text-5xl lg:text-7xl font-bold transition-transform group-hover:translate-x-2">&gt;</span>
    </a>
  </div>
</section>

<div class="w-full h-[40vh] sm:h-[60vh] md:h-screen">
  <img src="/img/car_banner3.png" alt="Banner3_Home" class="w-full h-full object-cover">
</div>

</template>