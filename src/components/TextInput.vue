<template>
  <input
    type="text"
    class="text-input"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="onFocus"
  />
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props) {
    return {
      onFocus: e => (e.target.setSelectionRange(0, String(props.modelValue).length))
    }
  }
}
</script>

<style scoped>
.text-input {
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px var(--border);
  color: var(--base-text);
  font-size: 14px;
  padding: 8px;
}

.text-input[type="tel"],
.text-input[type="number"] {
  text-align: right;
}

.text-input:focus,
.text-input:focus-within {
	outline: none;
  border: solid 1px var(--primary);
}

.text-input:disabled {
  background: var(--disabled);
}
</style>