<template>
  <ModalBase class="result-modal" title="結果" @close="onClose">
    <Grid gap="24px">
      <Grid gap="24px">
        <FormGroup title="レート">
          <FormField :columns="['max-content', '1fr', 'max-content']">
            <Label>1000点</Label>
            <TextInput v-model.number.lazy="model.rate" type="tel" align="right" @blur="onBlur" />
            <Label>円</Label>
          </FormField>
        </FormGroup>
        <FormGroup title="チップ">
          <FormField :columns="['max-content', '1fr', 'max-content']">
            <Label>1枚</Label>
            <TextInput v-model.number.lazy="model.chipRate" align="right" @blur="onBlurChipRate" />
            <Label>点相当</Label>
          </FormField>
        </FormGroup>
        <FormGroup title="結果">
          <table>
            <tr v-for="({ player, price }, i) in results" :key="i" class="bold">
              <th>{{ player }}</th>
              <td :class="{ minus: price < 0 }">{{ price.toLocaleString() }}円</td>
            </tr>
          </table>
        </FormGroup>
        <FormGroup title="シェア">
          <FormField>
            <Switch v-model="editable" name="editable">編集を許可する</Switch>
            <Button small @click="onShare">
              <ShareIcon />
            </Button>
          </FormField>
        </FormGroup>
        <FormGroup title="画像で出力">
          <FormField>
            <TextInput v-model="model.fileName" placeholder="Please file name..." />
            <Button small @click="onDownload">
              <DownloadIcon />
            </Button>
          </FormField>
        </FormGroup>
      </Grid>
    </Grid>
    <template #footer>
      <Button @click="onClose">キャンセル</Button>
      <Button primary @click="onReset">戦績クリア</Button>
    </template>
  </ModalBase>
</template>

<script>
import { reactive, computed, ref } from 'vue'
import { event } from 'vue-gtag'
import { v4 as uuid } from 'uuid'
import html2canvas from 'html2canvas'
import DownloadIcon from 'vue-material-design-icons/Download.vue'
import ShareIcon from 'vue-material-design-icons/Share.vue'
import Button from '@/components/atoms/Button.vue'
import FormField from '@/components/atoms/FormField.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'
import Switch from '@/components/atoms/Switch.vue'
import TextInput from '@/components/atoms/TextInput.vue'
import FormGroup from '@/components/molecules/FormGroup.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'

export default {
  name: 'ResultModal',
  components: {
    DownloadIcon,
    ShareIcon,
    Button,
    FormField,
    Grid,
    Label,
    Switch,
    TextInput,
    FormGroup,
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

    return {
      model,
      editable: editableRef,
      results: computed(() => props.players.map((player, i) => ({
        player,
        price: props.scores.reduce((acc, score) => (
          acc + score[i]
        ), props.chips[i] * (model.chipRate / 1000)) * model.rate,
      }))),
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
            alert('コピーしました。')
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
        event('share', { event_label: editableRef.value ? 'editable' : 'readonly' })
      },
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
          event('export-image')
        }
      },
      onReset: () => emit('reset'),
      onClose: () => emit('close'),
    }
  },
}
</script>

<style scoped>
table {
  user-select: none;
}

tr {
  border: 1px solid var(--primary);
}

tr:nth-child(even) {
  background: var(--secondary);
}

th,
td {
  padding: 16px 12px;
}

th {
  text-align: left;
}

td {
  text-align: right;
}

td.minus {
  color: var(--error);
}
</style>