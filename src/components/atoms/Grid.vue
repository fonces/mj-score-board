<template>
  <div class="grid" :style="{ gap, gridAutoFlow: direction }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from 'vue'

defineProps({
  gap: {
    type: String as PropType<CSSProperties['gap']>,
    default: '16px',
  },
  direction: {
    type: String as PropType<CSSProperties['gridAutoFlow']>,
    default: 'row',
  },
})
</script>

<style scoped>
.grid {
  display: grid;
}
</style>
