import { api } from "../api";

export default {
  state: {
    pokemon: null
  },

  getters: {
    POKE: state => {
      return state.pokemon;
    }
  },

  mutations: {
    SET_POKE: (state, payload) => {
      state.pokemon = payload;
    }
  },

  actions: {
    GET_POKE: async (context, payload) => {
      let { data } = await api.get("/pokemon/ditto");
      context.commit("SET_POKE", data);
    }
  }
};
