<template>
  <div class="flex flex-col h-full py-10 ps-5">
    <span class="text-4xl text-white">Lista de Categorías</span>
    <div
      class="flex flex-wrap gap-x-16 gap-y-10 mt-10 overflow-y-auto justify-center"
    >
      <template v-for="item in listCategories" :key="item.id">
        <div
          class="w-72 h-40 bg-fuchsia-600 rounded-sm flex flex-col justify-center items-center p-3"
        >
          <span class="text-4xl text-white mt-auto px-5">{{
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
import Swal from "sweetalert2";
import { useRouter } from "vue-router";
export default {
  setup() {
    const { listCategories, getListCategories, selectCategory } = useCategory();
    const router = useRouter();

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
