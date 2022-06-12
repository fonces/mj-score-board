<template>
  <div class="cross" />
</template>

<script>
export default {
  name: 'CrossIcon',
}
</script>

<style scoped>
.cross {
  display: block;
  cursor: pointer;
  height: 24px;
  position: relative;
  width: 24px;
}
 
.cross::before, .cross::after {
  content: "";
  background: var(--black);
  height: 24px;
  left: 50%;
  position: absolute;
  top: 50%;
  width: 4px;
}
 
.cross::before {
  transform: translate(-50%,-50%) rotate(45deg);
}
 
.cross::after {
  transform: translate(-50%,-50%) rotate(-45deg);
}
</style>