<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "App",
  mounted() {
    this.to_login({});
  },
  methods: {
    ...mapActions(["to_login"])
  }
};
</script>

<style>
#app {
  background: #f7f7f7;
}
</style>
