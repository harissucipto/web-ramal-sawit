import React, { Component } from 'react';

import TableDataPeramalan from './TableDataPeramalan';
import TambahData from './TambahDataPeramalan';

export default class KelolaDataPeramalan extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { state, tambahData, hapusData, editData } = this.props;

    if (state.loading) return <p>Loading...</p>;

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
