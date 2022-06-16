<template>
  <div class="section-title bold">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
}
</script>

<style scoped>
.section-title {
  font-size: 16px;
}
</style>
