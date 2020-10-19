<template>
  <div>
    <h1>Results (Full)</h1>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-btn
          @click="btnResult"
          color="red"
          class="white--text"
          :disabled="loading"
        >
          Update
        </v-btn>
      </v-row>
    </v-col>
  </div>
</template>

<script lang="ts">
import store from "@/store";
import { GetResult } from "meos-api-helper";
import { api } from "@/api/result";
import Vue from "vue";

export default Vue.extend({
  name: "ResultController",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    btnResult() {
      this.loading = true;
      this.serviceResult();
      this.loading = false;
    },
    async serviceResult() {
      api({
        className: this.pickedClass.name,
        result: await GetResult(this.pickedClass.id)
      });
    }
  },
  computed: {
    pickedClass() {
      return store.state.pickedClass;
    }
  }
});
</script>
