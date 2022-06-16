<template>
  <div class="actions">
    <slot />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Actions',
}
</script>

<style scoped>
.actions {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>
