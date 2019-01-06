<template>
  <div class="modal_overlay">
    <div class="modal_wrapper">
      <div
        class="modal_container"
        style="min-width: 35rem; max-width: 495px"
        v-click-outside="onClickOutside"
      >
        <div class="form_header">
          <div class="form_header--title">{{movieData.title}}</div>
          <div class="modal_close">
            <i
              class="icon-circle-rounded-full click click_link"
              @click="$emit('closeMoviesDetailsModal')"
            ></i>
          </div>
        </div>
        <div>
          <div class="movie_details--trailer" v-if="movieData.video">
            <iframe
              width="100%"
              height="250"
              :src="`https://www.youtube-nocookie.com/embed/`"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="movie_details--about">
            <div v-if="movieData.genre_ids">
              <div>
                <strong>Genres:</strong>
              </div>
              <div>
                <span
                  v-for="(genre, index) in movieData.genres_ids"
                  :key="index"
                >{{genre}}{{movieData.genres_ids.length > 1 && movieData.genres_ids.length - 1 > index ? ', ' : ''}}</span>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.release_date">
              <div>
                <strong>Release Date</strong>
              </div>
              <div>
                <span>{{movieData.release_date}}</span>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.vote_average">
              <div>
                <strong>Average Rating</strong>
              </div>
              <div>
                <span>{{movieData.vote_average}}/////{{movieData.id}}</span>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.rating">
              <div>
                <strong>Your Rating</strong>
              </div>
              <div>
                <span>{{movieData.rating}}</span>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.overview">
              <div>
                <strong>Description:</strong>
              </div>
              <p>{{movieData.overview}}</p>
            </div>
          </div>
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
  props: {
    movieData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      readMore: 10
    };
  },
  computed: {},
  mounted() {
    document.body.classList.add("disableOverflow");
  },
  destroyed() {
    document.body.classList.remove("disableOverflow");
  },
  methods: {
    onClickOutside() {
      this.$emit("closeMoviesDetailsModal");
    }
  }
};
</script>

<style lang="scss" scoped>
//Uncomment what you need or add what is missing (Follow import ordering from styles.scss)
//@import "~assets/styles/variables/variables";
@import "~assets/styles/variables/colors";
@import "~assets/styles/helpers/mixins";
//@import "~assets/styles/layout/typography";
.movie_details--trailer {
}
.click_link--color-link {
  color: $secondary_color_light;
}
.movie_details--about {
  color: $primary_color_text;
  padding: 2rem;
}
</style>