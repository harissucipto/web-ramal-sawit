import React from 'react';
import { Pie } from 'react-chartjs-2';
import * as NAMA from '../constants/namaData';
import { toPersen, kosongPersen } from '../utils/hitung';
import math from 'mathjs';

const GrafikData = ({ data = [], korelasi, cari = '' }) => {
  const x1 = data.map(item => item.x1);
  const x2 = data.map(item => item.x2);
  const x3 = data.map(item => item.x3);
  const x4 = data.map(item => item.x4);
  const y = data.map(item => item.y);

  const x2x1 = math.round(korelasi(x2, x1), 4);
  const x2x3 = math.round(korelasi(x2, x3), 4);
  const x2x4 = math.round(korelasi(x2, x4), 4);
  const x2y = math.round(korelasi(x2, y), 4);

  console.log(kosongPersen([x2x1, x2x3, x2x4, x2y]), 'ini');

  const filterData = {
    labels: [
      `${NAMA.textX[0]}`,
      `${NAMA.textX[2]}`,
      `${NAMA.textX[3]}`,
      `Produksi`
    ],
    datasets: [
      {
        data: [toPersen(x2x1), toPersen(x2x3), toPersen(x2x4), toPersen(x2y)],
        backgroundColor: [
          NAMA.warna[0],
          NAMA.warna[2],
          NAMA.warna[3],
          NAMA.warna[4]
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Korelasi Jumlah Pupuk'
    }
  };

  return <Pie data={filterData} options={options} />;
};

export default GrafikData;
