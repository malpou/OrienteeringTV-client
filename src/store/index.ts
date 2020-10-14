import Vue from "vue";
import Vuex from "vuex";
import { Runner, ClassInfo } from "meos-api-helper/lib/types";

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
    runners: [] as Runner[],
    nextDifference: "" as string,
    singularCredentials: {
      username: "" as string | undefined,
      password: "" as string | undefined
    }
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
    },
    updateNextDifference(state, newDifference: string) {
      state.nextDifference = newDifference;
    },
    getSingularCredentials(state) {
      state.singularCredentials.username = process.env.UN;
      state.singularCredentials.password = process.env.PW;
    }
  }
});
