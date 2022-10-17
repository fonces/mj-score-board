import { createApp, h, ref } from 'vue'

/**
 * コンポーネントをtargetに描画する
 * @param {Component} component 
 * @param {Object} param1 
 * @returns 
 */
export const asyncRender = (component, { props, target }) => {  
  const instanceRef = ref(null)
  return new Promise(resolve => {
    instanceRef.value = createApp({
      render: () => h(component, { ...props, resolve })
    })
    instanceRef.value.mount(target)
  })
    .then(status => {
      instanceRef.value.unmount()
      return status
    })
}

export const asyncRenderProps = {
  resolve: {
    type: Function,
    required: true,
  },
}
