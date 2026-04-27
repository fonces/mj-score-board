<template>
  <div class="form-group">
    <div class="title bold">{{ title }}</div>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    required: true,
  },
})
</script>

<style scoped>
.form-group {
  display: grid;
  gap: 8px;
}

.title {
  font-size: 16px;
}
</style>
