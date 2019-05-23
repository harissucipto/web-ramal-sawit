import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import math from 'mathjs';
import moment from 'moment';
import { totalArr } from '../utils/hitung';
import 'moment/locale/id';

import * as NAMA from '../constants/namaData';

moment.locale('id');

class TableDataPeramalan extends Component {
  render() {
    const { data, model } = this.props;

    if (!data.length) return <p>Belum ada data</p>;

    // return <p>test</p>;

    const filterData = data.sort((a, b) => a.tanggal - b.tanggal);

    const x1 = filterData.map(item => item.x1);
    const x2 = filterData.map(item => item.x2);
    const x3 = filterData.map(item => item.x3);
    const x4 = filterData.map(item => item.x4);
    const y = filterData.map(item => item.y);
    const predict = filterData.map(item =>
      Number(model.predict([item.x1, item.x2, item.x3, item.x4]))
    );
    const error = predict.map((item, i) => y[i] - item);

    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Bulan</th>
            <th>Tanggal</th>
            <th>Produksi (ton)</th>
            <th>{NAMA.textXsatuan[0]}</th>
            <th>{NAMA.textXsatuan[1]}</th>
            <th>{NAMA.textXsatuan[2]}</th>
            <th>{NAMA.textXsatuan[3]}</th>
            <th>Prediksi</th>
            <th>Erorr</th>
          </tr>
        </thead>

        <tbody>
          {filterData.map((item, i) => (
            <tr key={item.id}>
              <td>{item.tanggal.format('MMMM')}</td>
              <td>{item.tanggal.format('DD-MM-YYYY')}</td>
              <td>{item.y}</td>
              <td>{item.x1}</td>
              <td>{item.x2}</td>
              <td>{item.x3}</td>
              <td>{item.x4}</td>
              <td>{math.round(predict[i], 4)}</td>
              <td>{math.round(error[i])}</td>
            </tr>
          ))}
          <tr>
            <td colSpan="2">Jumlah</td>
            <td>{totalArr(y)}</td>
            <td>{totalArr(x1)}</td>
            <td>{totalArr(x2)}</td>
            <td>{totalArr(x3)}</td>
            <td>{totalArr(x4)}</td>
            <td>{math.round(totalArr(predict), 4)}</td>
            <td>{math.round(totalArr(error), 4)}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TableDataPeramalan;
