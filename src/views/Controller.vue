<template>
  <v-container fluid>
    <top-5-controller v-if="isClassPicked" />
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import Top5Controller from "@/components/Top5Controller.vue";

export default Vue.extend({
  name: "Controller",
  components: { Top5Controller },
  computed: {
    isClassPicked() {
      return store.state.isClassPicked;
    }
  }
});
</script>
