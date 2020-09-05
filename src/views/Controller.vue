<template>
  <div class="controller">
    <h1>This is the controller page</h1>
    <h3 v-if="!connection">Go to the settings to connect to MeOS</h3>
    <h3 v-else>Connected to: {{ competetionName }}</h3>
    <h3 v-if="isClassPicked">Picked class: {{ pickedClass.name }}</h3>
    <runner-picker v-if="isClassPicked" />
    <h4 v-if="isRunnerPicked">{{ pickedRunnerString }}</h4>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import RunnerPicker from "@/components/RunnerPicker.vue";
import { stringTime } from "@/utils/time";

export default Vue.extend({
  name: "Controller",
  components: { RunnerPicker },
  computed: {
    connection() {
      return store.state.connectionStatus;
    },
    competetionName() {
      return store.state.competetionName;
    },
    isClassPicked() {
      return store.state.isClassPicked;
    },
    pickedClass() {
      return store.state.pickedClass;
    },
    isRunnerPicked() {
      return store.state.isRunnerPicked;
    },
    pickedRunnerString() {
      const { name, startTime } = store.state.pickedRunner;
      return `${name} | ${stringTime(startTime)}`;
    }
  }
});
</script>
