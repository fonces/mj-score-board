/**
 * 合計がexpectと同じになるかチェックする
 * @param {Array} score 
 * @param {Number} expect 
 * @returns 
 */
export const isDifference = (score, expect = 0) => (
  expect !== score.reduce((acc, s) => acc += s, 0)
)
