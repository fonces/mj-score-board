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
          :chip-rate="model.chipRate"
          @reset="onReset"
          @close="modal.result = false"
        />
      </Animate>
    </template>
  </teleport>
</template>

<script>
import { reactive, computed, ref, watch, onBeforeMount } from 'vue'
import { fill, split, sum } from '@/utils/array'
import { toFormat, toSymbol } from '@/utils/string'
import Animate, { ANIMATION } from '@/components/atoms/Animate.vue'
import Clamp from '@/components/atoms/Clamp.vue'
import EditChipModal from '@/components/EditChipModal.vue'
import EditPlayerModal from '@/components/EditPlayerModal.vue'
import EditScoreModal from '@/components/EditScoreModal.vue'
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
    Animate,
    Clamp,
    EditChipModal,
    EditScoreModal,
    EditPlayerModal,
    ResultModal,
  },
  setup() {
    const defaults = createDefault()

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
    const isEditableRef = ref(true)

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
          isEditableRef.value = !!JSON.parse(params.get('editable'))
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
      } finally {
        history.replaceState(null, '', process.env.NODE_ENV === 'production' ? '/mj-score-board/' : '/')
      }
    })

    watch(
      () => model,
      () => {
        if (!isEditableRef.value) return
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
          model.scores = [...model.scores, fill(model.players.length)]
      }
    )

    return {
      ANIMATION,
      sum,
      toFormat,
      toSymbol,
      model,
      modal,
      isEditable: isEditableRef,
      summaries: computed(() => (
        model.scores.reduce(
          (acc, score) => score.map((s, j) => acc[j] += s),
          fill(model.players.length),
        ).map((s, i) => s + (model.chips[i] * (model.chipRate / 1000)))
      )),
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
      onSaveEditScore: ({ score }) => {
        model.scores[modal.scoreIndex] = score
        modal.scoreIndex = null
        modal.score = false
      },
      onSaveEditChip: ({ chips, chipRate }) => {
        model.chips = chips
        model.chipRate = chipRate
        modal.chip = false
      },
      onReset: () => {
        const { players, scores, chips, chipRate } = createDefault()
        model.players = players
        model.scores = scores
        model.chips = chips
        model.chipRate = chipRate
        modal.result = false
      },
    }
  },
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
