# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 言語

このリポジトリでのやり取り・ドキュメント・コミットメッセージ・コードコメントは、原則として日本語で書くこと。ユーザーへの応答も日本語で行う。固定の英文テンプレート（本ファイル冒頭の `This file provides guidance...` など）はそのまま残してよい。

## コマンド

- `npm run serve` — Vue CLI の開発サーバー（HMR 付き）
- `npm run build` — 本番ビルド（`dist/` に出力。publicPath は `/mj-score-board/`）
- `npm run lint` — `vue-cli-service lint` による ESLint（自動修正あり）。テストスイートは存在しない。

`VUE_APP_GA_MEASUREMENT_ID`（`.env.example` 参照）はビルド時に `vue-gtag` から読まれる。`main` への push で `.github/workflows/main.yml` が `dist/` を `gh-pages` ブランチへデプロイする。

## アーキテクチャ

Vue 3 製の SPA／PWA（Composition API の `setup()` + TypeScript）で、麻雀のスコアを記録する。ルートは 1 つだけで、`App.vue` が `ScoreTable.vue` をマウントし、ゲーム状態はすべて `ScoreTable.vue` が保持する。

すべてのコンポーネントは `defineComponent({ ... })` で定義する。`tsconfig.json` は `strict: true`（`strictNullChecks` 含む全 strict フラグ有効）で運用し、props は `as PropType<T>` で型を付ける。`.vue` の SFC 用 shim は `src/shims-vue.d.ts`。エントリは `src/main.ts`（`vue.config.js` の `entry` で指定）。

### 状態管理と永続化
`ScoreTable.vue` が単一の状態源（single source of truth）。reactive な `model`（`players`, `scores`, `chips`, `chipRate`）の挙動は以下の通り：
- URL に `?id=...` が付いていれば、クエリパラメータから復元する（共有リンク経由。`editable` クエリで編集ロックを切替）。
- そうでなければ `localStorage['model']` から復元する。
- deep watcher で `localStorage` に自動保存するが、**`isEditable` が true のときだけ書き込む**（共有された閲覧専用ビューが、閲覧者自身の保存データを上書きしてしまうのを防ぐため）。読み込み後は `history.replaceState` で URL からクエリを除去する。
- `model.scores[last]` を監視するもう一つの watcher が、最終行が 0 以外になった瞬間に空の行を追加する。これにより、テーブルの末尾には常に空の対局行が存在する。

### モーダルシステム
`public/index.html` に teleport 用のターゲットが 2 つ定義されている：`#modal`（z=100）と `#dialog`（z=200）。
- **宣言的モーダル**（プレイヤー／スコア／チップ／結果の編集）は `ScoreTable.vue` 内の `<teleport to="#modal">` で、`modal` reactive のフラグで開閉する。`Animate` でスライド表示。
- **命令的ダイアログ**は `src/utils/vue.ts` の `asyncRender<T>(component, { props, target: '#dialog' })` を使う。使い捨ての Vue アプリをマウントし、対象コンポーネントは `resolve` prop（`asyncRenderProps` 参照）を受け取り、`resolve(value)` を呼ぶことで返り値の Promise を解決し自動でアンマウントされる。`Dialog.vue` がこの方式の標準的な確認／エラー表示コンポーネント。

### コンポーネント階層
`src/components/` 配下はゆるめのアトミックデザイン構成：
- `atoms/` — プリミティブ（`Button`, `TextInput`, `Label`, `Switch`, `Flex`, `Grid`, `Clamp`, `FormField`, `Animate`（`ANIMATION` enum も export））。
- `molecules/` — 複合パーツ（モーダルのヘッダー／本体／フッターを提供する `ModalBase`、`FormGroup`、`Dialog`）。
- 直下のコンポーネント（`EditPlayerModal`, `EditScoreModal`, `EditChipModal`, `ResultModal`）はページレベルの機能モーダル＋`ScoreTable`。

新しいモーダルを追加する場合は `ModalBase` をベースにして `#modal` に teleport すること。確認や警告のダイアログは新しいマウントポイントを増やさず、`Dialog` を `asyncRender` で表示すること。

### その他の規約
- `@/` は `src/` のエイリアス（`tsconfig.json` の `paths` と Vue CLI のデフォルト設定）。
- UI 文言は日本語。文言を編集するときは日本語のままにすること。
- 数値整形ヘルパー（`toFormat`, `toSymbol`）と配列ヘルパー（`fill`, `split`, `sum`）は `src/utils/` にまとめてある。
- `useFillViewHeight`（`src/utils/window.ts`）はモバイルの 100vh 問題対策として CSS 変数 `--vh` をセットする。レイアウトはこれに依存している。
- ESLint 設定は `package.json` にインラインで記述（`plugin:vue/vue3-essential` + `eslint:recommended` + `@vue/typescript`）。`vue/no-reserved-component-names` は `Button`/`Label`/`Switch` 等のプリミティブ名を許容するために off にしている。コンポーネント名は多語必須で、例外は `Dialog.vue` / `Animate.vue` のように disable コメントを付ける。
- GA イベントは `vue-gtag` の `event(...)` をコンポーネント内ハンドラから直接呼び出す（例：`ResultModal.vue` の `share`, `export-image`）。
