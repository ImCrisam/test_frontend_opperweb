<template>
  <div class="flex flex-col justify-start h-full p-16">
    <span class="text-4xl text-white">Crear categoría</span>
    <form @submit.prevent="submitForm">
      <div class="my-7">
        <label class="text-sm text-white" for="email"
          >Nombre de categoría</label
        >
        <input
          type="name"
          id="name"
          v-model="form.name"
          class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
        />
      </div>
      <button
        type="submit"
        class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 text-sm"
      >
        Crear
      </button>
    </form>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    const form = reactive({
      name: "",
    });

    const submitForm = async () => {
      try {
        //const { data } = await axios.post("/api/login", form);
      } catch (error) {
        console.error(error);
      } finally {
        form.name = "";
      }
    };

    return {
      form,
      submitForm,
    };
  },
};
</script>

<style lang="scss" scoped></style>
