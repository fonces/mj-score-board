<template>
  <div class="switch">
    <label :for="name">
      <slot />
    </label>
    <input
      :id="name"
      type='checkbox'
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.checked)"
    />
    <label class="button" :for="name" />
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
    },
  },
}
</script>

<style scoped>
.switch {
  align-items: center;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  width: fit-content;
}

input {
  display: none;
}

.button {
  width: 48px;
  height: 24px;
  background: var(--gray);
  position: relative;
  display: inline-block;
  border-radius: 46px;
  transition: 0.2s;
  box-sizing: border-box;
}

.button:after {
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

input:checked + .button {
  background-color: var(--primary);
}

input:checked + .button:after{
  left: 24px;
}
</style>
