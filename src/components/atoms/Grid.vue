<template>
  <div class="grid" :style="{ gap, gridAutoFlow: flow }">
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
    flow: {
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
