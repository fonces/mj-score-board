import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import App from '@/App.vue'
import { store, key } from '@/store'
import '@/registerServiceWorker'

createApp(App)
  .use(store, key)
  .use(VueGtag, { config: { id: process.env.VUE_APP_GA_MEASUREMENT_ID } })
  .mount('#app')
