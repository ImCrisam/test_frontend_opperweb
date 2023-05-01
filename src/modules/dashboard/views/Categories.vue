<template>
  <div class="flex flex-col h-full p-16">
    <span class="text-4xl text-white">Lista de Categorías</span>
    <div class="flex flex-wrap gap-x-16 gap-y-10 mt-16">
      <template v-for="item in listCategories" :key="item.id">
        <div
          class="w-72 h-40 bg-fuchsia-600 rounded-sm flex flex-col justify-center items-center p-3"
        >
          <span class="text-4xl text-white mt-auto px-5">{{
            item.nombre
          }}</span>
          <span class="self-end mt-auto text-white underline">
            <router-link :to="{ name: 'update', params: { id: item.id } }">
              editar
            </router-link>
          </span>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import useCategory from "../composables/useCategory";
import Swal from "sweetalert2";
export default {
  setup() {
    const { listCategories, getListCategories } = useCategory();

    const getCategories = async () => {
      const { ok, message } = await getListCategories();
      if (!ok) {
        Swal.fire("Error", message, "error");
      }
    };

    getCategories();
    return {
      listCategories,
    };
  },
};
</script>
