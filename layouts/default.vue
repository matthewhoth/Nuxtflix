<template>
  <div>
    <navbarPrimary @registerModal="onRegister" @loginModal="onLogin"/>
    <nuxt/>
    <transition name="fade">
      <registerModal v-if="registerModalState" @registerModal="onRegister"/>
      <loginModal v-if="loginModalState" @loginModal="onLogin"/>
    </transition>
  </div>
</template>

<script>
import navbarPrimary from "@/components/layout/navbar";
import registerModal from "@/components/modals/register/index";
import loginModal from "@/components/modals/login/index";
export default {
  head() {
    return {
      title: "NuxtFlix"
    };
  },

  components: {
    navbarPrimary,
    registerModal
  }
};
</script>
