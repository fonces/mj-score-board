<template>
  <div class="modal-base">
    <header>
      <div class="title bold">{{ title }}</div>
      <Button flat @click="$emit('close')">
        <CloseIcon :size="32" />
      </Button>
    </header>
    <main>
      <slot />
    </main>
    <footer>
      <slot name="footer" />
    </footer>
  </div>
</template>

<script>
import CloseIcon from 'vue-material-design-icons/Close.vue'
import Button from '@/components/atoms/Button.vue'

export default {
  name: 'ModalBase',  
  components: {
    CloseIcon,
    Button,
  },
  props: {
    title: {
      type: String,
    },
  },
}
</script>

<style scoped>
.modal-base {
  background: var(--base-bg);
  position: fixed;
  top: 0;
  height: 100%;
  width: 100%;
  overflow: scroll;
  overscroll-behavior: contain;
  z-index: 999;
}

.modal-base::-webkit-scrollbar {
  display: none;
}

.title {
  font-size: 18px;
  margin-left: 40px;
  text-align: center;
}

header,
footer {
  background: var(--base-bg);
  align-items: center;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 2;
}

header {
  grid-template-columns: 1fr max-content;
  height: 48px;
  filter: drop-shadow(0 1px 2px var(--gray));
  padding: 0 16px;
  top: 0;
}

main {
  padding: 16px;
  margin: 48px 0 64px 0;
}

footer {
  bottom: 0;
  filter: drop-shadow(-1px 0 2px var(--gray));
  grid-template-columns: 1fr;
  padding: 12px 16px;
}
</style>
