<template>
  <div>
    <navbarPrimary @registerModal="onRegister" @loginModal="onLogin"/>
    <nuxt/>
    <transition name="fade">
      <registerModal v-if="registerModalState" @registerModal="onRegister"/>
      <loginModal v-if="loginModalState" @loginModal="onLogin"/>
    </transition>
    <no-ssr>
      <notifications group="globalNotifications"/>
    </no-ssr>
  </div>
</template>

<script>
import navbarPrimary from "@/components/layout/navbar";
import registerModal from "@/components/modals/register/index";
import loginModal from "@/components/modals/login/index";

export default {
  head() {
    return {
      title: "Nuxtflix"
    };
  },

  components: {
    navbarPrimary,
    registerModal,
    loginModal
  },

  data() {
    return {
      registerModalState: false,
      loginModalState: false
    };
  },

  methods: {
    onRegister() {
      this.registerModalState = !this.registerModalState;
    },

    onLogin() {
      this.loginModalState = !this.loginModalState;
    }
  }
};
</script>
