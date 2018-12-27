<template>
    <div class="row">
      <div v-for="movie in movies" :key="movie.id" class="movies_cards">
        <div class="flip">

          <div class="front">
            <img :src="`${$imageUrl()}/movies/${movie.image}`" :alt="movie.name">
            <div class="front_cover">
              <div>
                <div class="movie_name">{{movie.name}} ({{movie.year}})</div>
                <div class="movie_rating"><i class="icon-star"></i>{{movie.rating === 0 ? 'No rating' : movie.rating}} <span v-if="movie.rating > 0">{{movie.rating === 1 ? 'star' : `stars`}}</span></div>
              </div>
            </div>
          </div>

          <div class="back">
            <div class="back_cover">
              <img :src="`${$imageUrl()}/movies/${movie.image}`" :alt="movie.name">
            </div>
            <div>
              <div class="movie_name text--align-center">
                {{movie.name}} ({{movie.year}})
              </div>
              <div class="movie_cover">
                <img :src="`${$imageUrl()}/movies/${movie.image}`" :alt="movie.name">
              </div>
              <div class="movie_rate">
                Rate movie
              </div>
              <div class="display_flex display_flex--alignItems-center">
               <span class="rate">
                  <i :class="{active: movie.rating === 1 || movie.rating === 2 || movie.rating === 3 || movie.rating === 4 || movie.rating === 5}" @click="onRate(movie.id, 1)">★</i>
                  <i :class="{active: movie.rating === 2 || movie.rating === 3 || movie.rating === 4 || movie.rating === 5}" @click="onRate(movie.id, 2)">★</i>
                  <i :class="{active: movie.rating === 3 || movie.rating === 4 || movie.rating === 5}" @click="onRate(movie.id, 3)">★</i>
                  <i :class="{active: movie.rating === 4 || movie.rating === 5}" @click="onRate(movie.id, 4)">★</i>
                  <i :class="{active: movie.rating === 5}"  @click="onRate(movie.id, 5)">★</i>
               </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
</template>

<script>
  export default {
    props: {
      movies: {
        type: Array,
        required: true
      }
    },
    mounted(){
    },
    methods: {
      onRate(id, rating){
        let data = {
          id: id,
          rating: rating
        };
        this.$emit('rateMovie', data)
      }
    }
  }
</script>

<style lang="scss" scoped>
  //Uncomment what you need or add what is missing (Follow import ordering from styles.scss)
  //@import "~assets/styles/variables/variables";
  @import "~assets/styles/variables/colors";
  @import "~assets/styles/helpers/mixins";
  //@import "~assets/styles/layout/typography";
  .row{
    margin: 2rem 0;
  }
  .movies_cards{
    width: calc((100%/5) - 2rem);
    margin: 1rem 1rem;
    &:hover {
      .flip{
        @include transform(rotateY( 180deg ));
      }
    }
    @media only screen and (max-width: 1269px) {
      width: calc((100%/4) - 2rem);
      @media only screen and (max-width: 991px) {
        width: calc((100%/3) - 2rem);
        @media only screen and (max-width: 767px) {
          width: calc((100%/2) - 2rem);
          @media only screen and (max-width: 500px) {
            width: calc((100%/1) - 2rem);
          }
        }
      }
    }
    .flip {
      position: relative;
      height: 40rem;
      transform-style: preserve-3d;
      width: 100%;
      max-width: 60vw;
      display: block;
      margin: 0 auto;
      @include transition(transform 1s);
      @include border-radius(5px);
      .front {
        backface-visibility: hidden;
        background: darken($primary_color_dark, 5%);
        color: $primary_color_light;
        height: 100%;
        text-align: center;
        width: 100%;
        pointer-events: none;
        @include fullscreen(relative, 0, initial, initial, 0);
        @include fontSemiBold;
        @include border-radius(5px);
        img{
          width: 100%;
          height: 40rem;
          object-fit: cover;
          @include border-radius(5px);
        }
        .front_cover{
          color: white;
          background-color: rgba(0, 0, 0, .65);
          padding: 2rem;
          display: flex;
          align-items: center;
          justify-content: center;
          @include border-radius(5px);
          @include fullscreen(absolute, 0, 0, 0, 0);
          .movie_rating{
            margin-top: 1rem;
          }
          .icon-star{
            margin-right: .5rem;
            color: $state_warning_color;
          }
        }
      }
      .back {
        backface-visibility: hidden;
        color: $primary_color_light;
        background: darken($primary_color_dark, 5%);
        width: 100%;
        padding: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        @include transform(rotateY( 180deg ));
        @include fullscreen(absolute, 0, 0, 0, 0);
        @include border-radius(5px);
        .back_cover{
          z-index: -1;
          pointer-events: none;
          @include fullscreen(absolute, 0, 0, 0, 0);
          img{
            opacity: .1;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
        }
        .movie_cover{
          margin: 1rem 0;
          text-align: center;
          img{
            width: 10rem;
            height: 10rem;
            object-fit: contain;
          }
        }
        .movie_name{
          @include fontSemiBold;
        }
        .movie_rate{
          font-size: 1rem;
          text-transform: uppercase;
          text-align: center;
          letter-spacing: 1px;
          @include fontSemiBold;
        }
      }
    }
    .rate i, .rate i:hover ~ i {
      color: lighten($primary_color_dark, 10%);
      text-shadow: none;
      transition-delay: 0;
      font-size: 3rem;
      -webkit-transition: color 200ms,
      text-shadow 200ms;
      -moz-transition: color 200ms,
      text-shadow 200ms;
      -ms-transition: color 200ms,
      text-shadow 200ms;
      -o-transition: color 200ms,
      text-shadow 200ms;
      transition: color 200ms,
      text-shadow 200ms;
    }
    .rate {
      width: 100%;
      text-align: center;
      &:hover{
        i{
          color: #fc0;
          text-shadow: #fc0 0 0 20px;
          &:nth-child(2) {
            transition-delay: 30ms;
          }
         &:nth-child(3) {
            transition-delay: 60ms;
          }
          &:nth-child(4) {
            transition-delay: 90ms;
          }
          &:nth-child(5) {
            transition-delay: 120ms;
          }
        }
      }
      i{
        cursor: pointer;
        font-style: normal;
        &.active{
          color: #fc0;
          text-shadow: #fc0 0 0 20px;
        }
      }
    }
  }
</style>