import React from 'react';
import Table from 'react-bootstrap/Table';
import Hapus from './HapusDataPeramalan';

const TableDataPeramalan = ({ data = [], onHapus }) => (
  <Table>
    <thead>
      <tr>
        <th>No</th>
        <th>Bulan</th>
        <th>Produksi</th>
        <th>Pupuk</th>
        <th>Curah Hujan</th>
        <th>Jarak Tanam</th>
        <th>Ketinggian Tempat</th>
        <th>Aksi</th>
      </tr>
    </thead>

    <tbody>
      {data.map((item, i) => (
        <tr key={i}>
          <td>{i + 1}</td>
          <td>{item.tanggal.format('MM YYYY')}</td>
          <td>{item.y}</td>
          <td>{item.x1}</td>
          <td>{item.x2}</td>
          <td>{item.x3}</td>
          <td>{item.x4}</td>
          <th>
            <Hapus onHapus={onHapus} id={item.id} />
            <button>Edit</button>
            <button>Delete</button>
          </th>
        </tr>
      ))}
    </tbody>
  </Table>
);

export default TableDataPeramalan;
