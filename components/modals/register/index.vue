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
                <label for="username">
                  Username
                  <span class="form_required">*</span>
                </label>
              </div>
            </div>
            <div class="form_control">
              <div class="form_box">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="password"
                  v-model="password"
                  :class="{'focus': password.length > 0}"
                  autocomplete="new-password"
                  minlength="6"
                  maxlength="30"
                  required
                >
                <label for="password">
                  Password
                  <span class="form_required">*</span>
                </label>
                <i
                  class="icon-eye click click_link click_link--color-link"
                  @click="showPassword ? showPassword = false : showPassword = true"
                ></i>
              </div>
            </div>
            <div class="form_control">
              <div class="form_box">
                <input
                  :type="showPassword ? 'text' : 'password'"
                  id="repassword"
                  v-model="repassword"
                  :class="{'focus': repassword.length > 0}"
                  autocomplete="new-repassword"
                  minlength="6"
                  maxlength="30"
                  required
                >
                <label for="repassword">
                  Repeat Password
                  <span class="form_required">*</span>
                </label>
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
      repassword: "",
      showPassword: false
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
      this.$notify({
        group: "globalNotifications",
        title: "Successfully registered!",
        text: `Hello dear ${
          this.username
        }, you are one step closer now, please login!`,
        type: "success"
      });
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
<style lang="scss" scoped>
@import "~assets/styles/variables/colors";
@import "~assets/styles/helpers/mixins";
.form_header {
  background: #fff;
  color: #484848;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 4px;
  border-width: 1px;
  border-style: solid;
  border-color: rgb(235, 235, 235);
  border-radius: 4px;
}
.form_group {
  color: $primary_color_text;
}
</style>