<template>
  <div class="list" :style="{ gap }">
    <slot />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'List',
  props: {
    gap: {
      type: String,
      default: '12px',
    }
  }
}
</script>

<style scoped>
.list {
  display: grid;
}
</style>