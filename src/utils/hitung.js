import math from 'mathjs';

export const plus = (a, b) => a + b;
export const kali = (a, b) => a * b;
export const pangkat = pangkat => bilangan => Math.pow(bilangan, pangkat);
export const pangkat2 = pangkat(2);

export const totalArr = data => data.reduce(plus, 0);
export const arrPangkatDua = arr => arr.map(pangkat2);
export const arrKaliArr = (arr1, arr2) =>
  arr1.map((item, i) => kali(arr1[i], arr2[i]));

export const toPersen = num =>
  math.isNegative(num) ? 0 : math.round(num * 100);

export const kosongPersen = arr => {
  return arr.every(item => !math.isNegative(item)) ? 0 : 100;
};
