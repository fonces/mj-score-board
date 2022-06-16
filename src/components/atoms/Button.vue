<template>
  <button v-bind="$attrs" type="button" class="button" :class="{ primary, small, flat }">
    <slot />
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Button',
  inheritAttrs: false,
  props: {
    primary: {
      type: Boolean,
    },
    small: {
      type: Boolean,
    },
    flat: {
      type: Boolean,
    },
  },
}
</script>

<style scoped>
.button {
  background: var(--white);
  border-radius: 4px;
  border: 1px solid var(--border);
  cursor: pointer;
  color: var(--base-text);
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  min-width: 104px;
  padding: 0px 16px;
  width: fit-content;
}

.button:disabled {
  background: var(--disabled);
}

.button:not(.primary):active {
  background: var(--third);
}

.primary {
  border: none;
  color: var(--white);
  background: var(--primary);
}

.primary:active {
  opacity: 0.8;
}

.small {
  font-size: 12px;
  height: 34px;
  min-width: auto;
  padding: 0px 12px;
}

.flat {
  border: none;
  min-width: auto;
  padding: 0 4px;
}
</style>
