<template>
  <div class="row">
    <div v-for="movie in movies" :key="movie.id" class="col-lg-3">{{movie.title}}</div>
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
  mounted() {}
};
</script>