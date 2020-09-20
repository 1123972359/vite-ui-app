<template>
  <div>
    <div>Switch .</div>
    <br />
    <l-switch v-model:checked="checked" />
  </div>
</template>

<script>
import { ref } from "vue";
import LSwitch from "./../lib/switch.vue";
export default {
  name: "switchDefault",
  components: {
    LSwitch,
  },
  setup() {
    const checked = ref(false);
    return { checked };
  },
};
</script>