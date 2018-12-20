import Vue from "vue";

Vue.mixin({
  methods: {
    $imageUrl() {
      return process.env.baseUrl;
    }
  }
});
