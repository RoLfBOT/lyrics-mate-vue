import { api } from "../api";

export default {
  state: {
    lyrics: null
  },

  getters: {
    TRACK_LYRICS: state => {
      return state.lyrics;
    }
  },

  mutations: {
    SET_TRACK_LYRICS: (state, payload) => {
      state.lyrics = payload;
    }
  },

  actions: {
    GET_TRACK_LYRICS: async (context, payload) => {
      let { data } = await api.get(
        `/track.lyrics.get?track_id=${payload}&apikey=${process.env.API_KEY}`
      );
      context.commit("SET_TRACK_LYRICS", data.message.body.lyrics);
    }
  }
};
