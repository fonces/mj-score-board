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

<script>
export default {
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
}
</script>

<style scoped>
.flex {
  display: flex;
}
</style>
