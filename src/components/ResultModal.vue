<template>
  <ModalBase class="result-modal" title="結果" @close="onClose">
    <List gap="24px">
      <List gap="24px">
        <Item>
          <SectionTitle>レート</SectionTitle>
          <div class="form-group">
            <label>1000点:</label>
            <TextInput v-model.number="model.rate" type="tel" align="right" @blur="onBlur" />
            <label>円</label>
          </div>
        </Item>
        <Item>
          <SectionTitle>チップ</SectionTitle>
          <div class="form-group">
            <label>1枚:</label>
            <TextInput v-model.number="model.chipRate" align="right" @blur="onBlurChipRate" />
            <label>点相当</label>
          </div>
        </Item>
        <Item>
          <SectionTitle>結果</SectionTitle>
          <List>
            <div v-for="(player, i) in players" :key="i" class="form-group">
              <label>{{ player }}</label>
              <div />
              <label>{{ toPrice(i) }}円</label>
            </div>
          </List>
        </Item>
        <Item>
          <SectionTitle>その他</SectionTitle>
          <div class="share">
            <label>編集を許可する</label>
            <Switch v-model="editable" name="editable" />
            <Button @click="onShare">シェア</Button>
          </div>
          <div class="save-image">
            <TextInput v-model="model.fileName" placeholder="ファイル名" />
            <Button @click="onDownload">画像化</Button>
          </div>
        </Item>
      </List>
    </List>
    <template #footer>
      <Button @click="onClose">キャンセル</Button>
      <Button primary @click="onReset">戦績クリア</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive, ref } from 'vue'
import { v4 as uuid } from 'uuid'
import html2canvas from 'html2canvas'
import Button from '@/components/atoms/Button.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import Switch from '@/components/atoms/Switch.vue'
import SectionTitle from '@/components/atoms/SectionTitle.vue'
import List from '@/components/atoms/List.vue'
import Item from '@/components/atoms/Item.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'ResultModal',
  components: {
    Button,
    TextInput,
    Switch,
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
    scores: {
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
    const model = reactive({ rate: 50, chipRate: props.chipRate, fileName: '' })
    const editableRef = ref(false)

    const toPrice = (i) => {
      const score = props.scores.reduce((acc, score) => (
        acc + score[i]
      ), 0) + (props.chips[i] * (model.chipRate / 1000))
      return Number(score * model.rate).toLocaleString()
    }

    return {
      model,
      editable: editableRef,
      toPrice,
      onBlur: () => !Number.isInteger(model.rate) && (model.rate = 50),
      onBlurChipRate: () => (!Number.isInteger(model.chipRate) || model.chipRate % 1000 !== 0) && (model.chipRate = props.chipRate),
      onShare: () => {
        const url = new URL(location.pathname, location.href)
        url.searchParams.set('id', uuid())
        url.searchParams.set('datetime', new Date().getTime())
        url.searchParams.set('editable', editableRef.value)
        url.searchParams.set('players', props.players)
        url.searchParams.set('scores', props.scores)
        url.searchParams.set('chips', props.chips)

        if (typeof navigator.share === 'undefined') {
          if (navigator.clipboard) {
            navigator.clipboard.writeText(url.toString())
            alert('コピーしました')
          } else {
            alert('お使いのブラウザにはクリップボード機能がありません。')
          }
        } else {
          navigator.share({
            title: '麻雀スコア',
            text: '',
            url: url.toString(),
          })
        }
      },
      onReset: () => emit('reset'),
      onClose: () => emit('close'),
      onDownload: async () => {
        const node = document.querySelector('#app')
        try {
          node.classList.add('printing')
          const canvas = await html2canvas(node)
          const link = document.createElement('a')
          link.download = `${model.fileName || new Date().toLocaleString()}.png`
          link.href = canvas.toDataURL('image/png')
          link.click()
        } catch(e) {
          alert('画像の保存に失敗しました。')
        } finally {
          node.classList.remove('printing')
        }
      },
    }
  }
}
</script>

<style scoped>
.form-group {
  align-items: center;
  display: grid;
  gap: 8px;
  grid-auto-flow: column;
  grid-template-columns: max-content 1fr max-content;
}

.share {
  align-items: center;
  display: grid;
  gap: 16px;
  grid-auto-flow: column;
  grid-template-columns: max-content 1fr max-content;
}

.save-image {
  display: grid;
  gap: 16px;
  grid-template-columns: 1fr max-content;
}
</style>