# 麻雀スコアボード

麻雀のスコアを記録するための Vue 3 製 SPA／PWA。`main` への push で GitHub Pages（`gh-pages` ブランチ）に自動デプロイされます。公開ページ: <https://fonces.github.io/mj-score-board/>

## セットアップ

```sh
npm install
```

GA 計測 ID を埋め込みたい場合は `.env.example` を参考に `.env.local` を作成し、`VUE_APP_GA_MEASUREMENT_ID` を設定してください（未設定でも動作します）。

## コマンド

| コマンド | 用途 |
| --- | --- |
| `npm run serve` | 開発サーバー（HMR 付き）を起動 |
| `npm run build` | 本番ビルドを `dist/` に出力 |
| `npm run lint` | ESLint を自動修正付きで実行 |
| `npm run test:e2e` | Playwright で e2e テストを実行 |
| `npm run test:e2e:ui` | Playwright を UI モードで起動 |

## 構成

- Vue 3.2 系 + TypeScript（`<script setup lang="ts">` ベース）
- 状態管理は Vuex（単一ストア）
- PWA 対応（`@vue/cli-plugin-pwa`）
- e2e テストは Playwright
- アーキテクチャ詳細は [`CLAUDE.md`](./CLAUDE.md) を参照
