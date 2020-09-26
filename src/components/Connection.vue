<template>
  <div>
    <v-btn
      small
      color="red"
      class="white--text"
      @click="connect()"
      :disabled="this.loading || connected"
    >
      Connect
    </v-btn>
    <p v-if="connected">Connected to: {{ competetionName }}</p>
    <p v-else-if="connected === false">
      Connection failed, check if the information server is running
    </p>
    <p v-else>Click to connect to meos</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import { Competetion, GetKey } from "meos-api-helper";

export default Vue.extend({
  name: "Connection",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    connected() {
      return store.state.connectionStatus;
    },
    competetionName() {
      return store.state.competetionName;
    }
  },
  methods: {
    connect: function() {
      this.loading = true;
      Competetion()
        .then(info => {
          store.commit("updateCompetionName", info.name);
          store.commit("connected");
          GetKey().then(key => store.commit("updateNextDifference", key));
        })
        .catch(() => store.commit("disconnected"))
        .then(() => (this.loading = false));
    }
  }
});
</script>
