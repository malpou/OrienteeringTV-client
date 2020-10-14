<template>
  <div>
    <h1>Results (Rolling)</h1>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-card
          v-for="(radio, index) in pickedClass.radios"
          :key="radio"
          class="ma-3 pa-6"
          outlined
          title
        >
          Control: {{ radio }}
          <br />
          <v-btn
            @click="btnRolling(radio, index)"
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
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { checkForChanges } from "@/utils/checkForChanges";
import { GetSplit } from "meos-api-helper";
import store from "@/store";

export default Vue.extend({
  name: "RollingController",
  data() {
    return {
      runningIndex: null as number | null,
      serviceRunning: null as boolean | null
    };
  },
  methods: {
    btnRolling(radio: string, index: number) {
      if (!this.serviceRunning) {
        this.runningIndex = index;
        this.serviceRunning = true;
        this.serviceRolling(radio);
      } else {
        this.runningIndex = null;
        this.serviceRunning = false;
      }
    },
    async serviceRolling(radio: string): Promise<void> {
      while (this.serviceRunning) {
        await new Promise(resolve => setTimeout(resolve, 1000));
        if (await checkForChanges()) {
          GetSplit(this.pickedClass.id, radio);
        }
      }
    }
  },
  computed: {
    pickedClass() {
      return store.state.pickedClass;
    }
  }
});
</script>

<style scoped></style>
