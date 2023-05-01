<template>
  <div class="flex flex-col justify-start h-full md:p-16 p-4">
    <span class="text-4xl text-white">Actualizar categoría</span>
    <form @submit.prevent="submitForm">
      <div class="md:my-7 my-4">
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
        Actualizar
      </button>
    </form>
  </div>
</template>

<script>
import { reactive, inject } from "vue";
import useCategory from "../composables/useCategory";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { updateCategory, currentCategory } = useCategory();
    const router = useRouter();
    const Swal = inject("Swal");
    //console.log(router.options.history.location);
    const form = reactive({
      name: currentCategory.value.nombre || "",
    });

    const submitForm = async () => {
      try {
        const { ok, message } = await updateCategory({ ...form });
        console.log({ ok, message });
        if (ok) {
          Swal.fire("Categoria", "Categoria Actualizada", "success");
          router.push({ name: "categories" });
        } else {
          Swal.fire("Error", message, "error");
        }
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
