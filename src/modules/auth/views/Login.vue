<!-- Login.vue -->
<template>
    <div>
      <h2>Iniciar sesión</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Correo electrónico:</label>
          <input type="email" id="email" v-model="email">
        </div>
        <div>
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password">
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  </template>
  
  <script>
  import { reactive } from 'vue';
  import { useStore } from 'vuex';
  import axios from 'axios';
  
  export default {
    setup() {
      const store = useStore();
  
      const form = reactive({
        email: '',
        password: '',
      });
  
      const submitForm = async () => {
        try {
          const { data } = await axios.post('/api/login', form);
          store.dispatch('login', data);
        } catch (error) {
          console.error(error);
        } finally {
          form.email = '';
          form.password = '';
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
  