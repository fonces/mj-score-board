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

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Flex',
  props: {
    align: {
      type: String,
      default: 'center',
    },
    direction: {
      type: String,
      default: 'row',
    },
    gap: {
      type: String,
    },
    justify: {
      type: String,
      default: 'space-between',
    },
  },
})
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
