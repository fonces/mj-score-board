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
      @click="(modal.score = true) && (model.scoreIndex = i)"
    >
      <th>{{ i + 1 }}回戦</th>
      <td v-for="(value, j) in score" :key="j">
        {{ toPosiNega(value) }}
      </td>
    </tr>
    <tr class="summary" @click="modal.result = true">
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
    <ResultModal
      v-if="modal.result"
      :players="model.players"
      :scores="model.scores"
      @reset="onReset"
      @close="modal.result = false"
    />
  </teleport>
</template>

<script>
import { reactive, computed, watch } from 'vue'
import { fill } from '@/utils/array'
import { toPosiNega } from '@/utils/string'
import EditPlayerModal from '@/components/EditPlayerModal.vue'
import EditScoreModal from '@/components/EditScoreModal.vue'
import ResultModal from '@/components/ResultModal.vue'

const createDefault = () => ({
  players: fill(4).map((_, i) => `プレイヤー${i + 1}`),
  scores: [fill(4)],
})

export default {
  name: 'ScoreTable',
  components: {
    EditPlayerModal,
    EditScoreModal,
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
    })
    const modal = reactive({
      player: false,
      score: false,
      result: false,
      scoreIndex: null,
    })
    const summariesRef = computed(() => (
      model.scores.reduce(
        (acc, score) => score.map((s, j) => acc[j] += s),
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
      model,
      modal,
      summaries: summariesRef,
      onReset: () => {
        const { players, scores } = createDefault()
        model.players = players
        model.scores = scores
        modal.result = false
      },
      onSaveEditPlayer: ({ players, deleted }) => {
        model.scores = model.scores.map(score => score.filter((_, j) => !deleted.includes(j)))
        model.players = players.filter((_, i) => !deleted.includes(i))

        const diff = model.players.length - model.scores[0].length
        if (0 < diff)
          model.scores = model.scores.map(score => [...score, ...fill(diff)])

        modal.player = false
      },
      onSaveEditScore: (({ score }) => {
        model.scores[model.scoreIndex] = score
        model.scoreIndex = null
        modal.score = false
      }),
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