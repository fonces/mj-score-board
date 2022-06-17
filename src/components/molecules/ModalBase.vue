<template>
  <div class="modal-base">
    <div class="container">
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
  background: var(--overflow-bg);
  height: 100%;
  overflow: hidden;
  overscroll-behavior: contain;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: inherit;
}

.modal-base::-webkit-scrollbar,
.container::-webkit-scrollbar {
  display: none;
}

.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  height: 100%;
  overflow: scroll;
  overscroll-behavior: contain;
  position: relative;
}

.title {
  font-size: 18px;
  margin-left: 40px;
  text-align: center;
}

header,
footer,
main {
  background: var(--base-bg);
}

header,
footer {
  align-items: center;
  box-sizing: border-box;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  position: sticky;
  width: 100%;
  z-index: 2;
}

header {
  grid-template-columns: 1fr max-content;
  box-shadow: -1px 1px 3px var(--shadow);
  height: 48px;
  min-height: 48px;
  padding: 0 16px;
  top: 0;
}

main {
  height: 100%;
  padding: 16px;
}

footer {
  bottom: 0;
  box-shadow: 0 -1px 3px var(--shadow);
  grid-template-columns: 1fr;
  height: 64px;
  min-height: 64px;
  padding: 12px 16px;
}
</style>
