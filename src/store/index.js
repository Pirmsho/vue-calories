import { createStore } from "vuex";

export default createStore({
  state: {
    gender: null,
    age: null,
    height: null,
    weight: null,
    results: null,
    isValid: true,
    resultsAreVisible: false,
  },
  mutations: {
    calculateResults(state) {
      if (
        state.gender === "male" &&
        state.age !== "" &&
        state.weight !== "" &&
        state.height !== ""
      ) {
        state.isValid = true;
        state.resultsAreVisible = true;
        state.results =
          state.weight * 11 + state.height * 6.25 - state.age * 5 - 5;
      } else if (
        state.gender === "female" &&
        state.age !== "" &&
        state.weight !== "" &&
        state.height !== ""
      ) {
        state.isValid = true;
        state.resultsAreVisible = true;
        state.results =
          state.weight * 10 + state.height * 6.25 - state.age * 5 - 161;
      } else {
        state.isValid = false;
      }
    },
  },
  actions: {
    calculateResults(context) {
      context.commit("calculateResults");
    },
  },
  getters: {
    bmiValue(state) {
      return state.weight / (state.height / 100) ** 2;
    },
  },
  modules: {},
});
