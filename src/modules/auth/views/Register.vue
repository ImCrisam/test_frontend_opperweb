<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { inject } from "vue";
import { signature } from "../../../utils/api";
import SocialBtn from "../components/SocialBtn.vue";
export default {
  components: {
    SocialBtn,
  },
  setup() {
    const store = useStore();
    const axios = inject("axios");

    const form = reactive({
      name: "randomusername12",
      lastname: "randomusername12",
      telephone: "12345678932",
      razon_social: "",
      NIT: "",
      type_user_id: "1",
      verify_tc: "1",
      identy_document: "12345678921",
      email: "randommail21@mail.com",
      password: "strongkey12321",
      password_confirmation: "strongkey12321",
    });

    const submitForm = async (e) => {
      try {
        const info = await signature();

        const res = axios.post("register", { ...form, ...info });
        console.log(res);
        //store.dispatch("login", data);
      } catch (error) {
        console.error(error);
      } finally {
        form.email = "";
        form.password = "";
      }
    };

    return {
      form,
      submitForm,
    };
  },
};
</script>

<template>
  <div class="flex items-center">
    <img
      src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682833731/jfokloccgzkkzpswgtlz.png"
      alt=""
      sizes=""
      srcset=""
    />
    <div class="flex flex-col">
      <span class="text-3xl text-white font-bold">ようこそ!</span>
      <span class="text-sm text-white">Bienvenido(a)!</span>
    </div>
  </div>
  <div class="max-w-xs">
    <form @submit.prevent="submitForm">
      <div class="flex my-6">
        <label for="inline-radio" class="text-sm text-white me-3"
          >Tipo de persona</label
        >
        <div class="flex items-center mr-4">
          <input
            id="inline-radio"
            type="radio"
            value="2"
            name="inline-radio-group"
            class="w-4 h-4"
            v-model="form.type_user_id"
          />
          <label for="inline-radio" class="ml-2 text-sm text-white"
            >Natural</label
          >
        </div>
        <div class="flex items-center mr-4">
          <input
            id="inline-2-radio"
            type="radio"
            value="1"
            name="inline-radio-group"
            class="w-4 h-4"
            v-model="form.type_user_id"
          />
          <label for="inline-2-radio" class="ml-2 text-sm text-white"
            >Jurídica</label
          >
        </div>
      </div>
      <div v-if="form.type_user_id == 1">
        <label class="text-sm text-white" for="name">Razón social</label>
        <input
          type="text"
          id="razon_social"
          v-model="form.razon_social"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
        />
      </div>
      <div v-if="form.type_user_id == 1">
        <label class="text-sm text-white" for="name">NIT</label>
        <input
          type="text"
          id="nit"
          v-model="form.NIT"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
        />
      </div>
      <div v-if="form.type_user_id == 2">
        <label class="text-sm text-white" for="name">Nombre</label>
        <input
          type="text"
          id="name"
          v-model="form.name"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
        />
      </div>
      <div v-if="form.type_user_id == 2">
        <label class="text-sm text-white" for="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          v-model="form.lastname"
        />
      </div>
      <div>
        <label class="text-sm text-white" for="phone">Telefono:</label>
        <input
          type="number"
          id="phone"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          v-model="form.telephone"
        />
      </div>
      <div v-if="form.type_user_id == 2">
        <label class="text-sm text-white" for="identification"
          >Numero de identificacion:</label
        >
        <input
          type="text"
          id="identification"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          v-model="form.identy_document"
        />
      </div>
      <div>
        <label class="text-sm text-white" for="email"
          >Correo electrónico:</label
        >
        <input
          type="email"
          id="email"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          v-model="form.email"
        />
      </div>
      <div>
        <label class="text-sm text-white" for="password">Contraseña:</label>
        <input
          type="password"
          id="password"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          v-model="form.password"
        />
      </div>
      <div>
        <label class="text-sm text-white" for="confirmPassword"
          >Confirmar Contraseña:</label
        >
        <input
          type="password"
          id="confirmPassword"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          v-model="form.password_confirmation"
        />
      </div>
      <button
        type="submit"
        class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 text-sm"
      >
        Registrar
      </button>
    </form>
    <SocialBtn></SocialBtn>
  </div>
</template>
