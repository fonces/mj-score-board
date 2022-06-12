<template>
  <ModalBase class="edit-player-modal" title="ユーザー編集" @close="onClose">
    <List gap="24px">
      <List>
        <Item v-for="(player, i) in model.players" :key="i">
          <TextInput
            v-model.trim="model.players[i]"
            :disabled="model.deleted.includes(i)"
            placeholder="Please player Name..."
          />
          <CrossIcon
            :class="{ undeletable: model.deleted.includes(i) || isLastIndex(i) }"
            @click="onDelete(i)"
          />
        </Item>
      </List>
    </List>
    <template #footer>
      <Button @click="onClose">キャンセル</Button>
      <Button primary @click="onSave">保存</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive, computed, watch } from 'vue'
import CrossIcon from '@/components/icons/CrossIcon.vue'
import Button from '@/components/atoms/Button.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import List from '@/components/atoms/List.vue'
import Item from '@/components/atoms/Item.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'EditPlayerModal',
  components: {
    CrossIcon,
    Button,
    TextInput,
    List,
    Item,
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
    const lastUserRef = computed(() => model.players[lastIndexRef.value])

    watch(
      () => lastUserRef.value,
      player => player && (model.players = [...model.players, ''])
    )

    return {
      model,
      isLastIndex: i => i === lastIndexRef.value,
      onDelete: i => (model.deleted = [...model.deleted, i]),
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
.item {
  align-items: center;
  flex-direction: column;
  grid-template-columns: 1fr max-content;
}

.cross.undeletable {
  visibility: hidden;
}
</style>