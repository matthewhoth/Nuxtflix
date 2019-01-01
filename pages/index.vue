<template>
  <div class="moviesBg">
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
            Let's rate some
            <strong>movies</strong>!
          </p>
        </div>
      </div>
      <div v-else>
        <div class="bootstrap-wrapper">
          <div class="container">
            <moviesList/>
          </div>
        </div>
        <transition name="fade">
          <ratedMovies v-if="$store.state.rateMoviesModalState"/>
        </transition>
      </div>
    </no-ssr>
  </div>
</template>

<script>
import moviesList from "@/components/movies/movies-list";
import ratedMovies from "@/components/modals/user/rated-movies";
export default {
  components: { moviesList, ratedMovies },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
