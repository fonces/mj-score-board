<template>
  <table>
    <thead>
      <tr class="head" @click="modal.player = true">
        <th />
        <th v-for="(player, i) in model.players" :key="i">
          <Clamp>{{ player }}</Clamp>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(score, i) in model.scores"
        :key="i"
        class="body"
        :class="{ diff: sum(score) }"
        @click="(modal.score = true) && (modal.scoreIndex = i)"
      >
        <th>{{ i + 1 }}回戦</th>
        <td v-for="(point, j) in score" :key="j">
          {{ toFormat(point) }}
        </td>
      </tr>
      <tr class="body" :class="{ diff: sum(model.chips) }" @click="modal.chip = true">
        <th>チップ</th>
        <td v-for="(chip, i) in model.chips" :key="i">
          {{ toSymbol(chip) }}枚
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="foot summary" :class="{ diff: sum(summaries) }" @click="modal.result = true">
        <th>合計</th>
        <td v-for="(summary, i) in summaries" class="bold" :key="i">
          {{ toFormat(summary) }}
        </td>
      </tr>
    </tfoot>
  </table>
  <teleport to="#modal">
    <template v-if="isEditable">
      <Animate :name="ANIMATION.SLIDE_DOWN">
        <EditPlayerModal
          v-if="modal.player"
          :players="model.players"
          @save="onSaveEditPlayer"
          @close="modal.player = false"
        />
      </Animate>
      <Animate :name="ANIMATION.SLIDE_LEFT">
        <EditScoreModal
          v-if="modal.score"
          :players="model.players"
          :score="model.scores[modal.scoreIndex]"
          :score-index="modal.scoreIndex"
          @save="onSaveEditScore"
          @close="modal.score = false"
        />
      </Animate>
      <Animate :name="ANIMATION.SLIDE_LEFT">
        <EditChipModal
          v-if="modal.chip"
          :players="model.players"
          :chips="model.chips"
          :chip-rate="model.chipRate"
          @save="onSaveEditChip"
          @close="modal.chip = false"
        />
      </Animate>
      <Animate :name="ANIMATION.SLIDE_UP">
        <ResultModal
          v-if="modal.result"
          :players="model.players"
          :scores="model.scores"
          :chips="model.chips"
          v-model:chip-rate="model.chipRate"
          @reset="onReset"
          @close="modal.result = false"
        />
      </Animate>
    </template>
  </teleport>
</template>

<script setup lang="ts">
import { reactive, computed, ref, watch, onBeforeMount } from 'vue'
import { fill, split, sum } from '@/utils/array'
import { toFormat, toSymbol } from '@/utils/string'
import { asyncRender } from '@/utils/vue'
import Animate, { ANIMATION } from '@/components/atoms/Animate.vue'
import Clamp from '@/components/atoms/Clamp.vue'
import Dialog from '@/components/molecules/Dialog.vue'
import EditChipModal from '@/components/EditChipModal.vue'
import EditPlayerModal from '@/components/EditPlayerModal.vue'
import EditScoreModal from '@/components/EditScoreModal.vue'
import ResultModal from '@/components/ResultModal.vue'

type Model = {
  players: string[]
  scores: number[][]
  chips: number[]
  chipRate: number
}

type ModalState = {
  player: boolean
  score: boolean
  chip: boolean
  result: boolean
  scoreIndex: number
}

const createDefault = (): Model => ({
  players: fill<number>(4).map((_, i) => `プレイヤー${i + 1}`),
  scores: [fill<number>(4)],
  chips: fill<number>(4),
  chipRate: 5000,
})

const defaults = createDefault()

const model = reactive<Model>({
  players: defaults.players,
  scores: defaults.scores,
  chips: defaults.chips,
  chipRate: defaults.chipRate,
})
const modal = reactive<ModalState>({
  player: false,
  score: false,
  chip: false,
  result: false,
  scoreIndex: 0,
})
const isEditable = ref(true)

