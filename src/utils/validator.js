export const isDifference = score => 0 !== score.reduce((acc, s) => acc += s, 0)
