<template>
  <div>
    <h1>Startlist</h1>
    <v-col cols="12">
      <v-row align="center" justify="center">
        <v-btn
          @click="btnStartlist"
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
import Vue from "vue";
import store from "@/store";

export default Vue.extend({
  name: "StartlistController",
  data() {
    return {
      loading: false
    };
  },
  methods: {
    btnStartlist() {
      this.loading = true;
      this.serviceStartlist();
      this.loading = false;
    },
    serviceStartlist() {
      console.log("Startlist Updated");
    }
  },
  computed: {
    pickedClass() {
      return store.state.pickedClass;
    }
  }
});
</script>
