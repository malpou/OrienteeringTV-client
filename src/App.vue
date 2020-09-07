<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Controller</router-link> |
      <router-link to="/settings">Settings</router-link>
    </div>
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import axios from "axios";

export default Vue.extend({
  data() {
    return {
      interval: (null as unknown) as NodeJS.Timeout
    };
  },
  methods: {
    checkConnection: function() {
      if (store.state.connectionStatus) {
        axios
          .get(`http://${store.state.meosDomain}:2009/meos?get=competition`)
          .then(() => {
            return;
          })
          .catch(() => store.commit("disconnected"));
      }
    }
  },
  created: function() {
    this.interval = setInterval(() => {
      this.checkConnection();
    }, 15000);
  },
  beforeDestroy: function() {
    clearInterval(this.interval);
  }
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
