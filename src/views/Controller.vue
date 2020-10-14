<template>
  <v-container fluid>
    <rolling-controller v-if="isRunnerPicked" />
    <top-5-controller v-if="isClassPicked" />
    <v-row align="center">
      <v-col>
        <startlist-controller v-if="isClassPicked" />
      </v-col>
      <v-col>
        <result-controller v-if="isClassPicked" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import RollingController from "@/components/RollingController.vue";
import Top5Controller from "@/components/Top5Controller.vue";
import StartlistController from "@/components/StartlistController.vue";
import ResultController from "@/components/ResultController.vue";

export default Vue.extend({
  name: "Controller",
  components: {
    RollingController,
    Top5Controller,
    StartlistController,
    ResultController
  },
  computed: {
    isClassPicked() {
      return store.state.isClassPicked;
    },
    isRunnerPicked() {
      return store.state.isRunnerPicked;
    }
  }
});
</script>
