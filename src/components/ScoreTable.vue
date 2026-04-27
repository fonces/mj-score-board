<template>
  <table>
    <thead>
      <tr class="head" @click="openModal('player')">
        <th />
        <th v-for="(player, i) in players" :key="i">
          <Clamp>{{ player }}</Clamp>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(score, i) in scores"
        :key="i"
        class="body"
        :class="{ diff: sum(score) }"
        @click="openScoreModal(i)"
      >
        <th>{{ i + 1 }}回戦</th>
        <td v-for="(point, j) in score" :key="j">
          {{ toFormat(point) }}
        </td>
      </tr>
      <tr class="body" :class="{ diff: sum(chips) }" @click="openModal('chip')">
        <th>チップ</th>
        <td v-for="(chip, i) in chips" :key="i">
          {{ toSymbol(chip) }}枚
        </td>
      </tr>
    </tbody>
    <tfoot>
      <tr class="foot summary" :class="{ diff: sum(summaries) }" @click="openModal('result')">
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
        <EditPlayerModal v-if="modal.player" @close="modal.player = false" />
      </Animate>
      <Animate :name="ANIMATION.SLIDE_LEFT">
        <EditScoreModal v-if="modal.score" @close="modal.score = false" />
      </Animate>
      <Animate :name="ANIMATION.SLIDE_LEFT">
        <EditChipModal v-if="modal.chip" @close="modal.chip = false" />
      </Animate>
      <Animate :name="ANIMATION.SLIDE_UP">
        <ResultModal
          v-if="modal.result"
          @close="modal.result = false"
          @open-history="onOpenHistory"
        />
      </Animate>
      <Animate :name="ANIMATION.SLIDE_LEFT">
        <HistoryModal v-if="modal.history" @close="modal.history = false" />
      </Animate>
    </template>
    <Animate :name="ANIMATION.SLIDE_UP">
      <InstallGuideModal v-if="modal.install" @close="modal.install = false" />
    </Animate>
  </teleport>
</template>

<script setup lang="ts">
import { reactive, computed, onBeforeMount } from 'vue'
import { sum } from '@/utils/array'
import { shouldShowInstallGuide } from '@/utils/pwa'
import { toFormat, toSymbol } from '@/utils/string'
import { asyncRender } from '@/utils/vue'
import { useStore } from '@/store'
import Animate, { ANIMATION } from '@/components/atoms/Animate.vue'
import Clamp from '@/components/atoms/Clamp.vue'
import Dialog from '@/components/molecules/Dialog.vue'
import EditChipModal from '@/components/EditChipModal.vue'
import EditPlayerModal from '@/components/EditPlayerModal.vue'
import EditScoreModal from '@/components/EditScoreModal.vue'
import HistoryModal from '@/components/HistoryModal.vue'
import InstallGuideModal from '@/components/InstallGuideModal.vue'
import ResultModal from '@/components/ResultModal.vue'

type ModalKey = 'player' | 'score' | 'chip' | 'result' | 'history' | 'install'

const store = useStore()

const players = computed(() => store.state.players)
const scores = computed(() => store.state.scores)
const chips = computed(() => store.state.chips)
const isEditable = computed(() => store.state.isEditable)
const summaries = computed<number[]>(() => store.getters.summaries)

const modal = reactive<Record<ModalKey, boolean>>({
  player: false,
  score: false,
  chip: false,
  result: false,
  history: false,
  install: false,
})

const openModal = (key: ModalKey) => (modal[key] = true)
const openScoreModal = (index: number) => {
  store.commit('setEditingScoreIndex', index)
  modal.score = true
}
const onOpenHistory = () => {
  modal.result = false
  modal.history = true
}

onBeforeMount(async () => {
  try {
    await store.dispatch('initialize')
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
  if (shouldShowInstallGuide()) {
    modal.install = true
  }
})
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
