<template>
  <div id="navbar">
    <no-ssr>
      <div class="logo">
        <i class="icon-metacafe-logo"></i>
        <strong>Nuxt</strong>Flix
      </div>
      <div class="navbar_links" v-if="!$store.state.user">
        <div
          class="login click click_link"
          @click="$store.state.accountDetails.length !== 0 ? $emit('loginModal') : $emit('registerModal')"
        >{{$store.state.accountDetails.length !== 0 ? 'Login' : 'Register'}}</div>
      </div>
      <div class="navbar_links margin_add--right-2" v-else>
        <span class="navbar_links--username">{{$store.state.user}}</span>
        <span
          class="click click_link click_link--color-light"
          @click="profileDropdown ? profileDropdown = false : profileDropdown = true"
        >
          <img
            :src="`${$imageUrl()}/avatar.jpg`"
            class="avatar avatar--inline avatar--small avatar--align-middle avatar--rounded"
          >
          <span class="navbar_links--username-arrow">
            <i class="icon-arrow-down"></i>
          </span>
        </span>

        <transition name="fade">
          <div
            class="navbar_links--dropdown"
            v-if="profileDropdown"
            v-click-outside="onClickOutside"
          >
            <div class="navbar_links--dropdown-inner">
              <ul>
                <li>
                  <a
                    @click="openRatedMoviesModal()"
                    class="click click_link click_link--color-light"
                  >
                    <i class="icon-star"></i>What movies I have rated?
                  </a>
                </li>
                <li
                  class="navbar_links--dropdown-inner-logOut click click_link"
                  @click="onLogout()"
                >
                  <a>
                    <i class="icon-download"></i>Log Out
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </transition>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import clickOutside from "@/directives/clickOutside";
export default {
  directives: {
    clickOutside
  },
  data() {
    return {
      profileDropdown: false
    };
  },
  methods: {
    onLogout() {
      this.$store.dispatch("userLogout");
      this.$notify({
        group: "globalNotifications",
        title: "Farewell!",
        text: `Hope that you will come back soon, take care!`,
        type: "info"
      });
      this.onClickOutside();
    },
    openRatedMoviesModal() {
      this.$store.dispatch("setRateMoviesModal", true);
    },
    onClickOutside() {
      this.profileDropdown = false;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~assets/styles/components/layout/navbar";
</style>