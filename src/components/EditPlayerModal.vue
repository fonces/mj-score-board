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

<script setup lang="ts">
import { reactive, computed, watch, PropType } from 'vue'
import TrashIcon from 'vue-material-design-icons/TrashCanOutline.vue'
import Button from '@/components/atoms/Button.vue'
import Grid from '@/components/atoms/Grid.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import FormField from '@/components/atoms/FormField.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

const props = defineProps({
  players: {
    type: Array as PropType<string[]>,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'save', payload: { players: string[]; deleted: number[] }): void
  (e: 'close'): void
}>()

const model = reactive<{ players: string[]; deleted: number[] }>({
  players: [...props.players, ''],
  deleted: [],
})
const lastIndexRef = computed(() => model.players.length - 1)

watch(
  () => model.players[lastIndexRef.value],
  player => player && (model.players = [...model.players, ''])
)

const isLastIndex = (i: number) => i === lastIndexRef.value
const onDelete = (i: number) => (model.deleted = [...model.deleted, i])
const onSave = () => emit('save', {
  players: 4 < model.players.length ? [...model.players].slice(0, -1) : [...model.players],
  deleted: [...model.deleted],
})
const onClose = () => emit('close')
</script>

<style scoped>
.undeletable {
  visibility: hidden;
}
</style>
