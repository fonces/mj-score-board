<template>
  <ScoreTable />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { pageview } from 'vue-gtag'
import '@/assets/reset.css'
import '@/assets/root.css'
import { useFillViewHeight } from '@/utils/window'
import ScoreTable from '@/components/ScoreTable.vue'

export default defineComponent({
  name: 'App',
  components: {
    ScoreTable,
  },
  setup() {
    useFillViewHeight()
    pageview({ page_path: '/index' })
  },
})
</script>

<style>
html {
  background: var(--overflow-bg);
}

body {
  color: var(--base-text);
}

#app {
  overflow: scroll;
  height: 100vh;
  height: calc(var(--vh, 1vh) * 100);
}

#app::-webkit-scrollbar {
  display: none;
}

#app.printing {
  background: var(--third);
  height: min-content !important;
  width: min-content !important;
  padding: 16px;
}

#modal {
  z-index: 100;
}

#dialog {
  z-index: 200;
}
</style>
