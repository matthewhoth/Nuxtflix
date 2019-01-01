<template>
  <div>
    <div class="movies_premium">
      <img :src="`${$imageUrl()}/banner.jpg`" alt>
    </div>

    <movieCard
      :movies="$store.state.moviesList"
      @rateMovie="onRateMovie"
      @openMoviesDetailsModal="getMovieDetailsForModal"
    ></movieCard>
    <transition name="fadeRating">
      <movieDetailsModal
        v-if="movieDetailsModalState"
        @closeMoviesDetailsModal="movieDetailsModalState = false"
        :movieData="movieDetailsSingle"
      />
      <rateMovieModal
        v-if="ratingModalState"
        @closeRatingModal="ratingModalState = false"
        :ratingStars="rating"
      />
    </transition>
  </div>
</template>

<script>
import movieCard from "@/components/ui/movie-card";
import rateMovieModal from "@/components/modals/rating/index";
import movieDetailsModal from "@/components/modals/details/index";
import listOfMovies from "@/components/movies/movies-list/movies-list";

export default {
  components: {
    movieCard,
    rateMovieModal,
    movieDetailsModal
  },
  data() {
    return {
      moviesList: listOfMovies,
      ratingModalState: false,
      movieDetailsModalState: false,
      movieDetailsSingle: {},
      rating: 0
    };
  },
  mounted() {
    let movies;
    if (process.browser) {
      movies = localStorage.getItem("moviesList");
    }
    if (!movies) {
      this.$store.dispatch("setMovies", this.moviesList);
    }
  },
  methods: {
    onRateMovie(data) {
      this.updateMovie(data.id, "rating", data.rating);
      this.ratingModalState = true;

      this.rating = data.rating;
    },
    updateMovie(id, propName, value) {
      let data = {
        id: id,
        propName: propName,
        value: value
      };
      this.$store.dispatch("rateMovie", data);
    },
    getMovieDetailsForModal(data) {
      console.log(data);
      this.movieDetailsSingle = data;
      this.movieDetailsModalState = true;
    }
  }
};
</script>
<style lang="scss" scoped>
@import "~assets/styles/variables/colors";
@import "~assets/styles/helpers/mixins";
.movies_premium {
  padding-top: 2rem; 
  @media only screen and (max-width: 468px) {
      display: none;
    }
  img {
    @include border-radius(5px);
  }
}
</style>