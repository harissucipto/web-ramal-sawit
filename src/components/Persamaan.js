import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as Nama from '../constants/namaData';

const Persamaan = ({ data }) => {
  if (!data.length) return <p>Belum Ada Data</p>;
  return (
    <Row>
      <Col style={{ color: 'blue', fontSize: 14 }} xs="3">
        Produksi =
      </Col>
      <Col xs="9">
        <p style={{ color: 'blue', fontSize: 14 }}>
          {data.map((item, i) => (
            <span key={i} style={{ color: 'blue', fontSize: 14 }}>
              {' '}
              {Nama.textX[i]} {i + 1 < data.length ? '*' : ''} {item}{' '}
              {i + 1 < data.length ? ' + ' : ''}
            </span>
          ))}
        </p>
      </Col>
    </Row>
  );
};

export default Persamaan;
