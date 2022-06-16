<template>
  <ModalBase class="edit-chips-modal" title="チップ編集" @close="onClose">
    <Grid gap="24px">
      <Actions>
        <Button @click="onClear">クリア</Button>
        <Error v-if="diff" :message="`${diff}枚差分があります`" />
      </Actions>
      <Item>
        <SectionTitle>チップ</SectionTitle>
        <FormField :columns="['max-content', '1fr', 'max-content']">
          <label>1枚:</label>
          <TextInput v-model.number="model.chipRate" type="tel" align="right" @blur="onBlurChipRate" />
          <label>点相当</label>
        </FormField>
      </Item>
      <Grid>
        <Item v-for="(player, i) in players" :key="i">
          <SectionTitle>{{ player }}</SectionTitle>
          <FormField>
            <TextInput v-model.number="model.chips[i]" align="right" @blur="onBlur(i)" />
            <label>枚</label>
            <Button v-if="model.chips[i] === 0 && diff" small @click="onAutoComplete(i)">
              自動入力
            </Button>
          </FormField>
        </Item>
      </Grid>
    </Grid>
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
import FormField from '@/components/atoms/FormField.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import SectionTitle from '@/components/atoms/SectionTitle.vue'
import Grid from '@/components/atoms/Grid.vue'
import Item from '@/components/atoms/Item.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'EditChipModal',
  components: {
    Actions,
    Button,
    Error,
    FormField,
    TextInput,
    SectionTitle,
    Grid,
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
      onClear: () => {
        model.chips = fill(props.players.length)
        model.chipRate = 5000
      },
      onSave: () => emit('save', { ...model, chips: [...model.chips] }),
      onClose: () => emit('close'),
    }
  },
}
</script>
