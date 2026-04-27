import { App, Component, createApp, h, ref } from 'vue'

/**
 * コンポーネントをtargetに描画する
 */
export const asyncRender = <T = unknown>(
  component: Component,
  { props, target }: { props?: Record<string, unknown>; target: string },
): Promise<T> => {
  const instanceRef = ref<App | null>(null)
  return new Promise<T>(resolve => {
    instanceRef.value = createApp({
      render: () => h(component as never, { ...props, resolve }),
    })
    instanceRef.value.mount(target)
  })
    .then(status => {
      instanceRef.value?.unmount()
      return status
    })
}

export const asyncRenderProps = {
  resolve: {
    type: Function,
    required: true,
  },
} as const
