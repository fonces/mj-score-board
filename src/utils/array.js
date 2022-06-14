/**
 * valueを繰り返す配列を作成する
 * @param {Number} len 
 * @param {any} value 
 * @returns 
 */
export const fill = (len, value = 0) => (
  Array(len).fill(value)
)

/**
 * listをdivide毎に分割する
 * @param {Array} list 
 * @param {Number} divide 
 * @returns 
 */
export const split = (list, divide) => (
  Array(list.length / divide)
    .fill()
    .map((_, i) => list.slice(i * divide, (i + 1) * divide))
)

/**
 * 合計を算出する
 * @param {Array} numbers
 * @returns 
 */
 export const sum = numbers => numbers.reduce((acc, n) => acc += n, 0)
