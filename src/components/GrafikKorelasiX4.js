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

  const x4x1 = math.round(korelasi(x4, x1), 4);
  const x4x2 = math.round(korelasi(x4, x2), 4);
  const x4x3 = math.round(korelasi(x4, x3), 4);
  const x1y = math.round(korelasi(x2, y), 4);

  const filterData = {
    labels: [
      `${NAMA.textX[0]} (%)`,
      `${NAMA.textX[1]} (%)`,
      `${NAMA.textX[2]} (%)`,
      `Produksi (%)`
    ],
    datasets: [
      {
        data: [toPersen(x4x1), toPersen(x4x2), toPersen(x4x3), toPersen(x1y)],
        backgroundColor: [
          NAMA.warna[0],
          NAMA.warna[1],
          NAMA.warna[2],
          NAMA.warna[4]
        ]
      }
    ]
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Korelasi Ketinggian Tempat'
    }
  };

  return <Pie data={filterData} options={options} />;
};

export default GrafikData;
