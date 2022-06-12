<template>
  <ModalBase class="edit-score-modal" :title="`スコア編集 - ${scoreIndex + 1}回戦`" @close="onClose">
    <List gap="24px">
      <div class="actions">
        <Button @click="onClear">クリア</Button>
        <div v-if="isDifference(model.score)" class="error">{{ diff }}ポイント差分があります</div>
      </div>
      <List>
        <Item v-for="(player, i) in players" :key="i">
          <div class="name">{{ player }}</div>
          <div class="form-field">
            <TextInput v-model.number="model.score[i]" @blur="onBlur(i)" />
            <Button
              v-if="model.score[i] === 0 && isDifference(model.score)"
              small
              class="auto-input"
              @click="onAutoComplete(i)"
            >
              自動入力
            </Button>
          </div>
        </Item>
      </List>
    </List>
    <template #footer>
      <Button @click="onClose">キャンセル</Button>
      <Button primary :disabled="isDifference(model.score)" @click="onSave">保存</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive, computed } from 'vue'
import { fill } from '@/utils/array'
import { isDifference } from '@/utils/validator'
import Button from '@/components/atoms/Button.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import List from '@/components/atoms/List.vue'
import Item from '@/components/atoms/Item.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'EditScoreModal',
  components: {
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
    score: {
      type: Array,
      required: true,
    },
    scoreIndex: {
      type: Number,
      required: true,
    }
  },
  setup(props, { emit }) {
    const model = reactive({ score: [...props.score] })
    const diffRef = computed(() => model.score.reduce((acc, s) => acc += +s, 0))

    return {
      isDifference,
      model,
      diff: diffRef,
      onBlur: i => !Number.isInteger(model.score[i]) && (model.score[i] = 0),
      onAutoComplete: i => model.score[i] -= diffRef.value,
      onClear: () => model.score = fill(props.players.length),
      onClose: () => emit('close'),
      onSave: () => emit('save', { score: [...model.score] }),
    }
  }
}
</script>

<style scoped>
.actions {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.error {
  color: var(--error);
  font-size: 13px;
  font-weight: bold;
}

.name {
  font-weight: bold;
}

.form-field {
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  grid-template-columns: 1fr max-content;
}

.text-input {
  text-align: right;
}
</style>