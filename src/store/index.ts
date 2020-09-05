import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meosDomain: "localhost",
    loading: false,
    connectionStatus: null as boolean | null,
    competetionName: undefined as string | undefined
  },
  mutations: {
    changeDomain(state, domain: string) {
      state.meosDomain = domain;
    },
    changeLoading(state) {
      state.loading = !state.loading;
    },
    connected(state) {
      state.connectionStatus = true;
    },
    disconnected(state) {
      state.connectionStatus = false;
    },
    updateCompetionName(state, name: string) {
      state.competetionName = name;
    }
  },
  actions: {},
  modules: {}
});
