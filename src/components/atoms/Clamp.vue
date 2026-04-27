<template>
  <span class="clamp" :style="{ '-webkit-line-clamp': line }">
    <slot />
  </span>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Clamp',
  props: {
    line: {
      type: Number,
      default: 1,
    },
  },
})
</script>

<style scoped>
.clamp {
  display: -webkit-box;
  line-height: 1.2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
</style>
