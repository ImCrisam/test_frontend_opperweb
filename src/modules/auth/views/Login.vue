<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import axios from "axios";

import SocialBtn from "../components/SocialBtn.vue";
export default {
  components: {
    SocialBtn,
  },
  setup() {
    const store = useStore();

    const form = reactive({
      email: "",
      password: "",
    });

    const submitForm = async () => {
      try {
        const { data } = await axios.post("/api/login", form);
        store.dispatch("login", data);
      } catch (error) {
        console.error(error);
      } finally {
        form.email = "";
        form.password = "";
      }
    };

    return {
      email: form.email,
      password: form.password,
      submitForm,
    };
  },
};
</script>
<template>
  <img
    src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682826732/ngrg4put4ogyaaiikny1.png"
    alt=""
    sizes=""
    srcset=""
  />
  <span class="text-3xl text-white font-bold"> ひさしぶり!</span>
  <span class="text-sm text-white"> ¡Hola, te extrañamos!</span>
  <div class="max-w-xs">
    <form @submit.prevent="submitForm">
      <div>
        <label class="text-sm text-white" for="email">email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
        />
      </div>
      <div>
        <label class="text-sm text-white" for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          v-model="password"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
        />
      </div>
      <span class="text-sm text-fuchsia-200 text-right block mt-2"
        >¿Olvido la contraseña?</span
      >
      <button
        type="submit"
        class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 text-sm"
      >
        Acceder
      </button>
    </form>
    <SocialBtn islogin></SocialBtn>
  </div>
</template>
