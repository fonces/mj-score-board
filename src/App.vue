<template>
  <ScoreTable />
</template>

<script>
import '@/assets/reset.css'
import '@/assets/root.css'
import ScoreTable from '@/components/ScoreTable.vue'

export default {
  name: 'App',
  components: {
    ScoreTable,
  },
}
</script>

<style>
html {
  background: var(--overflow-bg);
}

body {
  color: var(--base-text);
  font-size: 16px;
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
