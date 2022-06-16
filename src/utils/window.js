import { onBeforeMount, onUnmounted } from 'vue'

export const useFillViewHeight = () => {
  const events = ['resize', 'orientationchange']
  const setFillHeight = () => {
    const vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty('--vh', `${vh}px`)
  }

  onBeforeMount(() => events.map(e => window.addEventListener(e, setFillHeight)))
  onUnmounted(() => events.map(e => window.removeEventListener(e, setFillHeight)))

  setFillHeight()
}
