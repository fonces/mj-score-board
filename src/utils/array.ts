/**
 * valueを繰り返す配列を作成する
 */
export const fill = <T = number>(len: number, value: T = 0 as unknown as T): T[] => (
  Array(len).fill(value)
)

/**
 * listをdivide毎に分割する
 */
export const split = <T>(list: T[], divide: number): T[][] => (
  Array(list.length / divide)
    .fill(undefined)
    .map((_, i) => list.slice(i * divide, (i + 1) * divide))
)

/**
 * numbersの合計を算出する
 */
export const sum = (numbers: number[]): number => (
  numbers.reduce((acc, n) => acc += n, 0)
)
