<template>
  <div class="selector">
    <label class="typo__label">Pick a runner to follow</label>
    <multiselect
      v-model="selectedRunner"
      deselect-label="Can't remove this value"
      track-by="name"
      label="name"
      :options="runners"
      :searchable="true"
      :allow-empty="false"
    >
      <template slot="singleLabel" slot-scope="{ option }">{{
        option.name
      }}</template>
    </multiselect>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import Multiselect from "vue-multiselect";
import { GetStartlist } from "meos-api-helper";
import { RunnerST } from "meos-api-helper/lib/types";

Vue.component("multiselect", Multiselect);

export default {
  name: "RunnerPicker",
  components: { Multiselect },
  data() {
    return {
      selectedRunner: store.state.pickedRunner
    };
  },
  computed: {
    runners() {
      return store.state.runners;
    },
    pickedClass() {
      return store.state.pickedClass;
    }
  },
  created: async function() {
    store.commit(
      "updateRunners",
      await GetStartlist(store.state.pickedClass.id)
    );
  },
  watch: {
    selectedRunner: function(newRunner: RunnerST) {
      store.commit("changePickedRunner", newRunner);
    },
    pickedClass: async function() {
      store.state.runners = [];
      store.commit(
        "updateRunners",
        await GetStartlist(store.state.pickedClass.id)
      );
    }
  }
};
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>

<style lang="scss" scoped>
.selector {
  margin: auto;
  width: 60%;
  padding: 10px;
}
</style>
