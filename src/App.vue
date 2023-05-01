<template>
  <router-view></router-view>
</template>

<script>
import useAuth from "./modules/auth/composables/useAuth";
import Swal from "sweetalert2";
export default {
  setup() {
    const { authStatus, checkAuthStatus } = useAuth();

    return {
      authStatus,
    };
  },
};
</script>
