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
  background: #ccc;
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
  background-color: #0099FF;
}

label:after {
    content: '';
    position: absolute;
    width: 24px;
    height: 24px;
    border-radius: 100%;
    left: 0;
    top: 0;
    z-index: 2;
    background: #fff;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
    cursor: pointer;
  }

input:checked + label:after{
  left: 24px;
}

</style>