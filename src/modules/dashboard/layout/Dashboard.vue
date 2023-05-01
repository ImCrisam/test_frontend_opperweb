<template>
  <div class="flex flex-col md:flex-row h-screen">
    <div class="bg-fuchsia-600 md:w-1/4 p-4">
      <div class="flex items-center self-start mb-3">
        <img
          src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682856062/vpmxm10fxx6ttjakuahv.png"
          alt="icons pages"
          class="mr-3 md:w-15 w-7"
        />
        <span class="font-bold text-white md:text-4xl">
          anime<span class="text-fuchsia-400">yabu.</span></span
        >
      </div>
      <div class="md:p-10">
        <router-link :to="{ name: 'user' }">
          <span class="text-white text-2xl font-bold cursor-pointer"
            >Inicio</span
          >
        </router-link>
        <div class="text-white md:mb-16 md:mt-5 my-3">
          <router-link :to="{ name: 'categories' }">
            <span class="font-bold text-2xl cursor-pointer"> Categorías</span>
          </router-link>
          <ul class="list-disc ml-10 text-xl font-light mt-3">
            <router-link :to="{ name: 'categories' }">
              <li class="cursor-pointer hover:underline">Ver todas</li>
            </router-link>
            <router-link :to="{ name: 'create' }">
              <li class="cursor-pointer hover:underline">Crear</li>
            </router-link>
          </ul>
        </div>

        <button
          class="text-white font-bold text-2xl cursor-pointer text-start"
          @click="onLogout"
        >
          Cerrar sesión
        </button>
      </div>
    </div>
    <div
      class="bg-black md:w-3/4 flex md:items-center md:ps-12 ps-3 h-full overflow-clip"
    >
      <router-view />
    </div>
  </div>
</template>

<script>
import { useRouter } from "vue-router";
import useAuth from "../../auth/composables/useAuth";
export default {
  setup() {
    const router = useRouter();
    const { logout } = useAuth();
    return {
      onLogout: () => {
        logout();
        router.push({ name: "login" });
      },
    };
  },
};
</script>
