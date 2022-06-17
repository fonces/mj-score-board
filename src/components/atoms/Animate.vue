<template>
  <transition :name="name">
    <slot />
  </transition>
</template>

<script>
export const ANIMATION = {
  SLIDE_UP: 'slide-up',
  SLIDE_RIGHT: 'slide-right',
  SLIDE_DOWN: 'slide-down',
  SLIDE_LEFT: 'slide-left',
}

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Animate',
  props: {
    name: {
      type: String,
      required: true,
      validator: v => Object.values(ANIMATION).includes(v),
    },
  },
}
</script>

<style scoped>
.slide-up-enter-active {
  animation: slide-up .25s;
}
.slide-up-leave-active {
  animation: slide-up .25s reverse;
}
@keyframes slide-up {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(0);
  }
}

.slide-right-enter-active {
  animation: slide-right .25s;
}
.slide-right-leave-active {
  animation: slide-right .25s reverse;
}
@keyframes slide-right {
  0% {
    transform: translateX(100%);
  }
  100% {
    transform: translateX(0);
  }
}

.slide-down-enter-active {
  animation: slide-down .25s;
}
.slide-down-leave-active {
  animation: slide-down .25s reverse;
}
@keyframes slide-down {
  0% {
    transform: translateY(-100%);
  }
  100% {
    transform: translateY(0);
  }
}

.slide-left-enter-active {
  animation: slide-left .25s;
}
.slide-left-leave-active {
  animation: slide-left .25s reverse;
}
@keyframes slide-left {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>