<template>
  <ModalBase class="edit-player-modal" title="ユーザー編集" @close="onClose">
    <div class="container">
      <div class="actions">
        <Button @click="onReset">リセット</Button>
      </div>
      <div class="list">
        <div v-for="(player, i) in model.players" :key="i" class="item">
          <TextInput
            v-model.trim="model.players[i]"
            :disabled="model.deleted.includes(i)"
            placeholder="Please player Name..."
          />
          <CrossIcon
            :class="{ undeletable: model.deleted.includes(i) || isLastIndex(i) }"
            @click="onDelete(i)"
          />
        </div>
      </div>
    </div>
    <template #footer>
      <Button @click="onClose">キャンセル</Button>
      <Button primary @click="onSave">保存</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive, computed, watch } from 'vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'
import ModalBase from '@/components/ModalBase.vue'
import Button from '@/components/Button.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'EditPlayerModal',
  components: {
    CrossIcon,
    Button,
    ModalBase,
    TextInput,
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
    const lastUserRef = computed(() => model.players[lastIndexRef.value])

    watch(
      () => lastUserRef.value,
      player => player && (model.players = [...model.players, ''])
    )

    return {
      model,
      isLastIndex: i => i === lastIndexRef.value,
      onDelete: i => (model.deleted = [...model.deleted, i]),
      onReset: () => emit('reset'),
      onClose: () => emit('close'),
      onSave: () => emit('save', {
        players: 4 < model.players.length ? [...model.players].slice(0, -1) : [...model.players],
        deleted: [...model.deleted],
      }),
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  gap: 24px;
}

.actions {
  display: flex;
  justify-content: flex-end;
}

.list {
  display: grid;
  gap: 12px;
}

.item {
  align-items: center;
  display: grid;
  flex-direction: column;
  gap: 8px;
  grid-template-columns: 1fr max-content;
}

.cross.undeletable {
  visibility: hidden;
}
</style>