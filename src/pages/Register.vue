<script>
import { reactive } from "vue";
import { useStore } from "vuex";
import { inject } from "vue";
import { signature } from "../utils/api";
export default {
  setup() {
    const store = useStore();
    const axios = inject("axios");

    const form = reactive({
      name: "randomusername12",
      lastname: "randomusername12",
      telephone: "12345678932",
      razon_social: "",
      NIT: "",
      type_user_id: "2",
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
  <div>
    <h2>Iniciar sesión</h2>
    <form @submit.prevent="submitForm">
      <div>
        <label for="name">Nombre:</label>
        <input type="text" id="name" v-model="form.name" />
      </div>
      <div>
        <label for="lastName">Apellido:</label>
        <input type="text" id="lastName" v-model="form.lastName" />
      </div>
      <div>
        <label for="phone">Telefono:</label>
        <input type="number" id="phone" v-model="form.phone" />
      </div>
      <div>
        <label for="identification">Numero de identificacion:</label>
        <input type="text" id="identification" v-model="form.identification" />
      </div>
      <div>
        <label for="email">Correo electrónico:</label>
        <input type="email" id="email" v-model="form.email" />
      </div>
      <div>
        <label for="password">Contraseña:</label>
        <input type="password" id="password" v-model="form.password" />
      </div>
      <div>
        <label for="confirmPassword">Confirmar Contraseña:</label>
        <input
          type="password"
          id="confirmPassword"
          v-model="form.confirmPassword"
        />
      </div>
      <button type="submit">Registrar</button>
    </form>
  </div>
</template>
