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
import axios from "axios";
import { getJSON } from "@/utils/objectCreation";

export default Vue.extend({
  name: "Connection",
  data() {
    return {
      loading: false
    };
  },
  computed: {
    /*loading() {
      return store.state.loading;
    },*/
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
        .then(() => (this.loading = false));
    }
  }
});
</script>

<style lang="scss" scoped></style>
