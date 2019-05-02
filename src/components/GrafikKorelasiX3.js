import React from 'react';
import { Pie } from 'react-chartjs-2';
import * as NAMA from '../constants/namaData';
import { toPersen } from '../utils/hitung';
import math from 'mathjs';

const GrafikData = ({ data = [], korelasi, cari = '' }) => {
  const x1 = data.map(item => item.x1);
  const x2 = data.map(item => item.x2);
  const x3 = data.map(item => item.x3);
  const x4 = data.map(item => item.x4);
  const y = data.map(item => item.y);

  const x3x1 = math.round(korelasi(x3, x1), 4);
  const x3x2 = math.round(korelasi(x3, x2), 4);
  const x3x4 = math.round(korelasi(x3, x4), 4);
  const x3y = math.round(korelasi(x3, y), 4);

  const filterData = {
    labels: [
      `${NAMA.textX[0]}`,
      `${NAMA.textX[1]}`,
      `${NAMA.textX[3]}`,
      `Produksi`
    ],
    datasets: [
      {
        data: [toPersen(x3x1), toPersen(x3x2), toPersen(x3x4), toPersen(x3y)],
        backgroundColor: [
          NAMA.warna[0],
          NAMA.warna[1],
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
      text: 'Korelasi Jarak Tanam'
    }
  };

  return <Pie data={filterData} options={options} />;
};

export default GrafikData;
