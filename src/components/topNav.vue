<template>
  <div class="top-nav">
    <div class="nav-logo">lbb</div>
    <i class="icon-toggle" @click="toggleAside"></i>
    <div class="nav-menu">
      <router-link to="/">home</router-link>
      <router-link to="/doc">doc</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { inject, Ref } from "vue";
import topNav from "../components/topNav.vue";
import "../assets/js/rem/rem";

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

<style lang="scss" scoped>
$bgColor: lightblue;

.top-nav {
  width: 100%;
  height: 0.7rem;
  background: $bgColor;
  padding: 0 0.2rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 0.16rem;
  position: relative;
  overflow: hidden;
  > .nav-logo {
    font-size: 0.2rem;
    user-select: none;
  }

  > .icon-toggle {
    display: none;
    width: 0.3rem;
    height: 0.3rem;
    background: red;
  }

  > .nav-menu {
    display: flex;
    align-items: center;
    > a {
      display: block;
      color: #fff;
      font-weight: bold;
      margin-left: 0.2rem;
      text-decoration: none;
      z-index: 99;
      text-shadow: 0px 0px 10px yellow;
      a:active {
        color: yellow;
      }
    }
  }
}

.top-nav::before {
  content: "";
  width: 5rem;
  height: 5rem;
  background: red;
  border-radius: 47%;
  display: block;
  position: absolute;
  top: -4.5rem;
  right: -2rem;
  opacity: 0.3;
  z-index: 2;
  animation: rotate 10s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.top-nav::after {
  content: "qq";
  width: 4.9rem;
  height: 4.9rem;
  background: red;
  border-radius: 47%;
  display: block;
  position: absolute;
  top: -4.4rem;
  right: -2rem;
  opacity: 0.3;
  z-index: 2;
  animation: rotate 10s;
  animation-timing-function: ease;
  animation-iteration-count: infinite;
}

@keyframes rotate {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(180deg);
  }
}

@media (max-width: 500px) {
  .top-nav {
    justify-content: center;
  }
  .nav-menu {
    display: none !important;
  }
  .icon-toggle {
    display: block !important;
    position: absolute;
    left: 0.2rem;
  }
}
</style>