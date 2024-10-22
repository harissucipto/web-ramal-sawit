import React from 'react';
import Table from 'react-bootstrap/Table';
import 'moment/locale/id';
import Hapus from './HapusDataPeramalan';
import Edit from './EditDataPeramalan';

import * as NAMA from '../constants/namaData';

const TableDataPeramalan = ({ data = [], onHapus, onEdit }) => {
  if (!data.length) return <p>Belum ada data</p>;

  const filterData = data.sort((a, b) => a.tanggal - b.tanggal);

  return (
    <Table striped bordered hover responsive>
      <thead>
        <tr>
          <th>No</th>
          <th>Tanggal</th>
          <th>Produksi (ton)</th>
          <th>{NAMA.textX[0]}</th>
          <th>{NAMA.textX[1]}</th>
          <th>{NAMA.textX[2]}</th>
          <th>{NAMA.textX[3]}</th>
          <th>Aksi</th>
        </tr>
      </thead>

      <tbody>
        {filterData.map((item, i) => (
          <tr key={item.id}>
            <td>{i + 1}</td>
            <td>{item.tanggal.format('DD-MM-YYYY')}</td>
            <td>{item.y}</td>
            <td>{item.x1}</td>
            <td>{item.x2}</td>
            <td>{item.x3}</td>
            <td>{item.x4}</td>
            <th className="text-center">
              <Hapus onHapus={onHapus} id={item.id} item={item} />

              <Edit onEdit={onEdit} item={item} />
            </th>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default TableDataPeramalan;
