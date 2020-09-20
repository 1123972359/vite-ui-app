<template>
  <button class="l-switch" :class="{checked}" @click="toggle">
    <i class="switch-icon"></i>
  </button>
</template>

<script lang="ts">
import { ref } from "vue";
export default {
  name: "l-switch",
  props: {
    checked: Boolean,
  },
  setup(props, context) {
    const toggle = () => {
      context.emit("update:checked", !props.checked);
    };
    return { toggle };
  },
};
</script>

<style lang="scss" scoped>
$w: 0.4rem;
$h: $w / 2;
$iconw: $h - 0.04rem;
.l-switch {
  width: $w;
  height: $h;
  display: inline-flex;
  align-items: center;
  background: gray;
  border-radius: 0.2rem;
  box-sizing: border-box;
  position: relative;
  cursor: pointer;
  border: none;
  outline: none;
  > .switch-icon {
    width: $iconw;
    height: $iconw;
    background: #fff;
    display: inline-block;
    border-radius: 50%;
    position: absolute;
    left: 0.02rem;
    transition-duration: 250ms;
  }
  &.checked {
    background: #1890ff;
    > .switch-icon {
      left: calc(100% - #{$iconw} - 0.02rem);
    }
  }
  &:active {
    > .switch-icon {
      width: calc(#{$iconw} + 0.02rem);
    }
  }
  &.checked:active {
    > .switch-icon {
      margin-left: -0.02rem;
    }
  }
}
</style>