import { api } from "../api";

export default {
  state: {
    track_list: null
  },

  getters: {
    TRACK_LIST: state => {
      return state.track_list;
    }
  },

  mutations: {
    SET_TRACK_LIST: (state, payload) => {
      state.track_list = payload;
    }
  },

  actions: {
    GET_TRACK_LIST: async (context, payload) => {
      let { data } = await api.get(
        "/chart.tracks.get?page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=64d8d5fb7b7d91562b2250b2f449f2ad"
      );
      context.commit("SET_TRACK_LIST", data.message.body.track_list);
    }
  }
};
