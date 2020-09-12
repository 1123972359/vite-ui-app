<template>
  <div class="top-nav">
    <div class="nav-logo" @click="toggleAside">lbb</div>
    <div class="nav-menu">
      <router-link to="/">home</router-link>
      <router-link to="/doc">doc</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import topNav from "../components/topNav.vue";
import '../assets/js/rem/rem'

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
$bgColor: lightblue
@keyframes rotate
  0%
    transform: rotate(0deg)
  100%
    transform: rotate(180deg)
.top-nav
    width: 100%
    height: .7rem
    background: $bgColor
    padding: 0 .2rem
    box-sizing: border-box
    display: flex
    justify-content: space-between
    align-items: center
    font-size: .16rem
    position: relative
    overflow-x: hidden
    overflow-y: auto
    &::before
        content: 'welcome'
        width: 5rem
        height: 5rem
        background: red
        border-radius: 47%
        display: block
        position: absolute
        top: -4.5rem
        opacity: .3
        z-index: 2
        animation: rotate 10s 
        animation-timing-function: linear
        animation-iteration-count: infinite
    &::after
        content: 'welcome'
        width: 4.9rem
        height: 4.9rem
        background: red
        border-radius: 47%
        display: block
        position: absolute
        top: -4.5rem
        opacity: .3
        z-index: 2
        animation: rotate 10s 
        animation-timing-function: ease
        animation-iteration-count: infinite
    .nav-logo
      font-size: .2rem
    .nav-menu
        display: flex
        align-items: center
        a
            display: block
            color: #fff
            font-weight: bold
            margin-left: .2rem
            text-decoration: none
            z-index: 99
            text-shadow: 0px 0px 10px yellow
            &:active
              color: yellow
</style>