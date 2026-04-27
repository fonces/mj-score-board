/* eslint-disable no-console */

import { register } from 'register-service-worker'

if (process.env.NODE_ENV === 'production') {
  // 既存の SW がページを制御している状態で新しい SW がアクティブ化されると
  // controllerchange が発火する。その瞬間にリロードしてキャッシュ済みの
  // 古いバンドルを破棄し、デプロイされた最新版に切り替える。
  // 初回インストール時（controller が未設定）は通常の起動なのでスキップする。
  const hadController = navigator.serviceWorker?.controller != null
  let refreshing = false
  navigator.serviceWorker?.addEventListener('controllerchange', () => {
    if (!hadController || refreshing) return
    refreshing = true
    window.location.reload()
  })

  register(`${process.env.BASE_URL}service-worker.js`, {
    ready() {
      console.log(
        'App is being served from cache by a service worker.\n' +
        'For more details, visit https://goo.gl/AFskqB'
      )
    },
    registered() {
      console.log('Service worker has been registered.')
    },
    cached() {
      console.log('Content has been cached for offline use.')
    },
    updatefound() {
      console.log('New content is downloading.')
    },
    updated() {
      console.log('New content is available; reloading...')
    },
    offline() {
      console.log('No internet connection found. App is running in offline mode.')
    },
    error(error) {
      console.error('Error during service worker registration:', error)
    },
  })
}
