<template>
  <button v-bind="$attrs" type="button" class="button" :class="{ primary, small }">
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
  }
}
</script>

<style scoped lang="postcss">
.button {
  background-color: transparent;
  border-radius: 4px;
  border: 1px solid #666;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  min-width: 104px;
  padding: 0px 16px;
  width: fit-content;
}

.button:disabled {
  background-color: #ddd;
}

.primary {
  color: #fff;
  background-color: #0099FF;
  border: none;
}

.small {
  font-size: 12px;
  height: 34px;
  padding: 0px 12px;
  min-width: auto;
}
</style>
