<template>
  <input
    ref="root"
    type="text"
    class="text-input"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    @focus="onFocus"
  />
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: ['modelValue'],
  emits: ['update:modelValue'],
  setup(props) {
    const rootRef = ref(null)

    return {
      root: rootRef,
      onFocus: e => (e.target.setSelectionRange(0, String(props.modelValue).length))
    }
  }
}
</script>

<style scoped>
.text-input {
  box-sizing: border-box;
  border-radius: 4px;
  border: solid 1px #666;
  font-size: 14px;
  padding: 8px;
}

.text-input[type="tel"],
.text-input[type="number"] {
  text-align: right;
}

.text-input:disabled {
  background: #ddd;
}
</style>