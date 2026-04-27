import { test, expect, type Page } from '@playwright/test'

type StoredModel = {
  players: string[]
  scores: number[][]
  chips: number[]
  chipRate: number
}

const seedLocalStorage = async (page: Page, model: StoredModel) => {
  await page.addInitScript(value => {
    window.localStorage.setItem('model', JSON.stringify(value))
  }, model)
}

const clearLocalStorage = async (page: Page) => {
  await page.addInitScript(() => {
    window.localStorage.clear()
  })
}

test.describe('麻雀スコアボード — smoke', () => {
  test.beforeEach(async ({ page }) => {
    await clearLocalStorage(page)
    await page.goto('/')
  })

  test('ページタイトルが表示される', async ({ page }) => {
    await expect(page).toHaveTitle('麻雀スコアボード')
  })

  test('初期状態で 4 人分のプレイヤー列とテーブル骨組みが表示される', async ({ page }) => {
    const headerRow = page.locator('table thead tr.head')
    await expect(headerRow.locator('th')).toHaveCount(5) // 左端のコーナー + プレイヤー4列
    for (let i = 1; i <= 4; i++) {
      await expect(headerRow).toContainText(`プレイヤー${i}`)
    }

    await expect(page.locator('table tbody tr.body').first()).toContainText('1回戦')
    await expect(page.locator('table tbody tr.body', { hasText: 'チップ' })).toBeVisible()
    await expect(page.locator('table tfoot tr.summary')).toContainText('合計')
  })
})

test.describe('麻雀スコアボード — スコア入力', () => {
  test.beforeEach(async ({ page }) => {
    await clearLocalStorage(page)
    await page.goto('/')
  })

  test('1回戦の点数を入力すると合計に反映され、新しい空行が追加される', async ({ page }) => {
    await page.locator('table tbody tr.body').first().click()

    const modal = page.locator('.modal-base')
    await expect(modal).toBeVisible()
    await expect(modal).toContainText('スコア編集 - 1回戦')

    const inputs = modal.locator('.text-input')
    await expect(inputs).toHaveCount(4)

    const values = [50, -10, -20, -20]
    for (let i = 0; i < values.length; i++) {
      await inputs.nth(i).fill(String(values[i]))
      await inputs.nth(i).press('Tab') // .lazy なので blur で確定させる
    }

    const save = modal.getByRole('button', { name: '保存' })
    await expect(save).toBeEnabled()
    await save.click()

    await expect(page.locator('.modal-base')).toHaveCount(0)

    const firstRow = page.locator('table tbody tr.body').first()
    await expect(firstRow).toContainText('1回戦')
    await expect(firstRow).toContainText('50')
    await expect(firstRow).toContainText('▲10')
    await expect(firstRow).toContainText('▲20')

    // 1回戦の入力で末尾に 2回戦 の空行が追加される
    await expect(page.locator('table tbody tr.body th', { hasText: '2回戦' })).toBeVisible()

    // 合計行にも反映される
    const summary = page.locator('table tfoot tr.summary')
    await expect(summary).toContainText('50')
    await expect(summary).toContainText('▲10')
  })

  test('差分が 0 でないと保存ボタンが押せない', async ({ page }) => {
    await page.locator('table tbody tr.body').first().click()

    const modal = page.locator('.modal-base')
    const inputs = modal.locator('.text-input')

    await inputs.nth(0).fill('50')
    await inputs.nth(0).press('Tab')

    await expect(modal).toContainText('ポイント差分があります')
    await expect(modal.getByRole('button', { name: '保存' })).toBeDisabled()
  })
})

test.describe('麻雀スコアボード — 永続化', () => {
  test('localStorage に保存された戦績がリロード後も表示される', async ({ page }) => {
    const stored: StoredModel = {
      players: ['プレイヤー1', 'プレイヤー2', 'プレイヤー3', 'プレイヤー4'],
      scores: [[50, -10, -20, -20]],
      chips: [0, 0, 0, 0],
      chipRate: 5000,
    }
    await seedLocalStorage(page, stored)
    await page.goto('/')

    const firstRow = page.locator('table tbody tr.body').first()
    await expect(firstRow).toContainText('50')
    await expect(firstRow).toContainText('▲10')
    await expect(firstRow).toContainText('▲20')

    // リロードしても保持されること
    await page.reload()
    await expect(page.locator('table tbody tr.body').first()).toContainText('50')
  })
})

test.describe('麻雀スコアボード — 共有 URL', () => {
  test('editable=false では編集モーダルが開かず、localStorage を上書きしない', async ({ page }) => {
    const initial: StoredModel = {
      players: ['初期1', '初期2', '初期3', '初期4'],
      scores: [[0, 0, 0, 0]],
      chips: [0, 0, 0, 0],
      chipRate: 5000,
    }
    await seedLocalStorage(page, initial)
    await page.goto('/?id=share&players=共有1,共有2,共有3,共有4&scores=50,-10,-20,-20&chips=0,0,0,0&editable=false')

    // 共有された値が描画される
    const headerRow = page.locator('table thead tr.head')
    for (let i = 1; i <= 4; i++) {
      await expect(headerRow).toContainText(`共有${i}`)
    }

    // クエリは history.replaceState で除去される
    await expect.poll(() => page.url()).toMatch(/\/$/)

    // 行をクリックしても編集モーダルは開かない
    await page.locator('table tbody tr.body').first().click()
    await expect(page.locator('.modal-base')).toHaveCount(0)

    // localStorage は初期値のまま（編集ロックで上書きされない）
    const stored = await page.evaluate(() => window.localStorage.getItem('model'))
    expect(stored).not.toBeNull()
    expect(JSON.parse(stored!)).toEqual(initial)
  })
})
