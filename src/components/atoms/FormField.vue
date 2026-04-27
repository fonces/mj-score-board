<template>
  <div class="form-field" :style="{ gridTemplateColumns }">
    <slot />
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from 'vue'

const props = defineProps({
  columns: {
    type: Array as PropType<string[]>,
    default: () => (['1fr', 'max-content']),
  },
})

const gridTemplateColumns = computed(() => props.columns.join(' '))
</script>

<style>
.form-field {
  align-items: center;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
}
</style>
