import React, { Component } from 'react';
import Persamaan from './Persamaan';
import InputRamal from './InputRamal';

export default class KelolaHitungPeramalan extends Component {
  componentWillMount() {
    this.props.modelData();
  }

  render() {
    console.log(this.props.state.model);
    const { model } = this.props.state;
    if (!model) return <p>Loading...</p>;
    return (
      <div>
        <InputRamal model={model} />
        <div style={{ marginTop: '40px' }}>
          <h2>Model Data Peramalan</h2>
          <Persamaan data={model.weights} />
        </div>
      </div>
    );
  }
}
