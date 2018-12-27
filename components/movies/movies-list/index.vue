<template>
  <div>
    <movieCard :movies="moviesList" @rateMovie="onRateMovie"></movieCard>
    <transition name="fadeRating">
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
export default {
  components: {
    movieCard,
    rateMovieModal
  },
  data() {
    return {
      moviesList: [
        {
          id: 1,
          name: "First",
          image: "avengers_2012.jpg",
          rating: 0
        },
        {
          id: 2,
          name: "Second",
          image: "avengers_2012.jpg",
          rating: 2
        },
        {
          id: 3,
          name: "Second",
          image: "avengers_2012.jpg",
          rating: 3
        },
        {
          id: 4,
          name: "Second",
          image: "avengers_2012.jpg",
          rating: 1
        },
        {
          id: 5,
          name: "Second",
          image: "avengers_2012.jpg",
          rating: 3
        }
      ],
      ratingModalState: false,
      rating: 0
    };
  },
  methods: {
    onRateMovie(data) {
      console.log(data);
      this.updateMovie(data.id, "rating", data.rating);
      this.ratingModalState = true;
      this.rating = data.rating;
      // console.log(this.moviesList);
    },
    updateMovie(id, propName, value) {
      let movie = this.moviesList.find(v => {
        return v.id === id;
      });
      if (movie && movie.hasOwnProperty(propName)) {
        movie[propName] = value;
      }
    }
  }
};
</script>