<template>
  <div class="controller">
    <h1>This is the controller page</h1>
    <h3 v-if="!connection">Go to the settings to connect to MeOS</h3>
    <h3 v-else>Connected to: {{ competetionName }}</h3>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Controller",
  computed: {
    connection() {
      return this.$store.state.connectionStatus;
    },
    competetionName() {
      return this.$store.state.competetionName;
    }
  }
});
</script>
