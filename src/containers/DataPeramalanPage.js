import React, { Component } from 'react';
import { Subscribe } from 'unstated';

import DataPeramalan from './DataPeramalan';
import KelolaDataPeramalan from '../components/KelolaDataPeramalan';

export default class DataPeramalanPage extends Component {
  render() {
    return (
      <div>
        <p>ini data peramalan</p>
        <Subscribe to={[DataPeramalan]}>
          {data => <KelolaDataPeramalan {...data} />}
        </Subscribe>
      </div>
    );
  }
}
