import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import DataPeramalan from './DataPeramalan';
import KelolaHitungPeramalan from '../components/KelolaHitungPeramalan';

export default class DataPeramalanPage extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Ramal Data Produksi</h2>
        <Subscribe to={[DataPeramalan]}>
          {data => <KelolaHitungPeramalan {...data} />}
        </Subscribe>
      </div>
    );
  }
}
