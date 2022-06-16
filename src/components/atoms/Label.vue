<template>
  <label class="label" :class="{ bold, strong, error }">
    <slot />
  </label>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Label',
  props: {
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
  },
}
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
