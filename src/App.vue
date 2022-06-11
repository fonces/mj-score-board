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
body {
  position: relative;
}

#app {
  overflow: scroll;
}


#app::-webkit-scrollbar {
  display:none;
}
</style>