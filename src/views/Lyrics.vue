<template>
  <div class="container mb-3">
    <div class="row h-100 justify-content-center align-items-center">
      <div class="col-md-12">
        <div class="card shadow">
          <div class="card-body">
            <h5 class="card-title">{{ _track.track.track_name }}</h5>
            <h6 class="card-subtitle text-muted">
              {{ _track.track.album_name }}
            </h6>
            <p class="card-text">{{ _track.track.artist_name }}</p>
            <p v-if="_lyrics" class="card-text">{{ _lyrics.lyrics_body }}</p>
            <router-link to="/search" class="btn btn-primary btn-block"
              >Back</router-link
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    _track() {
      return this.$store.getters.TRACK(this.$route.params.id);
    },

    _lyrics() {
      return this.$store.getters.TRACK_LYRICS;
    }
  },

  mounted() {
    this.$store.dispatch("GET_TRACK_LYRICS", this.$route.params.id);
  }
};
</script>

<style scoped>
body,
html,
#app {
  height: 100%;
}
</style>
