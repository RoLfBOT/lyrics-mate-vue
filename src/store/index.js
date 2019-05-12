import Vue from "vue";
import Vuex from "vuex";
import track from "./modules/track";
import lyrics from "./modules/lyrics";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    track,
    lyrics
  }
});
