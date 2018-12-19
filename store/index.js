import Cookies from "js-cookie";

export const state = () => ({
  accountDetails: [],
  user: ""
});

export const mutations = {
  REGISTER_ACCOUNT(state, accountDetails) {
    state.accountDetails = accountDetails;
  },

  SET_USER(state, user) {
    state.user = user;
  }
};

export const actions = {
  async registerAccount({ commit }, accountDetails) {
    Cookies.set("accountDetails", accountDetails, { expires: 365 });
    commit("REGISTER_ACCOUNT", accountDetails);
  },

  async setUser({ commit }, user) {
    Cookies.set("user", user, { expires: 365 });
    commit("SET_USER", user);
  },

  async userLogout({ commit }) {
    Cookies.remove("user");
    commit("REGISTER_ACCOUNT", []);
    commit("SET_USER", "");
  },

  nuxtClientInit({ commit }) {
    const user = Cookies.get("user");
    if (user) {
      commit("SET_USER", user);
    }
  }
};
