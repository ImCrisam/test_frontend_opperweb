<template>
  <div class="flex flex-col h-full md:p-16 p-4">
    <span class="text-white md:text-4xl md:mb-16 text-2xl mb-5"
      >Hola, <span class="font-bold">{{ username }}</span></span
    >

    <div class="sm:w-2/3">
      <span class="text-white">Selecciona una opción:</span>
      <router-link :to="{ name: 'categories', params: { id: 0 } }">
        <button
          class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 font-bold"
        >
          Ver todas las categorías
        </button>
      </router-link>
      <router-link :to="{ name: 'create', params: { id: 0 } }">
        <button
          class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 font-bold"
        >
          Crear categorías
        </button>
      </router-link>
      <button
        class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 font-bold"
        @click="onLogout"
      >
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useAuth from "../../auth/composables/useAuth";
export default {
  setup() {
    const router = useRouter();
    const { logout, username } = useAuth();
    return {
      onLogout: () => {
        logout();
        router.push({ name: "login" });
      },
      username,
    };
  },
};
</script>
