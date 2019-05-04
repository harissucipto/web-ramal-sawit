import React, { Component } from 'react';

import TableDataPeramalan from './TableDataPeramalan';
import TambahData from './TambahDataPeramalan';

export default class KelolaDataPeramalan extends Component {
  render() {
    const { state, tambahData, hapusData, editData } = this.props;

    return (
      <div>
        <div
          style={{
            marginTop: '20px',
            marginBottom: '20px'
          }}
        >
          <TambahData onTambah={tambahData} />
        </div>

        <TableDataPeramalan
          data={state.data}
          onHapus={hapusData}
          onEdit={editData}
        />
      </div>
    );
  }
}
