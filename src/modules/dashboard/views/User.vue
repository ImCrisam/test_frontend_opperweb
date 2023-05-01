<template>
  <div class="flex flex-col h-full p-16">
    <span class="text-white text-4xl mb-16"
      >Hola, <span class="font-bold">{{ username }}</span></span
    >

    <div class="w-2/3">
      <span class="text-white">Selecciona una opción:</span>
      <button
        class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 font-bold"
      >
        <router-link :to="{ name: 'categories', params: { id: 0 } }">
          Ver todas las categorías
        </router-link>
      </button>
      <button
        class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 font-bold"
      >
        <router-link :to="{ name: 'create', params: { id: 0 } }">
          Crear categorías
        </router-link>
      </button>
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
