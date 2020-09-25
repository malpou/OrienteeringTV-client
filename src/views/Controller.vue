<template>
  <v-container fluid>
    <h1 v-if="isClassPicked">Results (Top 5)</h1>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-card
          v-for="(radio, index) in pickedClass.radios"
          :key="radio"
          class="ma-3 pa-6"
          outlined
          tile
        >
          Control: {{ radio }}
          <br />
          <v-btn
            @click="btnTop5(radio, index)"
            color="red"
            class="white--text"
            :disabled="serviceRunning && runningIndex !== index"
            :class="{ green: runningIndex === index }"
          >
            {{ runningIndex === index ? "Stop Service" : "Start Service" }}
          </v-btn>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { checkForChanges } from "@/utils/checkForChanges";
import { updateTop5 } from "@/api/top5";

export default Vue.extend({
  name: "Controller",
  data() {
    return {
      runningIndex: null as number | null,
      serviceRunning: null as boolean | null
    };
  },
  methods: {
    btnTop5(radio: string, index: number) {
      if (!this.serviceRunning) {
        this.runningIndex = index;
        this.serviceRunning = true;
        this.serviceTop5(radio);
      } else {
        this.runningIndex = null;
        this.serviceRunning = false;
      }
    },
    async serviceTop5(radio: string): Promise<void> {
      while (this.serviceRunning) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (await checkForChanges(store.state.pickedClass)) {
          updateTop5(store.state.pickedClass.id, radio);
        }
      }
    }
  },
  computed: {
    connection() {
      return store.state.connectionStatus;
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
    pickedRunner() {
      return store.state.pickedRunner;
    }
  }
});
</script>
