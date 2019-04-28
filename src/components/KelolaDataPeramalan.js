import React, { Component } from 'react';
import TableDataPeramalan from './TableDataPeramalan';

export default class KelolaDataPeramalan extends Component {
  componentDidMount() {
    this.props.fetch();
  }

  render() {
    const { state } = this.props;
    return (
      <div>
        <TableDataPeramalan data={state.data} />
      </div>
    );
  }
}
