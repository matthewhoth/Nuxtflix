<template>
  <div class="modal_overlay">
    <div class="modal_wrapper">
      <div class="modal_container" style="min-width: 35rem" v-click-outside="onClickOutside">
        <div class="form_header">
          <span>{{movieData.name}} ({{movieData.year}})</span>
          <div class="modal_close">
            <i
              class="icon-circle-rounded-full click click_link"
              @click="$emit('closeMoviesDetailsModal')"
            ></i>
          </div>
        </div>
        <div>Tester</div>
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
  props: {
    movieData: {
      type: Object,
      required: true
    }
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
    validateForm() {}
  },
  mounted() {},
  methods: {
    onClickOutside() {
      this.$emit("closeMoviesDetailsModal");
    }
  }
};
</script>