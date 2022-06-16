<template>
  <ModalBase class="edit-chips-modal" title="チップ編集" @close="onClose">
    <Grid gap="24px">
      <Actions>
        <Button @click="onClear">クリア</Button>
        <Label v-if="diff" bold error>{{ `${diff}枚差分があります` }}</Label>
      </Actions>
      <FormGroup title="チップ">
        <FormField :columns="['max-content', '1fr', 'max-content']">
          <Label>1枚:</Label>
          <TextInput v-model.number="model.chipRate" type="tel" align="right" @blur="onBlurChipRate" />
          <Label>点相当</Label>
        </FormField>
      </FormGroup>
      <Grid>
        <FormGroup v-for="(player, i) in players" :key="i" :title="player">
          <FormField>
            <TextInput v-model.number="model.chips[i]" align="right" @blur="onBlur(i)" />
            <Label>枚</Label>
            <Button v-if="model.chips[i] === 0 && diff" small @click="onAutoComplete(i)">
              自動入力
            </Button>
          </FormField>
        </FormGroup>
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
import FormField from '@/components/atoms/FormField.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'
import FormGroup from '@/components/molecules/FormGroup.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'EditChipModal',
  components: {
    Actions,
    Button,
    FormField,
    TextInput,
    Grid,
    Label,
    FormGroup,
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
