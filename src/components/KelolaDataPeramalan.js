import React, { Component } from 'react';

import TableDataPeramalan from './TableDataPeramalan';
import TambahData from './TambahDataPeramalan';
import { MultivariateLinearRegression } from 'ml-regression';

export default class KelolaDataPeramalan extends Component {
  render() {
    const { state, tambahData, hapusData, editData, modelData } = this.props;
    return (
      <div>
        <TambahData onTambah={tambahData} />
        <button onClick={modelData}>Training Data</button>
        <TableDataPeramalan
          data={state.data}
          onHapus={hapusData}
          onEdit={editData}
        />
      </div>
    );
  }
}
