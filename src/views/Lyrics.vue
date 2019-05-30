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
            <content-placeholders :rounded="true" v-if="isLoading">
              <content-placeholders-text :lines="5" />
            </content-placeholders>
            <p v-if="lyrics" class="card-text">{{ lyrics.lyrics_body }}</p>
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
import { api } from "@/store/api";

export default {
  data() {
    return {
      isLoading: false,
      lyrics: []
    };
  },

  computed: {
    _track() {
      return this.$store.getters.TRACK(this.$route.params.id);
    }
  },

  mounted() {
    this.fetchLyrics();
  },

  methods: {
    async fetchLyrics() {
      this.isLoading = true;
      let { data } = await api.get(
        `/track.lyrics.get?track_id=${this.$route.params.id}&apikey=${
          process.env.VUE_APP_API_KEY
        }`
      );
      this.isLoading = false;
      this.lyrics = data.message.body.lyrics;
    }
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
