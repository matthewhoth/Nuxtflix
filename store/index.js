import Cookies from "js-cookie";

export const state = () => ({
  accountDetails: [],
  user: "",
  moviesList: [],
  rateMoviesModalState: false
});

export const mutations = {
  REGISTER_ACCOUNT(state, accountDetails) {
    state.accountDetails = accountDetails;
  },

  SET_USER(state, user) {
    state.user = user;
  },

  SET_RATE_MOVIES_MODAL(state, modalState) {
    state.rateMoviesModalState = modalState;
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
      if (process.browser) {
        localStorage.setItem("moviesList", JSON.stringify(state.moviesList));
      }
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

  async setRateMoviesModal({ commit }, modalState) {
    commit("SET_RATE_MOVIES_MODAL", modalState);
  },

  async setMovies({ commit }, movies) {
    if (process.browser) {
      localStorage.setItem("moviesList", JSON.stringify(movies));
    }
    commit("SET_MOVIES", movies);
  },

  async rateMovie({ commit, state }, data) {
    commit("SET_MOVIE_RATING", data);
  },

  async userLogout({ commit }) {
    Cookies.remove("user");
    commit("SET_USER", "");
  },

  nuxtClientInit({ commit }) {
    const user = Cookies.get("user");
    let movies;
    const accountDetails = Cookies.get("accountDetails");
    if (process.browser) {
      movies = localStorage.getItem("moviesList");
    }
    if (user) {
      commit("SET_USER", user);
    }
    if (accountDetails) {
      commit("REGISTER_ACCOUNT", JSON.parse(accountDetails));
    }
    if (movies) {
      commit("SET_MOVIES", JSON.parse(movies));
    }
  }
};
