/**
 * マイナスの場合▲をつける
 */
export const toFormat = (num: number): string => (
  `${0 < num ? '' : num < 0 ? '▲' : ''}${Math.abs(num)}`
)

/**
 * プラス・マイナスをつける
 */
export const toSymbol = (num: number): string => (
  `${0 < num ? '+' : num < 0 ? '-' : ''}${Math.abs(num)}`
)
