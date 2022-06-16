<template>
  <ModalBase class="edit-score-modal" :title="`スコア編集 - ${scoreIndex + 1}回戦`" @close="onClose">
    <Grid gap="24px">
      <Actions>
        <Button @click="onClear">クリア</Button>
        <Error v-if="diff" :message="`${diff}ポイント差分があります`" />
      </Actions>
      <Grid>
        <Item v-for="(player, i) in players" :key="i">
          <SectionTitle>{{ player }}</SectionTitle>
          <FormField>
            <TextInput v-model.number.lazy="model.score[i]" align="right" @blur="onBlur(i)" />
            <Button v-if="model.score[i] === 0 && diff" small @click="onAutoComplete(i)">
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
  name: 'EditScoreModal',
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
    score: {
      type: Array,
      required: true,
    },
    scoreIndex: {
      type: Number,
      required: true,
    },
  },
  setup(props, { emit }) {
    const model = reactive({ score: [...props.score] })
    const diffRef = computed(() => sum(model.score))

    return {
      model,
      diff: diffRef,
      onBlur: i => !Number.isInteger(model.score[i]) && (model.score[i] = 0),
      onAutoComplete: i => model.score[i] -= diffRef.value,
      onClear: () => model.score = fill(props.players.length),
      onSave: () => emit('save', { score: [...model.score] }),
      onClose: () => emit('close'),
    }
  },
}
</script>
