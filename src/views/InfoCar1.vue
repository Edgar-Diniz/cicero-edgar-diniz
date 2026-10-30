<script setup>
</script>

<template>
  <section class="flex flex-col w-full px-4 sm:px-8 py-8 overflow-x-hidden">
      
    <div class="flex justify-center items-center mb-6 sm:mb-8">
      <img src="/img/Model_car1.png" class="w-full max-w-4xl h-auto object-contain" alt="ModelCar1">
    </div>

    <h1 class="text-center text-3xl sm:text-5xl md:text-6xl uppercase tracking-widest text-black font-medium">
      vinci model v2
    </h1>
  
    <p class="text-center text-base sm:text-xl md:text-2xl text-gray-500 max-w-5xl mx-auto mt-4 sm:mt-6 mb-6 sm:mb-8 leading-relaxed">
      Sinta o poder de uma engenharia de ponta. 
      Com uma autonomia excecional e detalhes pensados para o máximo conforto, 
      o Model V2 redefine os padrões de desempenho e elegância na estrada.
    </p>

    <div class="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-5 font-medium mb-10">
      <button class="rounded-sm w-full sm:w-auto bg-red-500 text-base sm:text-[1.2rem] text-white px-8 sm:px-16 py-3 transition-colors hover:bg-red-600">
        MODELOS
      </button>
      <button class="rounded-sm w-full sm:w-auto text-base sm:text-[1.2rem] text-black px-8 sm:px-16 py-3 border border-black transition-colors hover:bg-black hover:text-white">
        TEST DRIVE
      </button>
    </div>

    <h2 class="text-center text-lg sm:text-2xl text-gray-500 max-w-5xl mx-auto mt-6 sm:mt-10 leading-relaxed uppercase">
      tecnologia aliada ao futuro
    </h2>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0 max-w-5xl mx-auto mt-6 sm:mt-10 uppercase font-light">

      <div class="flex justify-center">
        <div class="flex flex-col items-center md:items-start px-6 text-center md:text-left">
          <h2 class="text-4xl sm:text-6xl md:text-7xl text-black tracking-tight whitespace-nowrap">520 KM</h2>
          <p class="text-base sm:text-xl text-gray-500 mt-1 sm:mt-2">com 1 carga</p>
        </div>
      </div>

      <div class="flex justify-center md:border-x border-gray-300 px-6">
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 class="text-4xl sm:text-6xl md:text-7xl text-black tracking-tight whitespace-nowrap">2.800 RPM</h2>
          <p class="text-base sm:text-xl text-gray-500 mt-1 sm:mt-2">de torque</p>
        </div>
      </div>
        
      <div class="flex justify-center px-6">
        <div class="flex flex-col items-center md:items-start text-center md:text-left">
          <h2 class="text-4xl sm:text-6xl md:text-7xl text-black tracking-tight whitespace-nowrap">10 ANOS</h2>
          <p class="text-base sm:text-xl text-gray-500 mt-1 sm:mt-2">garantia</p>
        </div>
      </div>

    </div>

    <div class="flex justify-center max-w-7xl mx-auto my-10 sm:my-16">
      <img src="/img/car_banner4.png" class="w-full h-auto object-contain" alt="Banner4_infoCar">
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-0 w-full max-w-7xl mx-auto px-2 sm:px-6">
      <div class="flex flex-col justify-between h-full">
        <div class="px-2 sm:px-5">
          <h2 class="text-lg sm:text-xl text-black mb-3 sm:mb-5 font-semibold">RECARGA RÁPIDA</h2>
          <p class="text-sm sm:text-base text-gray-500 py-2 sm:py-5 leading-relaxed">
            Recupere até 80% da bateria em apenas 30 minutos
            com o nosso sistema de carregamento ultrarrápido.
            Volte para a estrada com total segurança e agilidade.
          </p>
        </div>
        <img src="/img/Grid_img1.png" class="w-full h-auto object-contain mt-4" alt="Colom1">
      </div>

      <div class="flex flex-col justify-between h-full">
        <div class="lg:border-x border-gray-300 px-2 sm:px-5">
          <h2 class="text-lg sm:text-xl text-black mb-3 sm:mb-5 font-semibold">PAINEL DE INSTRUMENTOS</h2>
          <p class="text-sm sm:text-base text-gray-500 py-2 sm:py-5 leading-relaxed">
            Controle todas as funções do veículo através
            de uma tela sensível ao toque de alta resolução.
            Navegação inteligente e conectividade fluida em tempo real.
          </p>
        </div>
        <img src="/img/Grid_img2.png" class="w-full h-auto object-contain mt-4" alt="Colom2">
      </div>

      <div class="flex flex-col justify-between h-full">
        <div class="lg:border-r border-gray-300 px-2 sm:px-5">
          <h2 class="text-lg sm:text-xl text-black mb-3 sm:mb-5 font-semibold">PONTOS DE RECARGA</h2>
          <p class="text-sm sm:text-base text-gray-500 py-2 sm:py-5 leading-relaxed">
            Tenha acesso a uma rede ampla com milhares de estações de carregamento.
            Planeje rotas pelo aplicativo integrado e nunca fique sem energia durante a viagem.
          </p>
        </div>
        <img src="/img/Grid_img3.png" class="w-full h-auto object-contain mt-4" alt="Colom3">
      </div>

      <div class="flex flex-col justify-between h-full">
        <div class="px-2 sm:px-5">
          <h2 class="text-lg sm:text-xl text-black mb-3 sm:mb-5 font-semibold">DESIGN PREMIADO</h2>
          <p class="text-sm sm:text-base text-gray-500 py-2 sm:py-5 leading-relaxed">
            Reconhecido internacionalmente por sua estética inovadora e aerodinâmica perfeita.
            O teto panorâmico e linhas exclusivas garantem uma presença inesquecível.
          </p>
        </div>
        <img src="/img/Grid_img4.png" class="w-full h-auto object-contain mt-4" alt="Colom4">
      </div>
    </div>

    <div class="w-full max-w-7xl mx-auto px-2 sm:px-6 mt-16 sm:mt-24">
      <div class="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-12">
          
        <div class="flex flex-col items-start"> 
          <h2 class="text-2xl sm:text-4xl text-black mb-4 uppercase tracking-widest font-medium">
            VINCI MODEL V2
          </h2>
          <p class="text-left text-gray-500 leading-relaxed text-base sm:text-xl max-w-xl">
            A revolução em cada detalhe exterior. Um design sofisticado que 
            integra segurança de ponta e máxima praticidade no seu dia a dia.
          </p>            
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-16 gap-y-4 sm:gap-y-5 text-[11px] uppercase text-gray-500 tracking-wider font-semibold w-full lg:w-auto">
          <div class="flex flex-col gap-4 sm:gap-5">
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">A</span>
              <span>Retrovisores inteligentes</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">B</span>
              <span>Rodas de liga leve</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">C</span>
              <span>Reconhecimento digital</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">D</span>
              <span>Sensor de proximidade</span>
            </div>
          </div>

          <div class="flex flex-col gap-4 sm:gap-5">
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">E</span>
              <span>Antena 5G</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">F</span>
              <span>Design sofisticado</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">G</span>
              <span>Abertura automática</span>
            </div>
            <div class="flex items-center gap-4">
              <span class="flex justify-center items-center w-5 h-5 bg-black text-white rounded-full text-[10px] font-bold shrink-0">H</span>
              <span>Câmera de estacionamento</span>
            </div>
          </div>
        </div>

      </div>
    </div>

    <div class="flex justify-center max-w-7xl mx-auto mt-10">
      <img src="/img/Model_car2.png" class="w-full max-w-5xl h-auto object-contain px-4" alt="Model Car2">
    </div>

    <div class="flex flex-col text-center uppercase mt-12 sm:mt-16 tracking-widest">
      <h2 class="text-black text-3xl sm:text-5xl mb-3 sm:mb-6 font-medium">
        faq
      </h2>
      <p class="text-gray-500 text-lg sm:text-3xl">Perguntas frequentes</p>
    </div>

    <section class="w-full max-w-5xl mx-auto bg-white py-8 sm:py-16 px-2 sm:px-6">
      <div class="w-full flex flex-col">
        <a href="#" class="flex justify-between items-center border-b border-gray-100 py-6 sm:py-12 text-black hover:text-red-500 transition-colors group gap-4">
          <span class="text-base sm:text-2xl uppercase tracking-widest font-medium pr-2 sm:pr-8 leading-relaxed">Qual é a autonomia real da bateria em diferentes condições de condução?</span>
          <svg class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>

        <a href="#" class="flex justify-between items-center border-b border-gray-100 py-6 sm:py-12 text-black hover:text-red-500 transition-colors group gap-4">
          <span class="text-base sm:text-2xl uppercase tracking-widest font-medium pr-2 sm:pr-8 leading-relaxed">Quanto tempo o carro leva para carregar em tomadas residenciais e em carregadores rápidos?</span>
          <svg class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>

        <a href="#" class="flex justify-between items-center border-b border-gray-100 py-6 sm:py-12 text-black hover:text-red-500 transition-colors group gap-4">
          <span class="text-base sm:text-2xl uppercase tracking-widest font-medium pr-2 sm:pr-8 leading-relaxed">Como funciona a infraestrutura de recarga para viagens de longa distância?</span>
          <svg class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
          
        <a href="#" class="flex justify-between items-center border-b border-gray-100 py-6 sm:py-12 text-black hover:text-red-500 transition-colors group gap-4">
          <span class="text-base sm:text-2xl uppercase tracking-widest font-medium pr-2 sm:pr-8 leading-relaxed">Qual é o tempo de garantia da bateria e qual a sua vida útil estimada?</span>
          <svg class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>

        <a href="#" class="flex justify-between items-center border-b border-gray-100 py-6 sm:py-12 text-black hover:text-red-500 transition-colors group gap-4">
          <span class="text-base sm:text-2xl uppercase tracking-widest font-medium pr-2 sm:pr-8 leading-relaxed">Quais são as principais economias em manutenção e impostos comparado a um carro a combustão?</span>
          <svg class="w-6 h-6 sm:w-8 sm:h-8 shrink-0 group-hover:text-red-500 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1" d="M19 9l-7 7-7-7"></path>
          </svg>
        </a>
      </div>
    </section>

  </section>
</template>