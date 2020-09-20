<template>
  <top-nav></top-nav>
  <div class="doc">
    <router-view></router-view>
  </div>
  <aside class="aside" v-show="asideVisible">
    <router-link to="/doc">doc</router-link>
    <router-link to="/doc/switch">switch</router-link>
  </aside>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import topNav from "../components/topNav.vue";

export default {
  name: "doc",
  components: {
    topNav,
  },
  setup() {
    const asideVisible = inject<Ref<boolean>>("asideVisible");
    return { asideVisible };
  },
};
</script>

<style lang="sass" scoped>
.doc
  font-size: .16rem
  margin-left: 2rem
  padding: .1rem
  background: lightyellow
  height: calc(100vh - .7rem)
  overflow: auto
  box-sizing: border-box
.aside
  width: 2rem
  height: calc(100% - .7rem)
  overflow: auto
  position: absolute
  left: 0
  top: .7rem
  background: #ccc
  display: flex
  flex-direction: column
  box-sizing: border-box
  font-size: .16rem
  a
    display: block
    width: 100%
    height: .5rem
    line-height: .5rem
    padding-left: .1rem
    box-sizing: border-box
    cursor: pointer
    user-select: none
    text-decoration: none
    color: #000
    &:hover
      color: #fff
      background: blue
      opacity: .4
      &:active
        opacity: 1
@media (max-width: 500px)
  .doc
    margin-left: 0
</style>