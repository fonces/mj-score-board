<template>
  <input
    type="text"
    class="text-input"
    v-bind="$attrs"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script>
export default {
  name: 'TextInput',
  inheritAttrs: false,
  props: ['modelValue'],
  emits: ['update:modelValue'],
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

.text-input:disabled {
  background: #ddd;
}
</style>