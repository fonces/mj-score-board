<template>
  <ModalBase class="edit-score-modal" :title="`スコア編集 - ${scoreIndex + 1}回戦`" @close="onClose">
    <Grid gap="24px">
      <Flex direction="row-reverse">
        <Button flat @click="onClear">
          <RestoreIcon />
        </Button>
        <Label v-if="diff" bold error>{{ `${diff}ポイント差分があります` }}</Label>
      </Flex>
      <Grid>
        <FormGroup v-for="(player, i) in players" :key="i" :title="player">
          <FormField>
            <TextInput v-model.number.lazy="model.score[i]" align="right" @blur="onBlur(i)" />
            <Button v-if="model.score[i] === 0 && diff" small @click="onAutoComplete(i)">
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
import { reactive, computed } from 'vue'
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
import { useStore } from '@/store'

const emit = defineEmits<{ (e: 'close'): void }>()

const store = useStore()

const players = computed(() => store.state.players)
const scoreIndex = computed(() => store.state.editingScoreIndex)

const model = reactive<{ score: number[] }>({
  score: [...(store.state.scores[scoreIndex.value] ?? fill<number>(store.state.players.length))],
})
const diff = computed(() => sum(model.score))

const onBlur = (i: number) => !Number.isInteger(model.score[i]) && (model.score[i] = 0)
const onAutoComplete = (i: number) => model.score[i] -= diff.value
const onClear = () => model.score = fill<number>(players.value.length)
const onSave = () => {
  store.commit('saveEditScore', { index: scoreIndex.value, score: [...model.score] })
  emit('close')
}
const onClose = () => emit('close')
</script>
