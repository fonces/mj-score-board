<template>
  <div
    class="flex"
    :style="{
      alignItems: align,
      flexDirection: direction,
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
