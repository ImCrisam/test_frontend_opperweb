<template>
  <div class="w-full relative">
    <div class="carousel-wrapper">
      <div class="carousel-inner">
        <div
          v-for="(item, index) in items"
          :key="index"
          class="carousel-item flex justify-center items-center w-full flex-col"
          v-show="index === currentIndex"
        >
          <div
            class="relative w-8/12 overflow-visible flex flex-col items-center"
          >
            <img
              src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682851034/tnpnmdscpso4krhqea9o.png"
              class="absolute -top-24 object-cover max-h-96"
              alt=""
            />
            <img :src="item.src" class="relative max-h-96" alt="" />
          </div>
          <span class="font-bold text-white text-7xl">
            anime<span class="text-fuchsia-400">{{ item.name }}</span></span
          >
          <div class="text-white w-2/3 flex flex-col items-center mt-3">
            <span class=""
              >Ver anime en línea en HD, subtitulado o doblado,
            </span>
            <span>en tu celular o computadora.</span>
            <span>¡Animeyabu, tu portal de anime en línea!</span>
          </div>
        </div>
      </div>
      <button
        @click="prev()"
        class="absolute left-0 top-0 h-full w-16 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click="next()"
        class="absolute right-0 top-0 h-full w-16 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-all duration-150"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: "Carousel",
  components: {},
  setup() {
    const items = ref([
      {
        src: "https://res.cloudinary.com/dwmznusxf/image/upload/v1682851025/hl7plctepel3gqzu4ljc.png",
        name: "yabu",
      },
      {
        src: "https://res.cloudinary.com/dwmznusxf/image/upload/v1682851028/q0ah3rxsqxpukc0l7uwl.png",
        name: "Kyojuro",
      },
      {
        src: "https://res.cloudinary.com/dwmznusxf/image/upload/v1682851031/qh7oug7tzu8lrq2hbkps.png",
        name: "Inosuke",
      },
    ]);
    const currentIndex = ref(0);

    const prev = () => {
      currentIndex.value =
        currentIndex.value === 0
          ? items.value.length - 1
          : currentIndex.value - 1;
    };

    const next = () => {
      currentIndex.value =
        currentIndex.value === items.value.length - 1
          ? 0
          : currentIndex.value + 1;
    };

    return {
      items,
      currentIndex,
      prev,
      next,
    };
  },
};
</script>

<style scoped></style>
