<template>
  <ModalBase class="edit-chips-modal" title="チップ編集" @close="onClose">
    <div class="container">
      <div class="actions">
        <Button @click="onClear">クリア</Button>
        <div v-if="isDifference(model.chips)" class="error">{{ diff }}枚差分があります</div>
      </div>
      <div class="form-field chip-rate">
        <label>チップ1枚</label>
        <TextInput v-model.number="model.chipRate" type="tel" @blur="onBlurChipRate" />
        <label>点相当</label>
      </div>
      <div class="list">
        <div v-for="(player, i) in players" :key="i" class="item">
          <div class="name">{{ player }}</div>
          <div class="form-field">
            <TextInput v-model.number="model.chips[i]" @blur="onBlur(i)" />
            <label>枚</label>
            <Button
              v-if="model.chips[i] === 0 && isDifference(model.chips)"
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
      <Button primary :disabled="isDifference(model.chips)" @click="onSave">保存</Button>
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
  name: 'EditChipModal',
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
    chips: {
      type: Array,
      required: true,
    },
    chipRate: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const model = reactive({
      chips: [...props.chips],
      chipRate: props.chipRate,
    })
    const diffRef = computed(() => model.chips.reduce((acc, s) => acc += +s, 0))

    return {
      isDifference,
      model,
      diff: diffRef,
      onBlur: i => !Number.isInteger(model.chips[i]) && (model.chips[i] = 0),
      onBlurChipRate: () => (!Number.isInteger(model.chipRate) || model.chipRate % 1000 !== 0) && (model.chipRate = props.chipRate),
      onAutoComplete: i => model.chips[i] -= diffRef.value,
      onClear: () => model.chips = fill(props.players.length),
      onClose: () => emit('close'),
      onSave: () => emit('save', { ...model, chips: [...model.chips] }),
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
  color: var(--error);
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
  align-items: center;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  grid-template-columns: 1fr max-content max-content;
}

.chip-rate {
  grid-template-columns: max-content 1fr max-content;
}

.text-input {
  text-align: right;
}
</style>