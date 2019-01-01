<template>
  <div class="modal_overlay">
    <div class="modal_wrapper">
      <div>
        <i class="rain icon-star" v-for="n in 50" :key="n"></i>
      </div>
      <div class="text--align-center padding_all--2">
        <div>
          <h3>Nice! You gave this movie</h3>
        </div>
        <div class="ratingStar_box" v-click-outside="onClickOutisde">
          <i
            class="icon-star"
            :class="{active: ratingStars === 1 || ratingStars === 2 || ratingStars === 3 || ratingStars === 4 || ratingStars === 5}"
          ></i>
          <i
            class="icon-star"
            :class="{active: ratingStars === 2 || ratingStars === 3 || ratingStars === 4 || ratingStars === 5}"
          ></i>
          <i
            class="icon-star"
            :class="{active: ratingStars === 3 || ratingStars === 4 || ratingStars === 5}"
          ></i>
          <i class="icon-star" :class="{active: ratingStars === 4 || ratingStars === 5}"></i>
          <i class="icon-star" :class="{active: ratingStars === 5}"></i>
        </div>
        <div>
          <h4>{{ratingStars}} out of 5 stars!</h4>
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
    ratingStars: {
      type: Number,
      required: true
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    document.body.classList.add("disableOverflow");
    setTimeout(() => {
      this.$emit("closeRatingModal");
    }, 2500);
  },
  destroyed() {
    document.body.classList.remove("disableOverflow");
  },
  methods: {
    onClickOutisde() {
      this.$emit("closeRatingModal");
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
.modal_overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.ratingStar_box {
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
}
.icon-star {
  -webkit-animation: starAnimation 0.5s ease-in both;
  animation: starAnimation 0.5s ease-in both;
  font-size: 3rem;
  margin: 0 0.5rem;
  opacity: 1;
  &.active {
    color: #fc0;
    text-shadow: #fc0 0 0 20px;
  }
  &:nth-child(1) {
    @include animationDelay(0.2s);
  }
  &:nth-child(2) {
    @include animationDelay(0.4s);
  }
  &:nth-child(3) {
    @include animationDelay(0.6s);
  }
  &:nth-child(4) {
    @include animationDelay(0.8s);
  }
  &:nth-child(5) {
    @include animationDelay(1s);
  }
}
@-webkit-keyframes starAnimation {
  0% {
    opacity: 0;
    font-size: 6rem;
  }
  100% {
    opacity: 1;
  }
}
@keyframes starAnimation {
  0% {
    opacity: 0;
    font-size: 6rem;
  }
  100% {
    opacity: 1;
  }
}

// Rain
.rain {
  height: 50px;
  position: absolute;
  width: 1px;
  color: #fc0;
  text-shadow: #fc0 0 0 20px;
}
$rain: 150;
@for $i from 1 through $rain {
  $top: (random(50) + 50) * 1%;
  $left: random(100) * 1%;
  $opacity: (random(30) + 30) * 0.01;
  $delay: (random(20) - 3s) - 1;
  .rain:nth-of-type(#{$i}) {
    animation-name: rain-#{$i};
    @include animationDelay($delay);
    -webkit-animation-duration: random(6) + 1s;
    -moz-animation-duration: random(6) + 1s;
    -o-animation-duration: random(6) + 1s;
    animation-duration: random(6) + 1s;
    -webkit-animation-iteration-count: infinite;
    -moz-animation-iteration-count: infinite;
    -o-animation-iteration-count: infinite;
    animation-iteration-count: infinite;
    left: $left;
    opacity: $opacity;
    top: -$top;
  }
  @keyframes rain-#{$i} {
    0% {
      left: $left;
      opacity: $opacity;
      top: -$top;
    }
    100% {
      opacity: 0;
      top: $top + 40%;
    }
  }
}
</style>