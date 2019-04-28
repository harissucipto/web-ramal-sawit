import React, { Component } from 'react';

import TableDataPeramalan from './TableDataPeramalan';
import TambahData from './TambahDataPeramalan';

export default class KelolaDataPeramalan extends Component {
  render() {
    const { state, tambahData } = this.props;
    return (
      <div>
        <TambahData onTambah={tambahData} />
        <TableDataPeramalan data={state.data} />
      </div>
    );
  }
}
