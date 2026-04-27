<template>
  <div class="grid" :style="{ gap, gridAutoFlow: direction }">
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Grid',
  props: {
    gap: {
      type: String,
      default: '16px',
    },
    direction: {
      type: String,
      default: 'row',
    },
  },
})
</script>

<style scoped>
.grid {
  display: grid;
}
</style>
