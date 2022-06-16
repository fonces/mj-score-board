<template>
  <ScoreTable />
</template>

<script>
import { pageview } from 'vue-gtag'
import '@/assets/reset.css'
import '@/assets/root.css'
import ScoreTable from '@/components/ScoreTable.vue'

export default {
  name: 'App',
  components: {
    ScoreTable,
  },
  setup() {
    pageview('/index')
  },
}
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
}

#app::-webkit-scrollbar {
  display: none;
}

#app.printing {
  background: var(--therd);
  height: min-content !important;
  width: min-content !important;
  padding: 16px;
}
</style>
