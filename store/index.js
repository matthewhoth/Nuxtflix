import Cookies from "js-cookie";

export const state = () => ({
  accountDetails: [],
  user: "",
  moviesList: []
});

export const mutations = {
  REGISTER_ACCOUNT(state, accountDetails) {
    state.accountDetails = accountDetails;
  },

  SET_USER(state, user) {
    state.user = user;
  },

  SET_MOVIES(state, moviesList) {
    state.moviesList = moviesList;
  },

  SET_MOVIE_RATING(state, data) {
    let movie = state.moviesList.find(v => {
      return v.id === data.id;
    });
    if (movie && movie.hasOwnProperty(data.propName)) {
      movie[data.propName] = data.value;
      Cookies.set("moviesList", state.moviesList, { expires: 365 });
    }
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

  async setMovies({ commit }, movies) {
    Cookies.set("moviesList", movies, { expires: 365 });
    commit("SET_MOVIES", movies);
  },

  async rateMovie({ commit, state }, data) {
    commit("SET_MOVIE_RATING", data);
  },

  async userLogout({ commit }) {
    Cookies.remove("user");
    commit("REGISTER_ACCOUNT", []);
    commit("SET_USER", "");
  },

  nuxtClientInit({ commit }) {
    const user = Cookies.get("user");
    const movies = Cookies.get("moviesList");
    if (user) {
      commit("SET_USER", user);
    }
    if (movies) {
      commit("SET_MOVIES", JSON.parse(movies));
    }
  }
};
