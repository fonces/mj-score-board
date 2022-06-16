<template>
  <ModalBase class="edit-player-modal" title="プレイヤー名編集" @close="onClose">
    <Grid gap="24px">
      <Grid>
        <FormField v-for="(player, i) in model.players" :key="i">
          <TextInput
            v-model.trim="model.players[i]"
            :disabled="model.deleted.includes(i)"
            placeholder="Please player name..."
          />
          <Button
            small
            :class="{ undeletable: model.deleted.includes(i) || isLastIndex(i) }"
            @click="onDelete(i)"
          >
            <TrashIcon />
          </Button>
        </FormField>
      </Grid>
    </Grid>
    <template #footer>
      <Button @click="onClose">キャンセル</Button>
      <Button primary @click="onSave">保存</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive, computed, watch } from 'vue'
import TrashIcon from 'vue-material-design-icons/TrashCanOutline.vue'
import Button from '@/components/atoms/Button.vue'
import Grid from '@/components/atoms/Grid.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import FormField from '@/components/atoms/FormField.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'EditPlayerModal',
  components: {
    Button,
    FormField,
    Grid,
    TextInput,
    TrashIcon,
    ModalBase,
  },
  props: {
    players: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const model = reactive({
      players: [...props.players, ''],
      deleted: [],
    })
    const lastIndexRef = computed(() => model.players.length - 1)

    watch(
      () => model.players[lastIndexRef.value],
      player => player && (model.players = [...model.players, ''])
    )

    return {
      model,
      isLastIndex: i => i === lastIndexRef.value,
      onDelete: i => (model.deleted = [...model.deleted, i]),
      onSave: () => emit('save', {
        players: 4 < model.players.length ? [...model.players].slice(0, -1) : [...model.players],
        deleted: [...model.deleted],
      }),
      onClose: () => emit('close'),
    }
  },
}
</script>

<style scoped>
.undeletable {
  visibility: hidden;
}
</style>
