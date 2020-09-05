<template>
  <div>
    <button @click="connect()" :disabled="connection">
      Connect
    </button>
    <p v-if="connection">Connected to: {{ competetionName }}</p>
    <p v-else-if="connection === false">
      Connection failed, check if the information server is running
    </p>
    <p v-else>Click to connect to meos</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import axios from "axios";
const parseString = require("xml2js").parseString;

export default Vue.extend({
  name: "Connection",
  data: function() {
    return {
      connecting: false as boolean
    };
  },
  computed: {
    connection() {
      return this.$store.state.connectionStatus;
    },
    competetionName() {
      return this.$store.state.competetionName;
    }
  },
  methods: {
    connect: function() {
      this.connecting = true;
      axios
        .get("http://localhost:2009/meos?get=competition")
        .then(res => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          let resObj: any;
          parseString(res.data, function(err: unknown, result: object) {
            resObj = result;
          });
          this.$store.commit("connected");
          this.$store.commit(
            "updateCompetionName",
            resObj.MOPComplete.competition[0]._
          );
        })
        .catch(() => {
          this.$store.commit("disconnected");
        });
      this.connecting = false;
    }
  }
});
</script>

<style lang="scss" scoped></style>
