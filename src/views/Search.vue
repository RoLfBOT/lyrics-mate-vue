<template>
  <div class="container h-100">
    <div class="card mb-2 shadow">
      <div class="card-body">
        <h3 class="card-title text-center">Search Lyrics</h3>
        <form class="col-12">
          <div class="form-group">
            <input
              type="text"
              class="form-control"
              id="formGroupExampleInput"
              placeholder="Search by track name"
              @input="debounceInput"
            />
          </div>
        </form>
        <button class="btn btn-primary btn-block">Search</button>
      </div>
    </div>
    <div class="row">
      <Track v-for="track in track_list" :key="track.track_id" :track="track" />
    </div>
  </div>
</template>

<script>
import Track from "@/components/Track.vue";
import _ from "lodash";

export default {
  name: "search",
  components: {
    Track
  },

  mounted() {
    this.$store.dispatch("GET_TRACK_LIST");
  },

  computed: {
    track_list() {
      return this.$store.getters.TRACK_LIST;
    }
  },

  methods: {
    debounceInput: _.debounce(function(e) {
      this.$store.dispatch("SEARCH_TRACK_LIST", e.target.value);
    }, 500)
  }
};
</script>
