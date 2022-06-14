export const toPosiNega = num => `${0 < num ? '' : num < 0 ? '▲' : ''}${Math.abs(num)}`
export const toPlusMinus = num => `${0 < num ? '+' : num < 0 ? '-' : ''}${Math.abs(num)}`