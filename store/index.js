import Cookies from "js-cookie";

export const state = () => ({
  user: ""
});

export const mutations = {
  SET_USER(state, user) {
    state.user = user;
  }
};

export const actions = {
  async setUser({ commit }, user) {
    Cookies.set("user", user, { expires: 365 });
    Cookies.get("user");
    commit("SET_USER", user);
  },

  nuxtClientInit({ commit }) {
    const user = Cookies.get("user");
    if (user) {
      commit("SET_USER", user);
    }
  }
};
