import React from 'react';
import { Line } from 'react-chartjs-2';
import * as NAMA from '../constants/namaData';

const GrafikData = ({ data = [], model }) => {
  console.log(data, 'ini dari data');
  const filterData = {
    labels: data.map(item => item.tanggal.format('MM-YYYY')),
    datasets: [
      {
        label: 'Prediksi',
        data: data.map(item =>
          model.predict([item.x1, item.x2, item.x3, item.x4])
        ),
        fill: false,
        borderColor: NAMA.warna[5],
        backgroundColor: NAMA.warna[5]
      },
      {
        label: 'Produksi',
        fill: false,
        data: data.map(item => item.y),
        borderColor: NAMA.warna[4],
        backgroundColor: NAMA.warna[4]
      },
      {
        show: false,
        label: NAMA.textX[0],
        data: data.map(item => item.x1),
        fill: false,
        borderColor: NAMA.warna[0],
        backgroundColor: NAMA.warna[0]
      },
      {
        show: false,
        label: NAMA.textX[1],
        data: data.map(item => item.x2),
        fill: false,
        borderColor: NAMA.warna[1],
        backgroundColor: NAMA.warna[1]
      },
      {
        show: false,
        label: NAMA.textX[2],
        data: data.map(item => item.x3),
        fill: false,
        borderColor: NAMA.warna[2],
        backgroundColor: NAMA.warna[2]
      },
      {
        show: false,
        label: NAMA.textX[3],
        data: data.map(item => item.x4),
        fill: false,
        borderColor: NAMA.warna[3],
        backgroundColor: NAMA.warna[3]
      }
    ]
  };

  const options = {
    responsive: true,
    title: {
      display: true,
      text: 'Data Perkebunan'
    },
    tooltips: {
      mode: 'label'
    },
    hover: {
      mode: 'dataset'
    },
    scales: {
      xAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: 'Month'
          }
        }
      ],
      yAxes: [
        {
          display: true,
          scaleLabel: {
            show: true,
            labelString: 'Value'
          },
          ticks: {
            suggestedMin: 0
          }
        }
      ]
    }
  };

  // for (let dataset of filterData.datasets) {
  //   dataset.backgroundColor = 'pink';
  //   dataset.pointBorderColor = 'green';
  //   dataset.pointBackgroundColor = 'yellow';
  //   dataset.pointBorderWidth = 1;
  // }
  return <Line data={filterData} options={options} />;
};

export default GrafikData;
