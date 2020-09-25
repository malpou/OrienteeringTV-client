<template>
  <div class="settings">
    <connection />
    <class-picker v-if="connected" />
    <runner-picker v-if="isClassPicked && connected" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Connection from "@/components/Connection.vue";
import ClassPicker from "@/components/ClassPicker.vue";
import RunnerPicker from "@/components/RunnerPicker.vue";

export default Vue.extend({
  name: "Settings",
  components: {
    Connection,
    ClassPicker,
    RunnerPicker
  },
  computed: {
    connected() {
      return this.$store.state.connectionStatus;
    },
    isClassPicked() {
      return this.$store.state.isClassPicked;
    }
  }
});
</script>
