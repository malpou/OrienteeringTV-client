<template>
  <div>
    <h1>Results</h1>
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
    serviceResult() {
      console.log("Results Updated");
    }
  },
  computed: {
    pickedClass() {
      return store.state.pickedClass;
    }
  }
});
</script>
