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
import axios from "axios";
import Multiselect from "vue-multiselect";
import { getJSON, createClass } from "@/utils/objectCreation";
import { ClassInfo } from "@/utils/types";

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
    axios
      .get(`http://${store.state.meosDomain}:2009/meos?get=class`)
      .then(res => {
        const resObj = getJSON(res);
        const classes: ClassInfo[] = [];
        resObj.MOPComplete.cls.forEach((element: unknown) => {
          classes.push(createClass(element));
        });
        classes.forEach(element => element.radios.push("finish"));
        store.commit("updateClasses", classes);
      });
    /*axios.get(`http://localhost:2009/meos?get=organization`).then(res => {
      const resObj = getJSON(res);
      console.log(resObj);
    });*/
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
