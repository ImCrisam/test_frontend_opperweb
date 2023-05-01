<template>
  <div class="flex flex-row">
    <div
      class="bg-black max-[768px]:bg-gradient-to-b from-fuchsia-200 to-black min-h-screen flex flex-col items-center p-2 justify-between md:w-1/2 w-screen"
    >
      <div class="flex flex-col self-start m-2">
        <div class="md:flex items-center self-start mb-3 hidden">
          <img
            src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682856062/vpmxm10fxx6ttjakuahv.png"
            alt="icons pages"
            class="mr-3 w-8"
          />
          <span class="font-bold text-white">
            anime<span class="text-fuchsia-400">yabu</span></span
          >
        </div>
        <button class="self-start" @click="onBack">
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
        </button>
      </div>
      <div class="flex flex-col">
        <router-view />
      </div>
      <div></div>
    </div>
    <div
      class="md:w-1/2 md:bg-fuchsia-600 h-auto hidden md:flex justify-center items-center"
    >
      <Carousel></Carousel>
    </div>
  </div>
</template>

<script>
import Carousel from "../components/Carousel.vue";
import { useRouter } from "vue-router";
export default {
  components: {
    Carousel: Carousel,
  },

  setup() {
    const router = useRouter();

    return {
      onBack: () => router.back(),
    };
  },
};
</script>

<style lang="scss" scoped></style>
