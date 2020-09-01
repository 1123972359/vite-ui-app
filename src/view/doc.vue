<template>
  <top-nav></top-nav>
  <div>doc</div>
  <aside class="aside" v-show="asideVisible">
    <span>内容1</span>
    <span>内容2</span>
    <span>内容3</span>
    <span>内容4</span>
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
    console.log("asideVisible", asideVisible.value);
    return { asideVisible };
  },
};
</script>

<style lang="sass" scoped>
.aside
    width: 200px
    height: calc(100% - 70px)
    overflow: auto
    position: absolute
    left: 0
    top: 70px
    background: lightblue
    display: flex
    flex-direction: column
    box-sizing: border-box
    span
        display: block
        width: 100%
        height: 50px
        line-height: 50px
        padding-left: 10px
        box-sizing: border-box
        cursor: pointer
        user-select: none
        &:hover
            color: #fff
            background: blue
            opacity: .4
        &:active
            opacity: 1
</style>