<template>
  <div>
    <button v-if="!connected" @click="connect()" :disabled="loading">
      Connect
    </button>
    <p v-if="connected">Connected to: {{ competetionName }}</p>
    <p v-else-if="connected === false">
      Connection failed, check if the information server is running
    </p>
    <p v-else>Click to connect to meos</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store"
import axios from "axios";
import { getJSON } from "@/utils/objectCreation";

export default Vue.extend({
  name: "Connection",
  computed: {
    loading() {
      return store.state.loading;
    },
    connected() {
      return store.state.connectionStatus;
    },
    competetionName() {
      return store.state.competetionName;
    }
  },
  methods: {
    connect: function() {
      store.commit("changeLoading");
      axios
        .get(`http://${store.state.meosDomain}:2009/meos?get=competition`)
        .then(res => {
          const resObj = getJSON(res);
          store.commit(
            "updateCompetionName",
            resObj.MOPComplete.competition[0]._
          );
          store.commit("connected");
        })
        .catch(() => store.commit("disconnected"))
        .then(() => store.commit("changeLoading"));
    }
  }
});
</script>

<style lang="scss" scoped></style>
