import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import math from 'mathjs';
import * as NAMA from '../constants/namaData';

class TableKorelasiVariable extends Component {
  render() {
    const { data, koefesienKorelasiAB } = this.props;

    const x1 = data.map(item => item.x1);
    const x2 = data.map(item => item.x2);
    const x3 = data.map(item => item.x3);
    const x4 = data.map(item => item.x4);
    const y = data.map(item => item.y);

    const korelasi = koefesienKorelasiAB;
    const x1x1 = math.round(korelasi(x1, x1), 4);
    const x1x2 = math.round(korelasi(x1, x2), 4);
    const x1x3 = math.round(korelasi(x1, x3), 4);
    const x1x4 = math.round(korelasi(x1, x4), 4);
    const x1y = math.round(korelasi(x1, y), 4);
    const x2x2 = math.round(korelasi(x2, x2), 4);
    const x2x3 = math.round(korelasi(x2, x3), 4);
    const x2x4 = math.round(korelasi(x2, x4), 4);
    const x2y = math.round(korelasi(x2, y), 4);
    const x3x3 = math.round(korelasi(x3, x3), 4);
    const x3x4 = math.round(korelasi(x3, x4), 4);
    const x3y = math.round(korelasi(x3, y), 4);
    const x4y = math.round(korelasi(x4, y), 4);
    const x4x4 = math.round(korelasi(x4, x4), 4);
    const yy = math.round(korelasi(y, y), 4);

    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ maxWidth: '100px' }} />
            <th>Produksi</th>
            {NAMA.textX.map(item => (
              <th key={item}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>Produksi</th>
            <td>{yy}</td>
            <td>{x1y}</td>
            <td>{x2y}</td>
            <td>{x3y}</td>
            <td>{x4y}</td>
          </tr>
          <tr>
            <th>{NAMA.textX[0]}</th>
            <td>{x1y}</td>
            <td>{x1x1}</td>
            <td>{x1x2}</td>
            <td>{x1x3}</td>
            <td>{x1x4}</td>
          </tr>
          <tr>
            <th>{NAMA.textX[1]}</th>
            <td>{x2y}</td>
            <td>{x1x2}</td>
            <td>{x2x2}</td>
            <td>{x2x3}</td>
            <td>{x2x4}</td>
          </tr>
          <tr>
            <th>{NAMA.textX[2]}</th>
            <td>{x3y}</td>
            <td>{x1x3}</td>
            <td>{x2x3}</td>
            <td>{x3x3}</td>
            <td>{x3x4}</td>
          </tr>
          <tr>
            <th>{NAMA.textX[3]}</th>
            <td>{x4y}</td>
            <td>{x1x4}</td>
            <td>{x2x4}</td>
            <td>{x3x4}</td>
            <td>{x4x4}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TableKorelasiVariable;
