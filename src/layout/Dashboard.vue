<template>
  <div class="flex flex-row h-screen">
    <div class="bg-fuchsia-600 w-1/4 p-4">
      <div class="flex items-center self-start mb-3">
        <img
          src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682856062/vpmxm10fxx6ttjakuahv.png"
          alt="icons pages"
          class="mr-3 w-15"
        />
        <span class="font-bold text-white text-4xl">
          anime<span class="text-fuchsia-400">yabu.</span></span
        >
      </div>
      <div class="p-10">
        <div class="text-white mb-16">
          <span class="font-bold text-2xl"> Categorías</span>
          <ul class="list-disc ml-10 text-xl font-light mt-3">
            <li class="cursor-pointer hover:underline">Ver todas</li>
            <li class="cursor-pointer hover:underline">Crear</li>
          </ul>
        </div>

        <button class="text-white font-bold text-2xl cursor-pointer">
          Cerrar sesión
        </button>
      </div>
    </div>
    <div class="bg-black w-3/4 flex items-center p-16">
      <router-view />
    </div>
  </div>
</template>

<script></script>

<style lang="scss" scoped></style>
