import React from 'react';
import { Pie } from 'react-chartjs-2';
import * as NAMA from '../constants/namaData';
import math from 'mathjs';

const GrafikData = ({ r2 }) => {
  const data = math.round(r2 * 100);
  const sisa = math.round(100 - data);

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
    responsive: true,
    title: {
      display: true,
      text: 'Korelasi  Determinasi Variable'
    }
  };

  return (
    <div>
      <Pie data={filterData} options={options} />
      <p>Keterangan:</p>
      <p className="text-justify">
        <b>{data}% </b>jumlah produksi kelapa sawit dipengaruhi keempat faktor
        yang dianalisis, sedangkan <b>{sisa}%</b> sisanya dipengaruhi oleh
        faktor-faktor lain yang tidak dianalisis.
      </p>
    </div>
  );
};

export default GrafikData;
