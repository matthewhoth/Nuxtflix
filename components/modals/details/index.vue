<template>
  <div class="modal_overlay">
    <div class="modal_wrapper">
      <div
        class="modal_container"
        style="min-width: 35rem; max-width: 495px"
        v-click-outside="onClickOutside"
      >
        <div class="form_header">
          <div class="form_header--title">{{movieData.name}} ({{movieData.year}})</div>
          <div class="modal_close">
            <i
              class="icon-circle-rounded-full click click_link"
              @click="$emit('closeMoviesDetailsModal')"
            ></i>
          </div>
        </div>
        <div>
          <div class="movie_details--trailer" v-if="movieData.about.youtubeCode">
            <iframe
              width="100%"
              height="250"
              :src="`https://www.youtube-nocookie.com/embed/${movieData.about.youtubeCode}`"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="movie_details--about">
            <div v-if="movieData.about.genres">
              <div>
                <strong>Genres:</strong>
              </div>
              <div>
                <span
                  v-for="(genre, index) in movieData.about.genres"
                  :key="index"
                >{{genre}}{{movieData.about.genres.length > 1 && movieData.about.genres.length - 1 > index ? ', ' : ''}}</span>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.about.directors">
              <div>
                <strong>Director:</strong>
              </div>
              <div>
                <span
                  v-for="(director, index) in movieData.about.directors"
                  :key="index"
                >{{director}}{{movieData.about.directors.length > 1 && movieData.about.directors.length - 1 > index ? ', ' : ''}}</span>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.about.writers">
              <div>
                <strong>Writers:</strong>
              </div>
              <div>
                <span
                  v-for="(writer, index) in movieData.about.writers"
                  :key="index"
                >{{writer}}{{movieData.about.writers.length > 1 && movieData.about.writers.length - 1 > index ? ', ' : ''}}</span>
                <a
                  class="click click_link click_link--color-link"
                  :href="movieData.about.writersMore"
                  target="_blank"
                  v-if="movieData.about.writersMore"
                >+ 1 more</a>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.about.stars">
              <div>
                <strong>Stars:</strong>
              </div>
              <div>
                <span
                  v-for="(star, index) in movieData.about.stars"
                  :key="index"
                >{{star}}{{movieData.about.stars.length > 1 && movieData.about.stars.length - 1 > index ? ', ' : ''}}</span>
                <a
                  class="click click_link click_link--color-link"
                  :href="movieData.about.starsMore"
                  target="_blank"
                  v-if="movieData.about.starsMore"
                >+ 1 more</a>
              </div>
            </div>
            <div class="margin_add--top-1" v-if="movieData.about.description">
              <div>
                <strong>Description:</strong>
              </div>
              <p>{{movieData.about.description}}</p>
            </div>
            <div class="margin_add--top-1" v-if="movieData.about.storyline">
              <div>
                <strong>Storyline:</strong>
              </div>
              <p>
                {{movieData.about.storyline.split(' ').slice(0,readMore).join(' ')}}
                <span
                  class="click click_link click_link--color-link"
                  @click="readMore > 10 ? readMore = 10 : readMore = 999"
                >show {{readMore > 10 ? 'less' : 'more'}}...</span>
              </p>
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
.movie_details--about {
  padding: 2rem;
}
</style>