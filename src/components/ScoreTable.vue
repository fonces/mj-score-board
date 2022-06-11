<template>
  <table>
    <thead>
      <tr class="player" @click="modal.player = true">
        <th />
        <th v-for="(u, i) in model.players" :key="i">
          <span class="clamp1">{{ u }}</span>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(score, i) in model.scores"
        :key="i"
        class="score"
        :class="{ diff: isDifference(score) }"
        @click="(modal.score = true) && (modal.scoreIndex = i)"
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
    </tbody>
    <tfoot>
      <tr class="summary" :class="{ diff: isDifference(summaries) }" @click="modal.result = true">
        <th>合計</th>
        <td v-for="(summary, i) in summaries" :key="i">
          {{ toPosiNega(summary) }}
        </td>
      </tr>
    </tfoot>
  </table>
  <teleport to="#modal">
    <EditPlayerModal
      v-if="!isReadOnly && modal.player"
      :players="model.players"
      @save="onSaveEditPlayer"
      @close="modal.player = false"
    />
    <EditScoreModal
      v-if="!isReadOnly && modal.score"
      :players="model.players"
      :score="model.scores[modal.scoreIndex]"
      :score-index="modal.scoreIndex"
      @save="onSaveEditScore"
      @close="modal.score = false"
    />
    <EditChipModal
      v-if="!isReadOnly && modal.chip"
      :players="model.players"
      :chips="model.chips"
      :chip-rate="model.chipRate"
      @save="onSaveEditChip"
      @close="modal.chip = false"
    />
    <ResultModal
      v-if="!isReadOnly && modal.result"
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
import { reactive, computed, ref, watch, onBeforeMount } from 'vue'
import { fill, split } from '@/utils/array'
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
    const defaults = createDefault()

    const isReadOnlyRef = ref(false)
    const model = reactive({
      players: defaults.players,
      scores: defaults.scores,
      chips: defaults.chips,
      chipRate: defaults.chipRate,
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

    onBeforeMount(() => {
      const setState = item => {
        // numberize
        item.scores = item.scores.map(score => score.map(s => +s))
        item.chips = item.chips.map(chip => +chip)
        ;[
          'players',
          'scores',
          'chips',
        ].map(key => (model[key] = item[key]))
      }

      try {
        const params = (new URL(document.location)).searchParams
        if (params.get('id')) {
          isReadOnlyRef.value = !JSON.parse(params.get('shareble'))
          const item = [...params].reduce((acc, [key, value]) => ({ ...acc, [key]: value }), {})
          const scores = item.scores.split(',')
          const players = item.players.split(',')

          if ((scores.length % players.length)) throw new Error()

          item.players = item.players.split(',')
          item.scores = split(scores, item.players.length)
          item.chips = item.chips.split(',')
          setState(item)
        } else {
          const itemString = localStorage.getItem('model')
          if (itemString) {
            const item = JSON.parse(itemString)
            setState(item)
          }
        }
      } catch(e) {
        alert('データの読み込みに失敗しました')
      }
    })

    watch(
      () => lastScoreRef.value,
      score => {
        if (score.some(s => s !== 0)) 
          model.scores = [...model.scores, fill(model.players.length)]
      }
    )

    watch(
      () => model,
      () => {
        if (isReadOnlyRef.value) return
        localStorage.setItem('model', JSON.stringify({
          ...model,
          scores: [...model.scores],
          chips: [...model.chips],
        }))
      },
      { deep: true },
    )

    return {
      toPosiNega,
      isDifference,
      model,
      modal,
      summaries: summariesRef,
      isReadOnly: isReadOnlyRef,
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
        model.scores[modal.scoreIndex] = score
        modal.scoreIndex = null
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
table {
  border-collapse: separate;
	border-spacing: 0;
  border-bottom: 1px solid #0099FF;
  min-width: 100%;
}

thead,
tbody,
tfoot,
th,
td {
  background: #fefefe;
}

thead,
tfoot {
  position: sticky;
  z-index: 3;
}

thead {
  top: 0;
}
tfoot {
  bottom: 0;
}

thead th,
thead td {
  border-bottom: 1px solid #0099FF;
  box-shadow: -1px 3px 3px rgb(0 0 0 / 15%);
}

tbody th {
  box-shadow: 3px 0 3px rgb(0 0 0 / 15%);
}

tfoot th,
tfoot td {
  bottom: 0;
  box-shadow: 0 -3px 3px rgb(0 0 0 / 15%);
}

th, td {
  border-top: 1px solid #0099FF;
  border-right: 1px solid #0099FF;
  cursor: pointer;
  min-width: 124px;
  text-align: center;
  vertical-align: middle;
}

tr {
  height: 48px;
}

th {
  font-weight: bold;
}

th:first-child {
  position: sticky;
  z-index: 2;
  left: 0;
  min-width: 88px;
  width: 88px;
}

tr.diff {
  background: #ffcccc;
}

tbody tr:first-child th,
tbody tr:first-child td {
  border-top: none;
}

.summary td,
.summary th {
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