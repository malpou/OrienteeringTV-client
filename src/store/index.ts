import Vue from "vue";
import Vuex from "vuex";
import { ClassInfo, Runner } from "@/utils/types";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    meosDomain: "localhost",
    connectionStatus: null as boolean | null,
    competetionName: undefined as string | undefined,
    isClassPicked: false,
    pickedClass: {} as ClassInfo,
    classes: [] as ClassInfo[],
    isRunnerPicked: false,
    pickedRunner: {} as Runner,
    runners: [] as Runner[]
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
      state.isClassPicked = true;
    },
    changePickedRunner(state, pickedRunner: Runner) {
      state.pickedRunner = pickedRunner;
      state.isRunnerPicked = true;
    },
    updateCompetionName(state, name: string) {
      state.competetionName = name;
    },
    updateClasses(state, classes: ClassInfo[]) {
      state.classes = classes;
    },
    updateRunners(state, runners: Runner[]) {
      state.runners = runners;
    }
  },
  actions: {},
  modules: {}
});
