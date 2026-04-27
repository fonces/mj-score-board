<template>
  <ModalBase class="history-modal" title="履歴" @close="onClose">
    <Grid v-if="entries.length" gap="16px">
      <div v-for="entry in entries" :key="entry.id" class="entry">
        <Flex class="header" justify="space-between">
          <Label bold>{{ formatDate(entry.savedAt) }}</Label>
          <Button flat @click="onDelete(entry)">
            <TrashIcon :size="20" />
          </Button>
        </Flex>
        <table>
          <tr v-for="(player, i) in entry.players" :key="i">
            <th>{{ player }}</th>
            <td :class="{ minus: totalsOf(entry)[i] < 0 }">
              {{ toFormat(totalsOf(entry)[i]) }}
            </td>
          </tr>
        </table>
        <Label class="rounds">{{ entry.scores.length }}回戦</Label>
      </div>
    </Grid>
    <Flex v-else class="empty" justify="center">
      <Label>履歴はまだありません。</Label>
    </Flex>
    <template #footer>
      <Button @click="onClose">閉じる</Button>
      <Button v-if="entries.length" primary @click="onClearAll">全削除</Button>
    </template>
  </ModalBase>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import TrashIcon from 'vue-material-design-icons/TrashCanOutline.vue'
import Button from '@/components/atoms/Button.vue'
import Flex from '@/components/atoms/Flex.vue'
import Grid from '@/components/atoms/Grid.vue'
import Label from '@/components/atoms/Label.vue'
import ModalBase from '@/components/molecules/ModalBase.vue'
import Dialog from '@/components/molecules/Dialog.vue'
import { fill } from '@/utils/array'
import { toFormat } from '@/utils/string'
import { asyncRender } from '@/utils/vue'
import { useStore, HistoryEntry } from '@/store'

const emit = defineEmits<{ (e: 'close'): void }>()

const store = useStore()

const entries = computed(() => (
  [...store.state.history].sort((a, b) => b.savedAt - a.savedAt)
))

const totalsOf = (entry: HistoryEntry) => (
  entry.scores.reduce(
    (acc, score) => score.map((s, j) => acc[j] += s),
    fill<number>(entry.players.length),
  ).map((s, i) => s + (entry.chips[i] * (entry.chipRate / 1000)))
)

const formatDate = (timestamp: number) => {
  const date = new Date(timestamp)
  const yyyy = date.getFullYear()
  const mm = String(date.getMonth() + 1).padStart(2, '0')
  const dd = String(date.getDate()).padStart(2, '0')
  const hh = String(date.getHours()).padStart(2, '0')
  const mi = String(date.getMinutes()).padStart(2, '0')
  return `${yyyy}/${mm}/${dd} ${hh}:${mi}`
}

const onDelete = async (entry: HistoryEntry) => {
  if (await asyncRender<boolean>(Dialog, {
    props: {
      type: 'warning',
      message: `${formatDate(entry.savedAt)} の履歴を削除します。\nよろしいですか？`,
      cancellable: true,
    },
    target: '#dialog',
  })) {
    store.commit('removeHistory', entry.id)
  }
}

const onClearAll = async () => {
  if (await asyncRender<boolean>(Dialog, {
    props: {
      type: 'warning',
      message: 'すべての履歴を削除します。\nよろしいですか？',
      cancellable: true,
    },
    target: '#dialog',
  })) {
    store.commit('clearHistory')
  }
}

const onClose = () => emit('close')
</script>

<style scoped>
.entry {
  border: 1px solid var(--border);
  border-radius: 4px;
  display: grid;
  gap: 8px;
  padding: 12px;
}

.header {
  min-height: 24px;
}

table {
  user-select: none;
  width: 100%;
}

tr {
  border: 1px solid var(--primary);
}

tr:nth-child(even) {
  background: var(--secondary);
}

th,
td {
  padding: 8px 12px;
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

.rounds {
  font-size: 14px;
  text-align: right;
}

.empty {
  padding: 24px 0;
}
</style>
