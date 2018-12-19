<template>
  <div class="modal_overlay">
    <div class="modal_wrapper">
      <div class="modal_container" style="min-width: 35rem" v-click-outside="onClickOutside">
        <div class="form_header">
          <span>Login Form</span>
          <div class="modal_close">
            <i class="icon-circle-rounded-full click click_link" @click="$emit('loginModal')"></i>
          </div>
        </div>
        <form class="padding_all--2" @submit.prevent="submitLogin">
          <div class="form_group">
            <div class="form_control">
              <div class="form_box">
                <input
                  type="text"
                  id="username"
                  v-model="username"
                  :class="{'focus': username.length > 0}"
                  autocomplete="new-username"
                  minlength="6"
                  maxlength="30"
                  required
                >
                <label for="username">Username</label>
              </div>
              <div class="form_error--msg" v-if="usernameValidation">Username is wrong!</div>
            </div>
            <div class="form_control">
              <div class="form_box">
                <input
                  type="password"
                  id="password"
                  v-model="password"
                  :class="{'focus': password.length > 0}"
                  autocomplete="new-password"
                  minlength="6"
                  maxlength="30"
                  required
                >
                <label for="password">Password</label>
              </div>
              <div class="form_error--msg" v-if="passwordValidation">Password is wrong!</div>
              <div
                class="form_error--msg"
                v-if="!hasAccount"
              >You do not have account yet! Please register!</div>
            </div>
            <div class="form_box margin_add--top-2">
              <button type="submit" :disabled="!validateForm" class="btn">Login</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import Cookies from "js-cookie";
import clickOutside from "@/directives/clickOutside";
export default {
  directives: {
    clickOutside
  },
  data() {
    return {
      hasAccount: true,
      username: "",
      usernameValidation: false,
      password: "",
      passwordValidation: false
    };
  },
  computed: {
    validateForm() {
      return this.username.length > 0 && this.password.length > 0;
    }
  },
  mounted() {
    document.getElementById("username").focus();
  },
  methods: {
    onClickOutside() {
      this.$emit("loginModal");
    },
    submitLogin() {
      this.usernameValidation = false;
      this.passwordValidation = false;
      const accountDetails = Cookies.get("accountDetails");
      if (accountDetails === undefined) {
        this.hasAccount = false;
      } else {
        let checkAccount = JSON.parse(accountDetails);
        if (checkAccount.username !== this.username) {
          this.usernameValidation = true;
        } else if (checkAccount.password !== this.password) {
          this.passwordValidation = true;
        } else {
          this.$store.dispatch("setUser", this.username);
          this.$emit("loginModal");
        }
      }
    }
  }
};
</script>