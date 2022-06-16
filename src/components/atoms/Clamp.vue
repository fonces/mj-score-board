<template>
  <span class="clamp" :style="{ '-webkit-line-clamp': line }">
    <slot />
  </span>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Clamp',
  props: {
    line: {
      type: Number,
      default: 1,
    },
  },
}
</script>

<style scoped>
.clamp {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
