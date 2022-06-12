<template>
  <ScoreTable />
</template>

<script>
import '@/reset.css'
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
  background: #DEB887;
}

#app {
  overflow: scroll;
  height: 100vh;
}

#app::-webkit-scrollbar {
  display:none;
}

#app.printing {
  background: aliceblue;
  height: min-content !important;
  width: min-content !important;
  padding: 16px;
}
</style>
