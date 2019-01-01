<template>
  <div class="modal_overlay">
    <div class="modal_wrapper">
      <div
        class="modal_container"
        style="min-width: 35rem; max-width: 495px"
        v-click-outside="onClickOutside"
      >
        <div class="form_header">
          <div class="form_header--title">List of movies that I have rated</div>
          <div class="modal_close">
            <i
              class="icon-circle-rounded-full click click_link"
              @click="$store.dispatch('setRateMoviesModal', false)"
            ></i>
          </div>
        </div>
        <div class="ratedMovies_list--container">
          <div v-for="list of ratedMoviesList" :key="list.id" class="ratedMovies_list">
            <div class="ratedMovies_list--image">
              <img :src="`${$imageUrl()}/movies/${list.image}`" :alt="list.name">
            </div>
            <div>
              <div class="ratedMovies_list--name">{{list.name}}</div>
              <div class="ratedMovies_list--rating">
                <span>
                  <i class="icon-star margin_add--right-1"></i>
                  {{list.rating}} {{list.rating === 1 ? 'star' : 'stars'}}
                </span>
              </div>
              <div class="ratedMovies_list--rating-unrate">
                <span
                  class="click click_link click_link--color-light"
                  @click="removeRate(list.id, 'rating', 0)"
                >Unrate Movie</span>
              </div>
            </div>
          </div>
          <div
            v-if="ratedMoviesList.length === 0"
            class="text--align-center"
          >You did not rate any movies yet!</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import clickOutside from "@/directives/clickOutside";
export default {
  directives: {
    clickOutside
  },
  computed: {
    ratedMoviesList() {
      return this.$store.state.moviesList.filter(obj => {
        console.log(obj.rating > 0);
        return obj.rating > 0;
      });
    }
  },
  mounted() {
    document.body.classList.add("disableOverflow");
  },
  destroyed() {
    document.body.classList.remove("disableOverflow");
  },
  methods: {
    onClickOutside() {
      this.$store.dispatch("setRateMoviesModal", false);
    },
    removeRate(id, propName, value) {
      let data = {
        id: id,
        propName: propName,
        value: value
      };
      this.$store.dispatch("rateMovie", data);
    }
  }
};
</script>

<style lang="scss" scoped>
//Uncomment what you need or add what is missing (Follow import ordering from styles.scss)
/*@import "~assets/styles/variables/variables";*/
@import "~assets/styles/variables/colors";
@import "~assets/styles/helpers/mixins";
//@import "~assets/styles/layout/typography";
.ratedMovies_list--container {
  padding: 2rem;
}
.ratedMovies_list {
  display: flex;
  align-items: center;
  margin: 1rem 0;
  &:first-child {
    margin-top: 0;
  }
  &:last-child {
    margin-bottom: 0;
  }
}
.ratedMovies_list--image {
  margin-right: 1rem;
  img {
    display: block;
    width: 5rem;
    height: 5rem;
    object-fit: contain;
  }
}
.ratedMovies_list--name {
  @include fontSemiBold;
}
.ratedMovies_list--rating {
  font-size: 1.2rem;
  color: $secondary_color_dark;
  @include fontMedium;
  i {
    color: $secondary_color_light;
  }
}
.ratedMovies_list--rating-unrate {
  margin-top: 0.5rem;
  text-transform: uppercase;
  font-size: 1rem;
  @include fontMedium;
  span {
    &:hover {
      color: $state_error_color !important;
    }
  }
}
</style>