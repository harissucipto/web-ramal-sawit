import React from 'react';
import Table from 'react-bootstrap/Table';
import Hapus from './HapusDataPeramalan';
import Edit from './EditDataPeramalan';

import * as NAMA from '../constants/namaData';

const TableDataPeramalan = ({ data = [], onHapus, onEdit }) => (
  <Table bordered responsive>
    <thead>
      <tr>
        <th>No</th>
        <th>Bulan</th>
        <th>Produksi (ton)</th>
        <th>{NAMA.textX[0]}</th>
        <th>{NAMA.textX[1]}</th>
        <th>{NAMA.textX[2]}</th>
        <th>{NAMA.textX[3]}</th>
        <th>Aksi</th>
      </tr>
    </thead>

    <tbody>
      {data.map((item, i) => (
        <tr key={item.id}>
          <td>{i + 1}</td>
          <td>{item.id}</td>
          <td>{item.y}</td>
          <td>{item.x1}</td>
          <td>{item.x2}</td>
          <td>{item.x3}</td>
          <td>{item.x4}</td>
          <th>
            <Hapus onHapus={onHapus} id={item.id} />

            <Edit onEdit={onEdit} item={item} />
          </th>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default TableDataPeramalan;
