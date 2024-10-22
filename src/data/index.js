import shortid from 'shortid';
import moment from 'moment';

// data
const x1 = [101, 241, 65, 39, 71, 46, 52, 65, 111, 83, 52, 19];
const x2 = [
  13156,
  17392,
  18655,
  19869,
  21460,
  80990,
  43729,
  41054,
  37753,
  100913,
  103367,
  135144
];
const x3 = [6, 7, 8, 8, 9, 9, 8, 7, 6, 7, 8, 9];
const x4 = [2, 3, 4, 5, 6, 6, 5, 4, 3, 4, 6, 7];
const y = [
  572750,
  647940,
  680400,
  710870,
  823260,
  1010200,
  949890,
  900530,
  895570,
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
