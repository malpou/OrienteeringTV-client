import Vue from "vue";
import Vuex from "vuex";
import { ClassInfo } from "@/utils/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meosDomain: "localhost",
    connectionStatus: null as boolean | null,
    competetionName: undefined as string | undefined,
    pickedClass: null as ClassInfo | null,
    classes: [] as ClassInfo[]
  },
  mutations: {
    connected(state) {
      state.connectionStatus = true;
    },
    disconnected(state) {
      state.connectionStatus = false;
    },
    changeDomain(state, domain: string) {
      state.meosDomain = domain;
    },
    changePickedClass(state, pickedClass: ClassInfo) {
      state.pickedClass = pickedClass;
    },
    updateCompetionName(state, name: string) {
      state.competetionName = name;
    },
    updateClasses(state, classes: ClassInfo[]) {
      state.classes = classes;
    }
  },
  actions: {},
  modules: {}
});
