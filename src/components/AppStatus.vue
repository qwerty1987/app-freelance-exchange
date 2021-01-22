<template>
  <span class="badge" :class="status">{{ statusUpperCase }}</span>
</template>
<script>
import { computed } from "vue";
export default {
  name: "AppStatus",
  props: ["status"],
  setup(props) {
    const statusUpperCase = computed(() => props.status.toUpperCase());
    return { statusUpperCase, ...props };
  }
};
</script>
