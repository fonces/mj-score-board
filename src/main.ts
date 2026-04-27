import { createApp } from 'vue'
import App from '@/App.vue'
import { store, key } from '@/store'
import '@/registerServiceWorker'

const app = createApp(App)
  .use(store, key)

app.mount('#app')

const loadGtag = async () => {
  const { default: VueGtag, pageview } = await import('vue-gtag')
  app.use(VueGtag, { config: { id: process.env.VUE_APP_GA_MEASUREMENT_ID } })
  pageview({ page_path: '/index' })
}

if (typeof requestIdleCallback === 'function') {
  requestIdleCallback(() => loadGtag())
} else {
  setTimeout(loadGtag, 0)
}
