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
        <div class="bootstrap-wrapper">
          <div class="container">
            <moviesList/>
          </div>
        </div>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import moviesList from "@/components/movies/movies-list";

export default {
  components: { moviesList },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
