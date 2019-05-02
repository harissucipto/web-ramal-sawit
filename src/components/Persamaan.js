import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Nama from '../constants/namaData';

const Persamaan = ({ data }) => {
  if (!data.length) return <p>Belum Ada Data</p>;
  return (
    <p style={{ color: 'blue', fontSize: 14, justifyContent: 'center' }}>
      Produksi ={' '}
      {data.map((item, i) => (
        <span key={i} style={{ color: 'blue', fontSize: 14 }}>
          {' '}
          {Nama.textX[i]} {i + 1 < data.length ? '*' : ''} {item}{' '}
          {i + 1 < data.length ? ' + ' : ''}
        </span>
      ))}
    </p>
  );
};

export default Persamaan;
