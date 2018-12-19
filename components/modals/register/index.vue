<template>
  <div class="modal_overlay">
    <div class="modal_wrapper">
      <div class="modal_container" style="min-width: 35rem" v-click-outside="onClickOutside">
        <div class="form_header">
          <span>Register Form</span>
          <div class="modal_close">
            <i class="icon-circle-rounded-full click click_link" @click="$emit('registerModal')"></i>
          </div>
        </div>
        <form class="padding_all--2" @submit.prevent="submitRegister">
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
            </div>
            <div class="form_control">
              <div class="form_box">
                <input
                  type="password"
                  id="repassword"
                  v-model="repassword"
                  :class="{'focus': repassword.length > 0}"
                  autocomplete="new-repassword"
                  minlength="6"
                  maxlength="30"
                  required
                >
                <label for="repassword">Repeat Password</label>
              </div>
              <div
                v-if="validateRePassword && repassword.length > 0"
                class="form_error--msg"
              >Password doesn't match!</div>
            </div>
            <div class="form_box margin_add--top-2">
              <button type="submit" :disabled="validateRePassword" class="btn">Register</button>
            </div>
          </div>
        </form>
      </div>
    </div>
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
      username: "",
      password: "",
      repassword: ""
    };
  },
  computed: {
    validateRePassword() {
      return this.password.length > 0
        ? this.password !== this.repassword
        : true;
    }
  },
  mounted() {
    document.getElementById("username").focus();
  },
  methods: {
    onClickOutside() {
      this.$emit("registerModal");
    },
    submitRegister() {
      console.log(this.validateRePassword);
      let data = {
        username: this.username,
        password: this.password
      };
      this.$store.dispatch("registerAccount", data);
      this.$emit("registerModal");
    }
  }
};
</script>