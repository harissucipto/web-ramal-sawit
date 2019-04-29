import shortid from 'shortid';
import moment from 'moment';

// data
const x1 = [101, 241, 65, 39, 71, 46, 52, 65, 111, 83, 52, 19];
const x2 = [
  19869,
  32605,
  16449,
  10518,
  24159,
  37753,
  15000,
  108160,
  12600,
  50400,
  12820,
  12562
];
const x3 = [8, 7, 5, 8, 9, 8, 6, 7, 8, 9, 8, 9];
const x4 = [4, 3, 5, 5, 30, 3, 5, 7, 5, 4, 6, 5];
const y = [
  572750,
  680400,
  710870,
  823260,
  647940,
  1010200,
  949890,
  895570,
  900530,
  1280990,
  1531390,
  2142730
];

export const data = x1.map((item, i) => ({
  id: shortid(),
  tanggal: moment(),
  x1: x1[i],
  x2: x2[i],
  x3: x3[i],
  x4: x4[i],
  y: y[i]
}));

export default { x1, x2, x3, x4, y };
