<template>
  <div class="selector">
    <label class="typo__label">Pick class to follow</label>
    <multiselect
      v-model="selectedClass"
      deselect-label="Can't remove this value"
      track-by="name"
      label="name"
      :options="classes"
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
import { GetClassList } from "meos-api-helper";
import Multiselect from "vue-multiselect";
import { ClassInfo } from "meos-api-helper/lib/types";

Vue.component("multiselect", Multiselect);

export default {
  name: "ClassPicker",
  components: { Multiselect },
  data() {
    return {
      selectedClass: store.state.pickedClass
    };
  },
  computed: {
    classes() {
      return store.state.classes;
    }
  },
  created: function() {
    GetClassList().then(res => {
      res.forEach(element => element.radios.push("finish"));
      store.commit("updateClasses", res);
    });
  },
  watch: {
    selectedClass: function(newClass: ClassInfo) {
      store.commit("changePickedClass", newClass);
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
