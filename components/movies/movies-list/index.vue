<template>
  <div>Movies list
    <movieCard :movies="moviesList"></movieCard>
  </div>
</template>

<script>
import movieCard from "@/components/ui/movie-card";
export default {
  components: {
    movieCard
  },
  data() {
    return {
      moviesList: [
        {
          id: 1,
          title: "First"
        },
        {
          id: 2,
          title: "Second"
        },
        {
          id: 2,
          title: "Second"
        },
        {
          id: 2,
          title: "Second"
        },
        {
          id: 2,
          title: "Second"
        }
      ]
    };
  }
};
</script>