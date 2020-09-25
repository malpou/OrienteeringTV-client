<template>
  <div class="settings">
    <connection />
    <class-picker v-if="connected" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Connection from "@/components/Connection.vue";
import ClassPicker from "@/components/ClassPicker.vue";

export default Vue.extend({
  name: "Settings",
  components: {
    Connection,
    ClassPicker
  },
  computed: {
    connected() {
      return this.$store.state.connectionStatus;
    }
  }
});
</script>
