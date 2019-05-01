import React from 'react';
import * as Nama from '../constants/namaData';

const Persamaan = ({ data }) => {
  if (!data.length) return <p>Belum Ada Data</p>;
  return (
    <div style={{ marginTop: '20px' }}>
      <h5>+ Rersamaan dari model data</h5>
      <p>
        {Nama.y} =
        {data.map((item, i) => (
          <span key={i}>
            {' '}
            {Nama.x[i]} {i + 1 < data.length ? '*' : ''} {item}{' '}
            {i + 1 < data.length ? ' + ' : ''}
          </span>
        ))}
      </p>
    </div>
  );
};

export default Persamaan;
