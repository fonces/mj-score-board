/**
 * マイナスの場合▲をつける
 * @param {Number} num 
 * @returns 
 */
export const toFormat = num => (
  `${0 < num ? '' : num < 0 ? '▲' : ''}${Math.abs(num)}`
)

/**
 * プラス・マイナスをつける
 * @param {Number} num 
 * @returns 
 */
export const toSymbol = num => (
  `${0 < num ? '+' : num < 0 ? '-' : ''}${Math.abs(num)}`
)
