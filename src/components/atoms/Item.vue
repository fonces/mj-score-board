<template>
  <div class="item">
    <slot />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Item',
}
</script>

<style scoped>
.item {
  display: grid;
  gap: 8px;
}
</style>
