<template>
  <div class="settings">
    <h1>This is the settings page</h1>
    <Connection />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Connection from "@/components/Connection.vue";

export default Vue.extend({
  name: "Settings",
  components: {
    Connection
  }
});
</script>
