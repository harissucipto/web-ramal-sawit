import React from 'react';
import * as Nama from '../constants/namaData';

const Persamaan = ({ data }) => {
  if (!data.length) return <p>Belum Ada Data</p>;
  return (
    <span style={{ color: 'green', fontSize: 14, justifyContent: 'center' }}>
      Produksi ={' '}
      {data.map((item, i) => (
        <span key={i} style={{ color: 'green', fontSize: 14 }}>
          {' '}
          {Nama.textX[i]} {i + 1 < data.length ? '*' : ''} {item}{' '}
          {i + 1 < data.length ? ' + ' : ''}
        </span>
      ))}
    </span>
  );
};

export default Persamaan;
