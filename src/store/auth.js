import jsonData from "@/assets/landscapes.json";

const getters = {
  isAuthenticated: (state) => state.isAuthenticated,
  accessToken: (state) => state.accessToken,
  loggedInUser: (state) => state.loggedInUser
};

const actions = {
  authenticateUser({ commit }, payload) {
    return new Promise((resolve, reject) => {
      // Below commented code is how you fetch data from API
      // axios
      //   .post("api/auth/login", payload)
      //   .then((response) => {
      //     if (response.status === 200) {
      //       window.localStorage.setItem("user", JSON.stringify(response.data.user));
      //       window.localStorage.setItem("access_token", response.data.access_token);
      //       window.localStorage.setItem(
      //         "tokenExpiration",
      //         JSON.stringify(
      //           format(
      //             addMinutes(new Date(), MINUTES_TO_CHECK_FOR_TOKEN_REFRESH),
      //             "t"
      //           )
      //         )
      //       );
      //       commit("IS_AUTHENTICATED", true);
      //       commit("ACCESS_TOKEN", response.data.access_token);
      //       commit("LOGGED_IN_USER", response.data.user);
      //       resolve();
      //     }
      //   })
      //   .catch((error) => { // Error handling });

      // Since this is demo project and user has to match with json data
      // Below business logic is hard coded
      if (payload.email === "nick.reynolds@domain.co") {
        commit("IS_AUTHENTICATED", true);
        commit("ACCESS_TOKEN", "AAAAAAAAAAAAA");
        commit("LOGGED_IN_USER", jsonData);
        resolve();
      } else {
        commit("ERROR_MESSAGE", "Incorrect Credentials");
        commit("SHOW_ERROR", true);
        reject("Incorrect Credentials");
      }
    });
  },
  registerUser({ commit }, payload) {
    console.log("insdie register user");
    return new Promise((resolve, reject) => {
      // Below commented code is how you fetch data from API
      // axios
      //   .post("api/auth/register", payload)
      //   .then((response) => {
      //     if (response.status === 201) {
      //       resolve();
      //     }
      //   })
      //   .catch((error) => { // Error handling });
    });
  },
  requestPasswordReset({ commit }, email) {
    return new Promise((resolve, reject) => {
      // Below commented code is how you fetch data from API
      // axios
      //   .post("api/password/reset-request", email)
      //   .then((response) => {
      //     if (response.status === 200) {
      //       resolve();
      //     }
      //   })
      //   .catch((error) => { // Error handling });
      resolve();
    });
  },
  resetPassword({ commit }, payload) {
    return new Promise((resolve, reject) => {
      // Below commented code is how you fetch data from API
      // axios
      //   .post("api/password/reset", payload)
      //   .then((response) => {
      //     if (response.status === 200) {
      //       resolve();
      //     }
      //   })
      //   .catch((error) => { // Error handling });
      resolve();
    });
  }
};

const mutations = {
  IS_AUTHENTICATED(state, value) {
    state.isAuthenticated = value;
  },
  LOGGED_IN_USER(state, value) {
    state.loggedInUser = value;
  },
  ACCESS_TOKEN(state, value) {
    state.accessToken = value;
  }
};

const state = {
  isAuthenticated: false,
  accessToken: null,
  loggedInUser: null
};

export default {
  state,
  getters,
  actions,
  mutations
};
