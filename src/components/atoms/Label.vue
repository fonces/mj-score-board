<template>
  <label class="label" :class="{ bold, strong, error }">
    <slot />
  </label>
</template>

<script setup lang="ts">
defineProps({
  bold: {
    type: Boolean,
    default: false,
  },
  strong: {
    type: Boolean,
    default: false,
  },
  error: {
    type: Boolean,
    default: false,
  },
})
</script>

<style>
.bold {
  font-weight: bold;
}

.strong {
  font-size: 15px;
}

.error {
  color: var(--error);
}
</style>
