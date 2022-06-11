<template>
  <ModalBase class="result-modal" title="結果" @close="onClose">
    <div class="container">
      <div class="list">
        <div class="item">
          <div class="form-name">レート</div>
          <div class="form-group">
            <label>1000点:</label>
            <TextInput v-model.number="model.rate" type="tel" @blur="onBlur('rate', 50)" />
            <label>円</label>
          </div>
        </div>
        <div class="item">
          <div class="form-name">チップ</div>
          <div class="form-group">
            <label>1枚:</label>
            <TextInput v-model.number="model.chip" type="tel" @blur="onBlur('chip', 5000)" />
            <label>点相当</label>
          </div>
        </div>
        <div class="item">
          <div class="form-name">結果</div>
          <div class="list">
            <div v-for="(player, i) in players"  :key="i" class="form-group">
              <label>{{ player }}</label>
              <div />
              <label>{{ toPrice(i) }}円</label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <template #footer>
      <Button @click="onClose">キャンセル</Button>
      <Button primary @click="onReset">戦績クリア</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive } from 'vue'
import ModalBase from '@/components/ModalBase.vue'
import Button from '@/components/Button.vue'
import TextInput from '@/components/TextInput.vue'

export default {
  name: 'ResultModal',
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
    scores: {
      type: Array,
      required: true,
    },
  },
  setup(props, { emit }) {
    const model = reactive({ rate: 50, chip: 5000 })
    const toPrice = (i) => {
      const score = props.scores.reduce((acc, score) => acc + score[i], 0)
      return Number(score * model.rate).toLocaleString()
    }

    return {
      model,
      toPrice,
      onBlur: (type, defaultValue) => !Number.isInteger(model[type]) && (model[type] = defaultValue),
      onReset: () => emit('reset'),
      onClose: () => emit('close'),
      onSave: () => {},
    }
  }
}
</script>

<style scoped>
.container {
  display: grid;
  gap: 24px;
}

.list {
  display: grid;
  gap: 12px;
}

.item {
  display: grid;
  gap: 4px;
}

.form-name {
  font-weight: bold;
}

.form-group {
  align-items: center;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  grid-template-columns: max-content 1fr max-content;
}

.actions {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
</style>