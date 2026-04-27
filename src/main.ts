import { createApp } from 'vue'
import VueGtag from 'vue-gtag'
import App from '@/App.vue'
import '@/registerServiceWorker'

createApp(App)
  .use(VueGtag, { config: { id: process.env.VUE_APP_GA_MEASUREMENT_ID } })
  .mount('#app')
