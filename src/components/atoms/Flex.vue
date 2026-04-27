<template>
  <div
    class="flex"
    :style="{
      alignItems: align,
      flexDirection: direction,
      gap,
      justifyContent: justify,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { CSSProperties, PropType } from 'vue'

defineProps({
  align: {
    type: String as PropType<CSSProperties['alignItems']>,
    default: 'center',
  },
  direction: {
    type: String as PropType<CSSProperties['flexDirection']>,
    default: 'row',
  },
  gap: {
    type: String as PropType<CSSProperties['gap']>,
    default: '',
  },
  justify: {
    type: String as PropType<CSSProperties['justifyContent']>,
    default: 'space-between',
  },
})
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
