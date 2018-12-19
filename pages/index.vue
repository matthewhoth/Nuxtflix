<template>
  <div>
    <no-ssr>
      <div v-if="!$store.state.user" id="welcome">
        <div>
          <div class="welcome_title">
            Welcome to
            <span>
              Nuxt
              <strong>Flix</strong>
            </span>
          </div>
          <p>
            Please
            <strong>register</strong> and
            <strong>login</strong> to rate movies!
          </p>
        </div>
      </div>
      <div v-else>
        <div>Get Username {{$store.state.user}}</div>
      </div>
    </no-ssr>
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
