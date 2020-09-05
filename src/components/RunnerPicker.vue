<template>
  <div class="selector">
    <label class="typo__label">Pick a runner to follow</label>
    <multiselect
      v-model="selectedRunner"
      deselect-label="Can't remove this value"
      track-by="name"
      label="name"
      :options="runners"
      :searchable="false"
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
import axios from "axios";
import Multiselect from "vue-multiselect";
import { getJSON, createRunner } from "@/utils/objectCreation";
import { Runner } from "@/utils/types";

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
    }
  },
  created: function() {
    axios
      .get(
        `http://${store.state.meosDomain}:2009/meos?get=competitor&class=${store.state.pickedClass.id}`
      )
      .then(res => {
        const resObj = getJSON(res);
        const runners: Runner[] = [];
        resObj.MOPComplete.cmp.forEach((element: unknown) => {
          runners.push(createRunner(element));
        });
        //TODO Need to sort the runners by their ID before pushing them to the store
        store.commit("updateRunners", runners);
      });
  },
  watch: {
    selectedRunner: function(newRunner: Runner) {
      store.commit("changePickedRunner", newRunner);
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
