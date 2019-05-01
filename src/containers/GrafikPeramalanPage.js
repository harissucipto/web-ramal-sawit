import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import DataPeramalan from './DataPeramalan';
import KelolaGrafikPeramalan from '../components/KelolaGrafikPeramalan';

export default class DataPeramalanPage extends Component {
  render() {
    return (
      <div>
        <h2 className="text-center">Grafik Data Peramalan</h2>
        <Subscribe to={[DataPeramalan]}>
          {data => <KelolaGrafikPeramalan {...data} />}
        </Subscribe>
      </div>
    );
  }
}
