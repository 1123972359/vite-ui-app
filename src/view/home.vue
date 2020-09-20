<template>
  <top-nav></top-nav>
  <div class="home">home</div>
</template>

<script lang="ts">
import topNav from "./../components/topNav.vue";
export default {
  name: "home",
  components: {
    topNav,
  },
};
</script>

<style lang="sass" scoped>
.home
  font-size: .16rem
</style>