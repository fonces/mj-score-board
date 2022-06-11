export const fill = (len, value = 0) => Array(len).fill(value)
export const split = (list, divide) => Array(list.length / divide).fill().map((_, i) => list.slice(i * divide, (i + 1) * divide))