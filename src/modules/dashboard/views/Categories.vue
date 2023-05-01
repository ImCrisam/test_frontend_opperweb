<template>
  <div class="flex flex-col h-full md:py-10 px-5 py-5">
    <span class="md:text-4xl text-2xl text-white">Lista de Categorías</span>
    <div
      class="flex flex-wrap gap-x-16 gap-y-10 mt-10 overflow-y-auto justify-center"
    >
      <template v-for="item in listCategories" :key="item.id">
        <div
          class="md:w-72 md:h-40 w-52 h-32 bg-fuchsia-600 rounded-sm flex flex-col justify-center items-center p-3"
        >
          <span class="md:text-4xl text-2xl text-white mt-auto px-5">{{
            item.nombre
          }}</span>
          <button
            class="self-end mt-auto text-white underline"
            @click="onUpdate(item.id)"
          >
            editar
          </button>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import useCategory from "../composables/useCategory";
import { inject } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const { listCategories, getListCategories, selectCategory } = useCategory();
    const router = useRouter();
    const Swal = inject("Swal");

    const getCategories = async () => {
      const { ok, message } = await getListCategories();
      if (!ok) {
        Swal.fire("Error", message, "error");
      }
    };

    getCategories();
    return {
      listCategories,
      onUpdate: (id) => {
        selectCategory(id);
        router.push({ name: "update", params: { id } });
      },
    };
  },
};
</script>
