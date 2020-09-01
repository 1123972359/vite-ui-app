<template>
  <router-view />
</template>

<script>
import { ref, provide } from "vue";

export default {
  name: "App",
  components: {},
  setup() {
    const asideVisible = ref(false)
    provide("asideVisible", asideVisible);
  },
};
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
}
</style>