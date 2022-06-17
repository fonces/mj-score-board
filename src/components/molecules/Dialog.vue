<template>
  <div class="dialog">
    <Grid class="card">
      <AlertOutlineIcon v-if="type === 'warning'" :size="32" />
      <Label bold class="message">{{ message }}</Label>
      <Grid flow="column">
        <Button @click="resolve(false)">キャンセル</Button>
        <Button @click="resolve(true)" primary>OK</Button>
      </Grid>
    </Grid>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import { asyncRenderProps } from '@/utils/vue'
import AlertOutlineIcon from 'vue-material-design-icons/AlertOutline.vue'
import Button from '@/components/atoms/Button.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'

export default defineComponent({
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dialog',
  components: {
    AlertOutlineIcon,
    Button,
    Grid,
    Label,
  },
  props: {
    ...asyncRenderProps,
    type: {
      type: String,
      validator: v => ['warning'].includes(v),
    },
    message: {
      type: String,
      required: true,
    },
  },
})
</script>

<style scoped>
.dialog {
  align-items: center;
  background: var(--shadow);
  display: flex;
  height: 100%;
  justify-content: center;
  overflow: hidden;
  overscroll-behavior: contain;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: inherit;
}

.card {
  background: var(--base-bg);
  border-radius: 4px;
  height: min-content;
  padding: 24px 16px 16px 16px;
  width: min-content;
}

.material-design-icon {
  justify-self: center;
}

.message {
  text-align: center;
  white-space: pre-wrap;
}
</style>