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
import { api } from "@/api/startlist";
import { GetStartlist } from "meos-api-helper";

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
    async serviceStartlist() {
      api({
        className: this.pickedClass.name,
        startlist: await GetStartlist(this.pickedClass.id)
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
