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
  <div
    class="bg-gradient-to-b from-fuchsia-200 to-black min-h-screen flex flex-col items-center p-2 justify-center"
  >
    <span class="self-start">
      <svg class="text-white w-5 h-5" viewBox="0 0 20 20">
        <path
          fill="#fff"
          d="M18.271,9.212H3.615l4.184-4.184c0.306-0.306,0.306-0.801,0-1.107c-0.306-0.306-0.801-0.306-1.107,0
	L1.21,9.403C1.194,9.417,1.174,9.421,1.158,9.437c-0.181,0.181-0.242,0.425-0.209,0.66c0.005,0.038,0.012,0.071,0.022,0.109
	c0.028,0.098,0.075,0.188,0.142,0.271c0.021,0.026,0.021,0.061,0.045,0.085c0.015,0.016,0.034,0.02,0.05,0.033l5.484,5.483
	c0.306,0.307,0.801,0.307,1.107,0c0.306-0.305,0.306-0.801,0-1.105l-4.184-4.185h14.656c0.436,0,0.788-0.353,0.788-0.788
	S18.707,9.212,18.271,9.212z"
        ></path>
      </svg>
    </span>
    <img
      src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682826732/ngrg4put4ogyaaiikny1.png"
      alt=""
      sizes=""
      srcset=""
    />
    <span class="text-3xl text-white font-bold"> ひさしぶり!</span>
    <span class="text-sm text-white"> ¡Hola, te extrañamos!</span>
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
