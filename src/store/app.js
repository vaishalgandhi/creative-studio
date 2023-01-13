const getters = {
  showSuccess: (state) => state.showSuccess,
  sucessMessage: (state) => state.sucessMessage,
  showError: (state) => state.showError,
  errorMessage: (state) => state.errorMessage
};

const actions = {};

const mutations = {
  SHOW_SUCESS(state, value) {
    state.showSuccess = value;
  },
  SUCESS_MESSAGE(state, value) {
    state.sucessMessage = value;
  },
  SHOW_ERROR(state, value) {
    state.showError = value;
  },
  ERROR_MESSAGE(state, value) {
    state.errorMessage = value;
  }
};

const state = {
  showSuccess: false,
  sucessMessage: "",
  showError: false,
  errorMessage: ""
};

export default {
  state,
  getters,
  actions,
  mutations
};
