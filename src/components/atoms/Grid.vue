<template>
  <div class="grid" :style="{ gap, gridAutoFlow: direction }">
    <slot />
  </div>
</template>

<script>
export default {
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
    }
  },
}
</script>

<style scoped>
.grid {
  display: grid;
}
</style>
