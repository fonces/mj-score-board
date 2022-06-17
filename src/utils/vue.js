import { createApp, h, ref } from 'vue'

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