onBeforeMount(() => {
  const setState = (item: Model) => {
    // numberize
    item.scores = item.scores.map(score => score.map(s => +s))
    item.chips = item.chips.map(chip => +chip)
    ;(['players', 'scores', 'chips'] as const).forEach(key => {
      (model as Model)[key] = item[key] as never
    })
  }

  try {
    const params = (new URL(document.location.href)).searchParams
    if (params.get('id')) {
      isEditable.value = !!JSON.parse(params.get('editable') || 'false')
      const item = [...params].reduce<Record<string, string>>((acc, [key, value]) => ({ ...acc, [key]: value }), {})
      const scores = item.scores.split(',')
      const players = item.players.split(',')

      if ((scores.length !== players.length)) throw new Error()

      const parsed: Model = {
        players,
        scores: split(scores.map(s => +s), players.length),
        chips: item.chips.split(',').map(c => +c),
        chipRate: model.chipRate,
      }
      setState(parsed)
    } else {
      const itemString = localStorage.getItem('model')
      if (itemString) {
        const item = JSON.parse(itemString) as Model
        setState(item)
      }
    }
  } catch (e) {
    asyncRender(Dialog, {
      props: {
        type: 'error',
        message: 'データの読み込みに失敗しました。',
      },
      target: '#dialog',
    })
  } finally {
    history.replaceState(null, '', process.env.NODE_ENV === 'production' ? '/mj-score-board/' : '/')
  }
})

watch(
  () => model,
  () => {
    if (!isEditable.value) return
    localStorage.setItem('model', JSON.stringify({
      ...model,
      scores: [...model.scores],
      chips: [...model.chips],
    }))
  },
  { deep: true },
)

watch(
  () => model.scores[model.scores.length - 1],
  score => {
    if (score.some(s => s !== 0))
      model.scores = [...model.scores, fill<number>(model.players.length)]
  }
)

const summaries = computed(() => (
  model.scores.reduce(
    (acc, score) => score.map((s, j) => acc[j] += s),
    fill<number>(model.players.length),
  ).map((s, i) => s + (model.chips[i] * (model.chipRate / 1000)))
))

const onSaveEditPlayer = ({ players, deleted }: { players: string[]; deleted: number[] }) => {
  model.players = players.filter((_, i) => !deleted.includes(i))
  model.scores = model.scores.map(score => score.filter((_, j) => !deleted.includes(j)))
  model.chips = model.chips.filter((_, j) => !deleted.includes(j))

  const diff = model.players.length - model.scores[0].length
  if (0 < diff) {
    model.scores = model.scores.map(score => [...score, ...fill<number>(diff)])
    model.chips = [...model.chips, ...fill<number>(diff)]
  }

  modal.player = false
}

const onSaveEditScore = ({ score }: { score: number[] }) => {
  model.scores[modal.scoreIndex] = score
  modal.score = false
}

const onSaveEditChip = ({ chips, chipRate }: { chips: number[]; chipRate: number }) => {
  model.chips = chips
  model.chipRate = chipRate
  modal.chip = false
}

const onReset = async () => {
  if (await asyncRender<boolean>(Dialog, {
    props: {
      type: 'warning',
      message: '戦績をクリアします。\nよろしいですか？',
      cancellable: true,
    },
    target: '#dialog',
  })) {
    const { players, scores, chips, chipRate } = createDefault()
    model.players = players
    model.scores = scores
    model.chips = chips
    model.chipRate = chipRate
    modal.result = false
  }
}
</script>

<style scoped>
table {
  border-collapse: separate;
  border-spacing: 0;
  border-left: 1px solid var(--primary);
  border-bottom: 1px solid var(--primary);
  font-size: 16px;
  min-width: 100%;
  user-select: none;
}

.head,
.body,
.foot,
th,
td {
  background: var(--base-bg);
}

.head,
.head th:first-child,
.foot {
  position: sticky;
  z-index: 3;
}

.head th,
.head td {
  border-bottom: 1px solid var(--primary);
  box-shadow: -1px 3px 3px var(--shadow);
  position: sticky;
  top: 0;
}

.body th {
  box-shadow: 3px 0 3px var(--shadow);
}

.foot th,
.foot td {
  bottom: 0;
  box-shadow: 0 -3px 3px var(--shadow);
  position: sticky;
}

th, td {
  border-top: 1px solid var(--primary);
  border-right: 1px solid var(--primary);
  cursor: pointer;
  min-width: 124px;
  text-align: center;
  vertical-align: middle;
}

tr {
  height: 48px;
}

tr.body:nth-child(odd) th,
tr.body:nth-child(odd) td {
  background: var(--secondary);
}

th {
  font-weight: bold;
  padding: 0 12px;
}

th:first-child {
  position: sticky;
  z-index: 2;
  left: 0;
  min-width: 88px;
  width: 88px;
}

tr.diff th,
tr.diff td {
  background: var(--alert) !important;
}

.body tr:first-child th,
.body tr:first-child td {
  border-top: none;
}

.summary {
  font-size: 20px;
}
</style>
