<template>
  <div>
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

export default {
  components: {
    movieCard,
    rateMovieModal,
    movieDetailsModal
  },
  data() {
    return {
      moviesList: [],
      ratingModalState: false,
      movieDetailsModalState: false,
      movieDetailsSingle: {},
      rating: 0,
      videoURL: "empty"
    };
  },

  mounted() {
    let movies;
    if (process.browser) {
      movies = localStorage.getItem("moviesList");
    }
    if (!movies) {
      this.fetchData();
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
    },

    fetchData: async function() {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=198c27d36e884f8226446016f0cfc7e4&append_to_response=videos"
        );
        const movies = await res.json();
        movies.results = movies.results.map(obj => ({
          ...obj,
          rating: 0
        }));

        this.moviesList = movies.results;
      } catch (e) {
        console.log(e);
      }
      this.$store.dispatch("setMovies", this.moviesList);
      console.log(JSON.parse(JSON.stringify(this.moviesList)));
    },
    fetchVideo() {
      console.log("example  here");
    }
    /* fetchVideo2: async function() {
      const res = await fetch(
        `https://api.themoviedb.org/3/movie/404368/videos?api_key=198c27d36e884f8226446016f0cfc7e4&language=en-US`
      );
      const movies = await res.json();
      const result = await movies.results[0].key;
      return result;
    } */
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