<template>
  <div class="dialog">
    <Grid class="card">
      <AlertOutlineIcon v-if="type === 'warning'" :size="32" />
      <AlertOctagramIcon v-if="type === 'error'" :size="32" />
      <Label bold class="message">{{ message }}</Label>
      <Flex justify="center" gap="16px">
        <Button v-if="cancellable" @click="resolve(false)">キャンセル</Button>
        <Button @click="resolve(true)" primary>OK</Button>
      </Flex>
    </Grid>
  </div>
</template>

<script>
import { asyncRenderProps } from '@/utils/vue'
import AlertOutlineIcon from 'vue-material-design-icons/AlertOutline.vue'
import AlertOctagramIcon from 'vue-material-design-icons/AlertOctagram.vue'
import Button from '@/components/atoms/Button.vue'
import Flex from '@/components/atoms/Flex.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Dialog',
  components: {
    AlertOutlineIcon,
    AlertOctagramIcon,
    Button,
    Flex,
    Grid,
    Label,
  },
  props: {
    ...asyncRenderProps,
    type: {
      type: String,
      validator: v => ['warning', 'error'].includes(v),
    },
    message: {
      type: String,
      required: true,
    },
    cancellable: {
      type: Boolean,
      default: false,
    },
  },
}
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
  min-width: 256px;
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