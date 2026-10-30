<script setup>
import { ref } from 'vue'

const menuVeiculosAberto = ref(false)
const menuMobileAberto = ref(false)
</script>

<template>
  <header class="w-full flex justify-between items-center py-4 md:py-5 px-4 sm:px-8 lg:px-11 bg-white text-black relative z-50 border-b border-gray-100">
    <div>
      <img src="/img/logotipo_vinci.png" alt="Logótipo Vinci" class="h-8 sm:h-10 md:h-12 w-auto object-contain" />
    </div>

    <button 
      @click="menuMobileAberto = !menuMobileAberto" 
      class="lg:hidden p-2 text-black focus:outline-none"
      aria-label="Abrir Menu"
    >
      <svg class="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path v-if="!menuMobileAberto" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
        <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
    
    <nav class="hidden lg:block">      
      <ul class="flex flex-row items-center gap-6 xl:gap-16 text-base xl:text-[1.2rem]">
        <li><router-link to="/" class="hover:text-blue-300 text-black transition-colors">HOME</router-link></li>
        <li><a href="#" class="hover:text-blue-300 text-black transition-colors">SOBRE</a></li>
        
        <li class="cursor-pointer">
          <a href="#" 
             @click.prevent="menuVeiculosAberto = !menuVeiculosAberto"
             class="transition-colors"
             :class="menuVeiculosAberto ? 'text-blue-300' : 'text-black hover:text-blue-300'"
          >
            VEÍCULOS
          </a>

          <div 
            v-show="menuVeiculosAberto" 
            class="absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-200 cursor-default flex justify-center max-h-[85vh] overflow-y-auto"
          >
            <div class="max-w-6xl w-full flex flex-col md:flex-row py-8 md:py-12 px-6 gap-8">
              
              <div class="flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-8 md:gap-y-12 gap-x-6 md:pr-12">
                
                <div class="flex flex-col items-center">
                  <img src="/img/modelov1.png" class="h-20 sm:h-24 object-contain mb-4" alt="Modelo V1">
                  <span class="text-sm text-black font-bold uppercase tracking-widest mb-2">MODELO V1</span>
                  <div class="flex gap-4 text-xs text-gray-400 lowercase font-normal">
                    <a href="#" class="hover:text-black transition-colors">ver mais</a>
                    <a href="#" class="hover:text-black transition-colors">comprar</a>
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <img src="/img/modelov2.png" class="h-20 sm:h-24 object-contain mb-4" alt="Modelo V2">
                  <span class="text-sm text-black font-bold uppercase tracking-widest mb-2">MODELO V2</span>
                  <div class="flex gap-4 text-xs text-gray-400 lowercase font-normal">
                    <a href="#" class="hover:text-black transition-colors">ver mais</a>
                    <a href="#" class="hover:text-black transition-colors">comprar</a>
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <img src="/img/modelov3.png" class="h-20 sm:h-24 object-contain mb-4" alt="Modelo V3">
                  <span class="text-sm text-black font-bold uppercase tracking-widest mb-2">MODELO V3</span>
                  <div class="flex gap-4 text-xs text-gray-400 lowercase font-normal">
                    <a href="#" class="hover:text-black transition-colors">ver mais</a>
                    <a href="#" class="hover:text-black transition-colors">comprar</a>
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <img src="/img/modelov1G.png" class="h-20 sm:h-24 object-contain mb-4" alt="Modelo V1 Verde">
                  <span class="text-sm text-black font-bold uppercase tracking-widest mb-2">MODELO V1</span>
                  <div class="flex gap-4 text-xs text-gray-400 lowercase font-normal">
                    <a href="#" class="hover:text-black transition-colors">ver mais</a>
                    <a href="#" class="hover:text-black transition-colors">comprar</a>
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <img src="/img/modelov1.png" class="h-20 sm:h-24 object-contain mb-4" alt="Modelo V1">
                  <span class="text-sm text-black font-bold uppercase tracking-widest mb-2">MODELO V1</span>
                  <div class="flex gap-4 text-xs text-gray-400 lowercase font-normal">
                    <a href="#" class="hover:text-black transition-colors">ver mais</a>
                    <a href="#" class="hover:text-black transition-colors">comprar</a>
                  </div>
                </div>

                <div class="flex flex-col items-center">
                  <img src="/img/modelov1.png" class="h-20 sm:h-24 object-contain mb-4" alt="Modelo V1">
                  <span class="text-sm text-black font-bold uppercase tracking-widest mb-2">MODELO V1</span>
                  <div class="flex gap-4 text-xs text-gray-400 lowercase font-normal">
                    <a href="#" class="hover:text-black transition-colors">ver mais</a>
                    <a href="#" class="hover:text-black transition-colors">comprar</a>
                  </div>
                </div>

              </div>

              <div class="w-full md:w-64 border-t md:border-t-0 md:border-l border-gray-100 pt-6 md:pt-0 md:pl-12 flex flex-col">
                <span class="text-[11px] text-gray-400 uppercase tracking-widest border-b border-gray-100 pb-3 mb-6 md:mb-8">Navegue</span>
                
                <ul class="flex flex-row md:flex-col flex-wrap gap-4 md:gap-6 text-[11px] font-bold uppercase tracking-widest text-black">
                  <li><a href="#" class="hover:text-red-500 transition-colors">Ofertas</a></li>
                  <li><a href="#" class="text-red-500 hover:text-red-600 transition-colors">Test Drive</a></li>
                  <li><a href="#" class="hover:text-red-500 transition-colors">Lojas</a></li>
                  <li><a href="#" class="hover:text-red-500 transition-colors">Serviços</a></li>
                  <li><a href="#" class="hover:text-red-500 transition-colors">SAC</a></li>
                  <li><a href="#" class="hover:text-red-500 transition-colors">Privacidade</a></li>
                </ul>
              </div>

            </div>
          </div>
        </li>

        <li><a href="#" class="hover:text-blue-300 text-black transition-colors">SERVIÇOS</a></li>
        <li><a href="#" class="hover:text-blue-300 text-black transition-colors">TEST DRIVE</a></li>
      </ul>
    </nav>

    <div 
      v-show="menuMobileAberto" 
      class="lg:hidden absolute top-full left-0 w-full bg-white border-t border-gray-200 shadow-xl py-6 px-8 z-40"
    >
      <ul class="flex flex-col gap-6 text-lg font-medium">
        <li><router-link to="/" @click="menuMobileAberto = false" class="block hover:text-blue-300 text-black">HOME</router-link></li>
        <li><a href="#" @click="menuMobileAberto = false" class="block hover:text-blue-300 text-black">SOBRE</a></li>
        <li>
          <button 
            @click="menuVeiculosAberto = !menuVeiculosAberto" 
            class="flex justify-between items-center w-full text-left hover:text-blue-300 text-black"
          >
            VEÍCULOS
            <svg class="w-5 h-5 transition-transform" :class="{'rotate-180': menuVeiculosAberto}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          
          <div v-show="menuVeiculosAberto" class="mt-4 pl-4 grid grid-cols-2 gap-4 border-l-2 border-gray-100">
            <div class="text-xs font-bold uppercase">
              <img src="/img/modelov1.png" class="h-12 object-contain mb-1" alt="V1">
              MODELO V1
            </div>
            <div class="text-xs font-bold uppercase">
              <img src="/img/modelov2.png" class="h-12 object-contain mb-1" alt="V2">
              MODELO V2
            </div>
            <div class="text-xs font-bold uppercase">
              <img src="/img/modelov3.png" class="h-12 object-contain mb-1" alt="V3">
              MODELO V3
            </div>
            <div class="text-xs font-bold uppercase">
              <img src="/img/modelov1G.png" class="h-12 object-contain mb-1" alt="V1 Verde">
              MODELO V1
            </div>
          </div>
        </li>
        <li><a href="#" @click="menuMobileAberto = false" class="block hover:text-blue-300 text-black">SERVIÇOS</a></li>
        <li><a href="#" @click="menuMobileAberto = false" class="block hover:text-blue-300 text-black">TEST DRIVE</a></li>
      </ul>
    </div>
  </header>
</template>