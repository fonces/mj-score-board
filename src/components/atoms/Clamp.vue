<template>
  <span class="clamp" :style="{ '-webkit-line-clamp': line }">
    <slot />
  </span>
</template>

<script setup lang="ts">
defineProps({
  line: {
    type: Number,
    default: 1,
  },
})
</script>

<style scoped>
.clamp {
  display: -webkit-box;
  line-height: 1.2;
  overflow: hidden;
  -webkit-box-orient: vertical;
}
</style>
