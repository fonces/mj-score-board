<template>
  <div class="form-field" :style="{ gridTemplateColumns }">
    <slot />
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
  name: 'FormField',
  props: {
    columns: {
      type: Array,
      default: () => (['1fr', 'max-content']),
    },
  },
  setup(props) {
    return {
      gridTemplateColumns: computed(() => props.columns.join(' ')),
    }
  }
}
</script>

<style>
.form-field {
  align-items: center;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
}
</style>
