<template>
  <div class="controller">
    <h1>This is the controller page</h1>
    <h3 v-if="!connection">Go to the settings to connect to MeOS</h3>
    <h3 v-else>Connected to: {{ competetionName }}</h3>
    <h3 v-if="pickedClass !== null">Picked class: {{ pickedClass.name }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  name: "Controller",
  computed: {
    connection() {
      return store.state.connectionStatus;
    },
    competetionName() {
      return store.state.competetionName;
    },
    pickedClass() {
      return store.state.pickedClass;
    }
  }
});
</script>
