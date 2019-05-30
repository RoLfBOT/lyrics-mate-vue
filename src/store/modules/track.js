import { api } from "../api";

export default {
  state: {
    track_list: null
  },

  getters: {
    TRACK_LIST: state => {
      return state.track_list;
    },

    TRACK: state => id => {
      return state.track_list.find(track => track.track.track_id === id);
    }
  },

  mutations: {
    SET_TRACK_LIST: (state, payload) => {
      state.track_list = payload;
    }
  },

  actions: {
    GET_TRACK_LIST: async context => {
      let { data } = await api.get(
        `/chart.tracks.get?page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=${
          process.env.VUE_APP_API_KEY
        }`
      );
      context.commit("SET_TRACK_LIST", data.message.body.track_list);
    }
  }
};
