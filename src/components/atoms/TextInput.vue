<template>
  <input
    type="text"
    class="text-input"
    v-bind="$attrs"
    :style="{ textAlign: align }"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="onFocus"
  />
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number],
      required: true,
    },
    align: {
      type: String,
      default: 'left',
      validator: v => ['left', 'center', 'right'].includes(v),
    },
  },
  setup(props) {
    return {
      onFocus: e => (e.target.setSelectionRange(0, String(props.modelValue).length)),
    }
  },
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

.text-input:focus {
  border: solid 1px var(--primary);
  outline: none;
}

.text-input:disabled {
  background: var(--disabled);
}
</style>
