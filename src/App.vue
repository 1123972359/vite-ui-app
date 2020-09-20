<template>
  <router-view />
</template>

<script>
import { ref, provide } from "vue";
import router from "./router/router";

export default {
  name: "App",
  components: {},
  setup() {
    let clientWidth = document.documentElement.clientWidth;
    let flag = clientWidth > 500 ? true : false;
    const asideVisible = ref(flag);
    provide("asideVisible", asideVisible);

    router.afterEach(() => {
      if (clientWidth <= 500) {
        asideVisible.value = false;
      }
    });
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