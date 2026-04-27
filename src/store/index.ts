import { InjectionKey } from 'vue'
import { createStore, Store, useStore as baseUseStore, MutationPayload } from 'vuex'
import { fill, split } from '@/utils/array'

export type HistoryEntry = {
  id: string
  savedAt: number
  players: string[]
  scores: number[][]
  chips: number[]
  chipRate: number
}

export type State = {
  players: string[]
  scores: number[][]
  chips: number[]
  chipRate: number
  isEditable: boolean
  editingScoreIndex: number
  history: HistoryEntry[]
}

export const key: InjectionKey<Store<State>> = Symbol('store')

const STORAGE_KEY = 'model'
const HISTORY_STORAGE_KEY = 'history'

const HISTORY_MUTATIONS = ['setHistory', 'addHistory', 'removeHistory', 'clearHistory'] as const
const NON_PERSISTENT_MUTATIONS = ['setIsEditable', 'setEditingScoreIndex'] as const

const createDefaultModel = () => ({
  players: fill<number>(4).map((_, i) => `プレイヤー${i + 1}`),
  scores: [fill<number>(4)],
  chips: fill<number>(4),
  chipRate: 5000,
})

const ensureLastScoreEmpty = (state: State) => {
  const last = state.scores[state.scores.length - 1]
  if (last && last.some(s => s !== 0)) {
    state.scores = [...state.scores, fill<number>(state.players.length)]
  }
}

/**
 * 戦績データが入力済みか（1つでも非0スコアまたは非0チップがあれば true）
 */
const hasGameData = (state: State) => (
  state.scores.some(row => row.some(s => s !== 0))
  || state.chips.some(c => c !== 0)
)

/**
 * 履歴は常に永続化、モデルは isEditable が true のときだけ永続化する
 */
const persistencePlugin = (store: Store<State>) => {
  store.subscribe((mutation: MutationPayload, state: State) => {
    if ((HISTORY_MUTATIONS as readonly string[]).includes(mutation.type)) {
      localStorage.setItem(HISTORY_STORAGE_KEY, JSON.stringify(state.history))
      return
    }
    if ((NON_PERSISTENT_MUTATIONS as readonly string[]).includes(mutation.type)) return
    if (!state.isEditable) return
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      players: state.players,
      scores: [...state.scores],
      chips: [...state.chips],
      chipRate: state.chipRate,
    }))
  })
}

export const store = createStore<State>({
  state: () => ({
    ...createDefaultModel(),
    isEditable: true,
    editingScoreIndex: 0,
    history: [],
  }),
  getters: {
    summaries: state => (
      state.scores.reduce(
        (acc, score) => score.map((s, j) => acc[j] += s),
        fill<number>(state.players.length),
      ).map((s, i) => s + (state.chips[i] * (state.chipRate / 1000)))
    ),
  },
  mutations: {
    setModel(state, payload: { players: string[]; scores: number[][]; chips: number[]; chipRate: number }) {
      state.players = payload.players
      state.scores = payload.scores
      state.chips = payload.chips
      state.chipRate = payload.chipRate
      ensureLastScoreEmpty(state)
    },
    setIsEditable(state, value: boolean) {
      state.isEditable = value
    },
    setEditingScoreIndex(state, index: number) {
      state.editingScoreIndex = index
    },
    saveEditPlayer(state, payload: { players: string[]; deleted: number[] }) {
      const filteredPlayers = payload.players.filter((_, i) => !payload.deleted.includes(i))
      const filteredScores = state.scores.map(score => score.filter((_, j) => !payload.deleted.includes(j)))
      const filteredChips = state.chips.filter((_, j) => !payload.deleted.includes(j))

      const diff = filteredPlayers.length - filteredScores[0].length
      state.players = filteredPlayers
      if (0 < diff) {
        state.scores = filteredScores.map(score => [...score, ...fill<number>(diff)])
        state.chips = [...filteredChips, ...fill<number>(diff)]
      } else {
        state.scores = filteredScores
        state.chips = filteredChips
      }
      ensureLastScoreEmpty(state)
    },
    saveEditScore(state, payload: { index: number; score: number[] }) {
      state.scores = state.scores.map((row, i) => (i === payload.index ? payload.score : row))
      ensureLastScoreEmpty(state)
    },
    saveEditChip(state, payload: { chips: number[]; chipRate: number }) {
      state.chips = payload.chips
      state.chipRate = payload.chipRate
    },
    setChipRate(state, value: number) {
      state.chipRate = value
    },
    reset(state) {
      const defaults = createDefaultModel()
      state.players = defaults.players
      state.scores = defaults.scores
      state.chips = defaults.chips
      state.chipRate = defaults.chipRate
    },
    setHistory(state, history: HistoryEntry[]) {
      state.history = history
    },
    addHistory(state, entry: HistoryEntry) {
      state.history = [...state.history, entry]
    },
    removeHistory(state, id: string) {
      state.history = state.history.filter(entry => entry.id !== id)
    },
    clearHistory(state) {
      state.history = []
    },
  },
  actions: {
    /**
     * URL クエリ → localStorage の順で復元する。読み込みに失敗した場合は throw する
     */
    initialize({ commit }) {
      const historyRaw = localStorage.getItem(HISTORY_STORAGE_KEY)
      if (historyRaw) {
        try {
          const parsed = JSON.parse(historyRaw) as HistoryEntry[]
          if (Array.isArray(parsed)) commit('setHistory', parsed)
        } catch {
          // 破損していた場合は無視（次回保存時に上書きされる）
        }
      }

      const params = (new URL(document.location.href)).searchParams
      if (params.get('id')) {
        commit('setIsEditable', !!JSON.parse(params.get('editable') || 'false'))
        const item = [...params].reduce<Record<string, string>>((acc, [key, value]) => ({ ...acc, [key]: value }), {})
        const scores = item.scores.split(',').map(s => +s)
        const players = item.players.split(',')
        const chips = item.chips.split(',').map(c => +c)
        if (
          players.length === 0
          || scores.length === 0
          || scores.length % players.length !== 0
          || chips.length !== players.length
        ) throw new Error('共有 URL のフォーマットが不正です')
        commit('setModel', {
          players,
          scores: split(scores, players.length),
          chips,
          chipRate: store.state.chipRate,
        })
        return
      }

      const stored = localStorage.getItem(STORAGE_KEY)
      if (!stored) return
      const item = JSON.parse(stored) as { players: string[]; scores: number[][]; chips: number[]; chipRate: number }
      commit('setModel', {
        players: item.players,
        scores: item.scores.map(score => score.map(s => +s)),
        chips: item.chips.map(c => +c),
        chipRate: item.chipRate,
      })
    },
    /**
     * 戦績データがあれば履歴に保存し、現在の戦績をリセットする
     */
    startNewGame({ commit, state }) {
      if (hasGameData(state)) {
        commit('addHistory', {
          id: crypto.randomUUID(),
          savedAt: Date.now(),
          players: [...state.players],
          scores: state.scores
            .filter(row => row.some(s => s !== 0))
            .map(row => [...row]),
          chips: [...state.chips],
          chipRate: state.chipRate,
        })
      }
      commit('reset')
    },
  },
  plugins: [persistencePlugin],
})

export const useStore = () => baseUseStore(key)
