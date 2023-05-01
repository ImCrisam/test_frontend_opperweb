<template>
  <div class="flex flex-col h-full p-16">
    <span class="text-4xl text-white">Lista de Categorías</span>
    <div class="flex flex-wrap gap-x-16 gap-y-10 mt-16">
      <div
        class="w-60 h-40 bg-fuchsia-600 rounded-sm flex flex-col justify-center items-center p-3"
      >
        <span class="text-4xl text-white mt-auto">Accion</span>
        <span class="self-end mt-auto text-white underline">
          <router-link :to="{ name: 'update', params: { id: 0 } }">
            editar
          </router-link>
        </span>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
