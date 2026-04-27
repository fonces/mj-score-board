import { test, expect } from '@playwright/test'

test.describe('麻雀スコアボード — smoke', () => {
  test.beforeEach(async ({ page }) => {
    await page.addInitScript(() => {
      window.localStorage.clear()
    })
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
