<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-item @click="$router.push('/').catch(() => {})">
          <v-list-item-action>
            <v-icon>developer_board</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Controller</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="$router.push('/settings').catch(() => {})">
          <v-list-item-action>
            <v-icon>settings</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Settings</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app color="red" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Orienteering TV - Results</v-toolbar-title>

      <v-spacer></v-spacer>

      <span v-if="isRunnerPicked">
        <b>Following:</b> {{ pickedRunnerString }}
      </span>
    </v-app-bar>

    <v-main>
      <v-container fluid>
        <v-row align="center" justify="center">
          <v-col class="text-center">
            <router-view />
          </v-col>
        </v-row>
      </v-container>
    </v-main>

    <v-footer color="red" app>
      <span class="white--text"
        >&copy; {{ new Date().getFullYear() }} | Malthe Poulsen</span
      >

      <v-spacer></v-spacer>

      <span class="white--text" v-if="connection">
        {{ competetionName }}
        <span v-if="isClassPicked">({{ pickedClass.name }})</span>
      </span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import store from "@/store";
import router from "@/router";
import { Competetion } from "meos-api-helper";

export default Vue.extend({
  data() {
    return {
      drawer: null,
      interval: (null as unknown) as NodeJS.Timeout
    };
  },
  computed: {
    connection() {
      return store.state.connectionStatus;
    },
    competetionName() {
      return store.state.competetionName;
    },
    isClassPicked() {
      return store.state.isClassPicked;
    },
    pickedClass() {
      return store.state.pickedClass;
    },
    isRunnerPicked() {
      return store.state.isRunnerPicked;
    },
    pickedRunnerString() {
      return store.state.pickedRunner.name;
    }
  },
  methods: {
    checkConnection: function() {
      if (store.state.connectionStatus) {
        Competetion()
          .then(() => {
            return;
          })
          .catch(() => {
            store.commit("disconnected");
          });
      }
    }
  },
  created: function() {
    if (!this.connection) {
      router.push("/settings").catch();
    }
    this.interval = setInterval(() => {
      this.checkConnection();
    }, 15000);
    store.commit("getSingularCredentials");
  },
  beforeDestroy: function() {
    clearInterval(this.interval);
  }
});
</script>

<style lang="scss"></style>
