<template>
  <div>
    <div v-if="$store.state.user">Get Username {{JSON.parse($store.state.user).username}}</div>
    <div @click="setUser()">Register</div>
    <div @click="$store.dispatch('setUser', '')">Clear Local Storage</div>
    <div></div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {
    setUser() {
      let data = {
        id: 1,
        username: "admin",
        rank: "superadmin"
      };
      this.$store.dispatch("setUser", data);
    }
  }
};
</script>
