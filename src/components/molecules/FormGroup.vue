<template>
  <div class="form-group">
    <div class="title bold">{{ title }}</div>
    <slot />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'FormGroup',
  props: {
    title: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.form-group {
  display: grid;
  gap: 8px;
}

.title {
  font-size: 16px;
}
</style>
