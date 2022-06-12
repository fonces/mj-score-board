<template>
  <div class="error">
    {{ message }}
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Error',
  props: {
    message: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
.error {
  color: var(--error);
  font-size: 13px;
  font-weight: bold;
}
</style>