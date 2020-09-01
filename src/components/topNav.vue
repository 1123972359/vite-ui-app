<template>
  <div class="top-nav">
    <div class="nav-logo" @click="toggleAside">logo</div>
    <div class="nav-menu">
      <router-link to="/">菜单1</router-link>
      <router-link to="/doc">菜单2</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import topNav from "../components/topNav.vue";

export default {
  name: "topNav",
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    const toggleAside = () => {
      asideVisible.value = !asideVisible.value;
    };
    return { toggleAside };
  },
};
</script>

<style lang="sass" scoped>
.top-nav
    width: 100%
    height: 70px
    background: lightpink
    padding: 0 20px
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: center
    .nav-menu
        display: flex
        align-items: center
        a
            display: block
            margin-left: 20px
</style>