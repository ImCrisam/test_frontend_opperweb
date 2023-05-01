<template>
  <div class="flex flex-col items-center">
    <img
      src="https://res.cloudinary.com/dwmznusxf/image/upload/v1682826732/ngrg4put4ogyaaiikny1.png"
      alt=""
      sizes=""
      srcset=""
    />
    <span class="text-3xl text-white font-bold"> ひさしぶり!</span>
    <span class="text-sm text-white"> ¡Hola, te extrañamos!</span>
    <div class="max-w-xs mt-4">
      <form @submit.prevent="submitForm">
        <div>
          <label class="text-sm text-white" for="email">email</label>
          <input
            type="email"
            id="email"
            v-model="form.email"
            class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          />
        </div>
        <div>
          <label class="text-sm text-white" for="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            v-model="form.password"
            class="border-2 border-white rounded-lg w-full p-2 bg-white bg-opacity-70"
          />
        </div>
        <span class="text-sm text-fuchsia-200 text-right block mt-2"
          >¿Olvido la contraseña?</span
        >
        <button
          type="submit"
          class="w-full mt-4 rounded-lg border-1 border-fuchsia-600 text-fuchsia-600 bg-fuchsia-200 p-3 text-sm"
        >
          Acceder
        </button>
      </form>
      <SocialBtn islogin></SocialBtn>
    </div>
  </div>
</template>

<script>
import { reactive, inject } from "vue";
import { useRouter } from "vue-router";
import useAuth from "../composables/useAuth";
import SocialBtn from "../components/SocialBtn.vue";
export default {
  components: {
    SocialBtn,
  },
  setup() {
    const router = useRouter();
    const { loginUser } = useAuth();
    const Swal = inject("Swal");
    const form = reactive({
      email: "randommail21@mail.com",
      password: "strongkey12321",
    });

    const submitForm = async () => {
      try {
        const { ok, message } = await loginUser({ ...form });
        if (ok) {
          router.push({ name: "user" });
        } else {
          Swal.fire("Error", message, "error");
        }
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
