<template>
  <ModalBase class="edit-score-modal" :title="`スコア編集 - ${scoreIndex}回戦`" @close="onClose">
    <div class="container">
      <div class="actions">
        <Button @click="onClear">クリア</Button>
        <div v-if="isDifference(model.score)" class="error">{{ diff }}ポイント差分があります</div>
      </div>
      <div class="list">
        <div v-for="(player, i) in players" :key="i" class="item">
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
        </div>
      </div>
    </div>
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
import ModalBase from '@/components/ModalBase.vue'
import Button from '@/components/Button.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'EditScoreModal',
  components: {
    Button,
    ModalBase,
    TextInput,
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
      typpe: Number,
      required: true,
    }
  },
  setup(props, { emit }) {
    const model = reactive({
      score: [...props.score],
    })
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
.container {
  display: grid;
  gap: 24px;
}

.actions {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}

.error {
  color: #ff4500;
  font-size: 13px;
  font-weight: bold;
}

.list {
  display: grid;
  gap: 12px;
}

.item {
  display: grid;
  gap: 4px;
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