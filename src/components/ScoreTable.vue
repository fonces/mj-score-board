<template>
  <table>
    <tr class="player" @click="modal.player = true">
      <th />
      <th v-for="(u, i) in model.players" :key="i">
        <span class="clamp1">{{ u }}</span>
      </th>
    </tr>
    <tr
      v-for="(score, i) in model.scores"
      :key="i"
      class="score"
      :class="{ diff: isDifference(score) }"
      @click="(modal.score = true) && (model.scoreIndex = i)"
    >
      <th>{{ i + 1 }}回戦</th>
      <td v-for="(value, j) in score" :key="j">
        {{ toPosiNega(value) }}
      </td>
    </tr>
    <tr class="chip" :class="{ diff: isDifference(model.chips) }" @click="modal.chip = true">
      <th>チップ</th>
      <td v-for="(chip, i) in model.chips" :key="i">
        {{ 0 <= chip ? '+' : '-' }}{{ Math.abs(chip) }}枚
      </td>
    </tr>
    <tr class="summary" :class="{ diff: isDifference(summaries) }" @click="modal.result = true">
      <th>合計</th>
      <td v-for="(summary, i) in summaries" :key="i">
        {{ toPosiNega(summary) }}
      </td>
    </tr>
  </table>
  <teleport to="body">
    <EditPlayerModal
      v-if="modal.player"
      :players="model.players"
      @save="onSaveEditPlayer"
      @close="modal.player = false"
    />
    <EditScoreModal
      v-if="modal.score"
      :players="model.players"
      :score="model.scores[model.scoreIndex]"
      @save="onSaveEditScore"
      @close="modal.score = false"
    />
    <EditChipModal
      v-if="modal.chip"
      :players="model.players"
      :chips="model.chips"
      :chip-rate="model.chipRate"
      @save="onSaveEditChip"
      @close="modal.chip = false"
    />
    <ResultModal
      v-if="modal.result"
      :players="model.players"
      :scores="model.scores"
      :chips="model.chips"
      :chip-rate="model.chipRate"
      @reset="onReset"
      @close="modal.result = false"
    />
  </teleport>
</template>

<script>
import { reactive, computed, watch } from 'vue'
import { fill } from '@/utils/array'
import { toPosiNega } from '@/utils/string'
import { isDifference } from '@/utils/validator'
import EditPlayerModal from '@/components/EditPlayerModal.vue'
import EditScoreModal from '@/components/EditScoreModal.vue'
import EditChipModal from '@/components/EditChipModal.vue'
import ResultModal from '@/components/ResultModal.vue'

const createDefault = () => ({
  players: fill(4).map((_, i) => `プレイヤー${i + 1}`),
  scores: [fill(4)],
  chips: fill(4),
  chipRate: 5000,
})

export default {
  name: 'ScoreTable',
  components: {
    EditPlayerModal,
    EditScoreModal,
    EditChipModal,
    ResultModal,
  },
  setup() {
    const model = reactive({
      players: ['チン', 'チン', 'チンパン', 'ウェ～イ'],
      scores: [
        [52, 2, -16, -38],
        [-14, 6, -43, 50],
        [-14, 6, -43, 51],
        [0, 0, 0, 0],
      ],
      chips: [5, 3, -5, -3],
      chipRate: 5000,
    })
    const modal = reactive({
      player: false,
      score: false,
      chip: false,
      result: false,
      scoreIndex: null,
    })
    const summariesRef = computed(() => (
      model.scores.reduce(
        (acc, score) => score.map((s, j) => acc[j] += (s + (model.chips[j] * (model.chipRate / 1000)))),
        fill(model.players.length),
      )
    ))
    const lastScoreRef = computed(() => model.scores[model.scores.length - 1])

    watch(
      () => lastScoreRef.value,
      score => {
        if (score.some(s => s !== 0)) 
          model.scores = [...model.scores, fill(model.players.length)]
      }
    )

    return {
      toPosiNega,
      isDifference,
      model,
      modal,
      summaries: summariesRef,
      onSaveEditPlayer: ({ players, deleted }) => {
        model.players = players.filter((_, i) => !deleted.includes(i))
        model.scores = model.scores.map(score => score.filter((_, j) => !deleted.includes(j)))
        model.chips = model.chips.filter((_, j) => !deleted.includes(j))

        const diff = model.players.length - model.scores[0].length
        if (0 < diff) {
          model.scores = model.scores.map(score => [...score, ...fill(diff)])
          model.chips = [...model.chips, ...fill(diff)]
        }

        modal.player = false
      },
      onSaveEditScore: (({ score }) => {
        model.scores[model.scoreIndex] = score
        model.scoreIndex = null
        modal.score = false
      }),
      onSaveEditChip: (({ chips, chipRate }) => {
        model.chips = chips
        model.chipRate = chipRate
        modal.chip = false
      }),
      onReset: () => {
        const { players, scores, chips, chipRate } = createDefault()
        model.players = players
        model.scores = scores
        model.chips = chips
        model.chipRate = chipRate
        modal.result = false
      },
    }
  }
}
</script>

<style scoped>
table, th, td {
  border: 1px solid #0099FF;
}

th, td {
  cursor: pointer;
  min-width: 124px;
  text-align: center;
  width: 124px;
  vertical-align: middle;
}

table {
  border-width: 2px;
}

tr {
  height: 48px;
}

th {
  font-weight: bold;
}

th:first-child {
  border-right-width: 2px;
  min-width: 88px;
  width: 88px;
}

tr.diff {
  background: #ffcccc;
}

.player th {
  border-bottom-width: 2px;
}

.summary td,
.summary th {
  border-top-width: 2px;
  cursor: default;
  font-size: 20px;
  font-weight: bold;
}

.clamp1 {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  overflow: hidden;
}
</style>