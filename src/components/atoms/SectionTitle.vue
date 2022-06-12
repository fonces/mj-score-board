<template>
  <div class="section-title">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'SectionTitle',
}
</script>

<style>
.section-title {
  font-weight: bold;
}
</style>