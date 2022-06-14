<template>
  <ModalBase class="edit-chips-modal" title="チップ編集" @close="onClose">
    <List gap="24px">
      <Actions>
        <Button @click="onClear">クリア</Button>
        <Error v-if="diff" :message="`${diff}枚差分があります`" />
      </Actions>
      <div class="form-field chip-rate">
        <label>チップ1枚</label>
        <TextInput v-model.number="model.chipRate" type="tel" align="right" @blur="onBlurChipRate" />
        <label>点相当</label>
      </div>
      <List>
        <Item v-for="(player, i) in players" :key="i">
          <SectionTitle>{{ player }}</SectionTitle>
          <div class="form-field">
            <TextInput v-model.number="model.chips[i]" align="right" @blur="onBlur(i)" />
            <label>枚</label>
            <Button
              v-if="model.chips[i] === 0 && diff"
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
      <Button primary :disabled="diff" @click="onSave">保存</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive, computed } from 'vue'
import { fill, sum } from '@/utils/array'
import Actions from '@/components/atoms/Actions.vue'
import Button from '@/components/atoms/Button.vue'
import Error from '@/components/atoms/Error.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import SectionTitle from '@/components/atoms/SectionTitle.vue'
import List from '@/components/atoms/List.vue'
import Item from '@/components/atoms/Item.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'EditChipModal',
  components: {
    Actions,
    Button,
    Error,
    TextInput,
    SectionTitle,
    List,
    Item,
    ModalBase,
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
    const diffRef = computed(() => sum(model.chips))

    return {
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
</style>