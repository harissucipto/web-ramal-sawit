import React from 'react';
import { Pie } from 'react-chartjs-2';
import * as NAMA from '../constants/namaData';
import math from 'mathjs';

const GrafikData = ({ r2 }) => {
  const data = math.round(r2 * 100, 4);
  const sisa = 100 - data;

  const filterData = {
    labels: [`pengaruh variable`, `tidak terlibat`],
    datasets: [
      {
        data: [data, sisa],
        backgroundColor: [NAMA.warna[5]]
      }
    ]
  };

  const options = {
    responsive: true
  };

  return <Pie data={filterData} options={options} />;
};

export default GrafikData;
