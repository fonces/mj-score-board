<template>
  <div class="switch">
    <input
      :id="name"
      type='checkbox'
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <label :for="name" />
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Switch',
  inheritAttrs: false,
  emits: ['update:modelValue'],
  props: {
    modelValue: {
      type: Boolean,
      required: true,
    },
    name: {
      type: String,
      required: true,
    }
  }
}
</script>

<style scoped>
label {
  width: 48px;
  height: 24px;
  background: var(--gray);
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.2s;
  box-sizing: border-box;
}

input {
  display: none;
}

input:checked + label{
  background-color: var(--primary);
}

label:after {
    content: '';
    cursor: pointer;
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    left: 0;
    top: 0;
    background: var(--white);
    box-shadow: 0 0 5px var(--shadow);
    transition: 0.2s;
    z-index: 2;
  }

input:checked + label:after{
  left: 24px;
}
</style>