<template>
  <ModalBase class="edit-chips-modal" title="チップ編集" @close="onClose">
    <Grid gap="24px">
      <Flex direction="row-reverse">
        <Button flat @click="onClear">
          <RestoreIcon />
        </Button>
        <Label v-if="diff" bold error>{{ `${diff}枚差分があります` }}</Label>
      </Flex>
      <FormGroup title="チップ">
        <FormField :columns="['max-content', '1fr', 'max-content']">
          <Label>1枚</Label>
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
      <Button primary :disabled="!!diff" @click="onSave">保存</Button>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import { reactive, computed, PropType } from 'vue'
import RestoreIcon from 'vue-material-design-icons/Restore.vue'
import Button from '@/components/atoms/Button.vue'
import FormField from '@/components/atoms/FormField.vue'
import Flex from '@/components/atoms/Flex.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import FormGroup from '@/components/molecules/FormGroup.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'
import { fill, sum } from '@/utils/array'

const props = defineProps({
  players: {
    type: Array as PropType<string[]>,
    required: true,
  },
  chips: {
    type: Array as PropType<number[]>,
    required: true,
  },
  chipRate: {
    type: Number,
    required: true,
  },
})

const emit = defineEmits<{
  (e: 'save', payload: { chips: number[]; chipRate: number }): void
  (e: 'close'): void
}>()

const model = reactive<{ chips: number[]; chipRate: number }>({
  chips: [...props.chips],
  chipRate: props.chipRate,
})
const diff = computed(() => sum(model.chips))

const onBlur = (i: number) => !Number.isInteger(model.chips[i]) && (model.chips[i] = 0)
const onBlurChipRate = () =>
  (!Number.isInteger(model.chipRate) || model.chipRate % 1000 !== 0) && (model.chipRate = props.chipRate)
const onAutoComplete = (i: number) => model.chips[i] -= diff.value
const onClear = () => {
  model.chips = fill<number>(props.players.length)
  model.chipRate = 5000
}
const onSave = () => emit('save', { ...model, chips: [...model.chips] })
const onClose = () => emit('close')
</script>
