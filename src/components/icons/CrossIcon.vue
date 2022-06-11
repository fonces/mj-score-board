<template>
  <div class="cross" />
</template>

<script>
export default {
  name: 'CrossIcon',
}
</script>

<style lang="postcss" scoped>
.cross {
  display: block;
  position: relative;
  width: 24px;
  height: 24px;
}
 
.cross::before, .cross::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 24px;
  background: #333;
}
 
.cross::before {
  transform: translate(-50%,-50%) rotate(45deg);
}
 
.cross::after {
  transform: translate(-50%,-50%) rotate(-45deg);
}
</style>