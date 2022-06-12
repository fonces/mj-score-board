<template>
  <ModalBase class="edit-score-modal" :title="`スコア編集 - ${scoreIndex + 1}回戦`" @close="onClose">
    <List gap="24px">
      <Actions>
        <Button @click="onClear">クリア</Button>
        <Error v-if="isDifference(model.score)" :message="`${diff}ポイント差分があります`" />
      </Actions>
      <List>
        <Item v-for="(player, i) in players" :key="i">
          <SectionTitle>{{ player }}</SectionTitle>
          <div class="form-field">
            <TextInput v-model.number="model.score[i]" align="right" @blur="onBlur(i)" />
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
import Actions from '@/components/atoms/Actions.vue'
import Button from '@/components/atoms/Button.vue'
import Error from '@/components/atoms/Error.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import SectionTitle from '@/components/atoms/SectionTitle.vue'
import List from '@/components/atoms/List.vue'
import Item from '@/components/atoms/Item.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'EditScoreModal',
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
.form-field {
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  grid-template-columns: 1fr max-content;
}
</style>