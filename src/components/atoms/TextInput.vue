<template>
  <input
    type="text"
    class="text-input"
    v-bind="$attrs"
    :style="{ textAlign: align }"
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    @focus="onFocus"
  />
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'

type Align = 'left' | 'center' | 'right'

export default defineComponent({
  name: 'TextInput',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: [String, Number] as PropType<string | number>,
      required: true,
    },
    align: {
      type: String as PropType<Align>,
      default: 'left',
      validator: (v: string) => ['left', 'center', 'right'].includes(v),
    },
  },
  setup(props) {
    return {
      onFocus: (e: FocusEvent) => {
        const target = e.target as HTMLInputElement
        target.setSelectionRange(0, String(props.modelValue).length)
      },
    }
  },
})
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
