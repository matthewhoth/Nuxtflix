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
import Cookies from "js-cookie";
export default {
  components: {
    movieCard,
    rateMovieModal,
    movieDetailsModal
  },
  data() {
    return {
      moviesList: [
        {
          id: 1,
          name: "The Avengers",
          year: 2012,
          image: "avengers_2012.jpg",
          rating: 0
        },
        {
          id: 2,
          name: "Deadpool 2",
          year: 2018,
          image: "deadpool2_2018.jpg",
          rating: 0
        },
        {
          id: 3,
          name: "Black Panther",
          year: 2018,
          image: "blackpanther_2018.jpg",
          rating: 0
        },
        {
          id: 4,
          name: "Ant-man",
          year: 2015,
          image: "antman_2015.jpg",
          rating: 0
        },
        {
          id: 5,
          name: "Jurastic World: Fallen Kingdom",
          year: 2018,
          image: "jurasticworld_2018.jpg",
          rating: 0
        }
      ],
      ratingModalState: false,
      movieDetailsModalState: false,
      movieDetailsSingle: {},
      rating: 0
    };
  },
  mounted() {
    const movies = Cookies.get("moviesList");
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