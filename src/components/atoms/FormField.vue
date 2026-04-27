<template>
  <div class="form-field" :style="{ gridTemplateColumns }">
    <slot />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'FormField',
  props: {
    columns: {
      type: Array as PropType<string[]>,
      default: () => (['1fr', 'max-content']),
    },
  },
  setup(props) {
    return {
      gridTemplateColumns: computed(() => props.columns.join(' ')),
    }
  },
})
</script>

<style>
.form-field {
  align-items: center;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
}
</style>
