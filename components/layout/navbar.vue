<template>
  <div id="navbar">
    <no-ssr>
      <div class="logo">
        <i class="icon-metacafe-logo"></i>
        <strong>Nuxt</strong>Flix
      </div>
      <div class="navbar_links" v-if="!$store.state.user">
        <div
          class="register click click_link click_link--color-light"
          @click="$emit('registerModal')"
        >Register or</div>
        <div class="login click click_link" @click="$emit('loginModal')">Login</div>
      </div>
      <div class="navbar_links" v-else>
        <div class="login click click_link" @click="onLogout()">Logout</div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
export default {
  methods: {
    onLogout() {
      this.$store.dispatch("userLogout");
      this.$notify({
        group: "globalNotifications",
        title: "Farewell!",
        text: `Hope that you will come back soon, take care!`,
        type: "info"
      });
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/components/layout/navbar";
</style>