import React, { Component } from 'react';
import Persamaan from './Persamaan';
import InputRamal from './InputRamal';

export default class KelolaHitungPeramalan extends Component {
  componentWillMount() {
    this.props.modelData();
    this.props.koefesisenDeterminasi();
  }

  render() {
    console.log(this.props.state.model);
    const { model, r2 } = this.props.state;
    if (!model) return <p>Loading...</p>;
    return (
      <div>
        <InputRamal model={model} />
        <div style={{ marginTop: '40px' }}>
          <h2>Model Data Peramalan</h2>
          <Persamaan data={model.weights} />
          <p>R2 (Koefesien Determinasi) = {r2}</p>
        </div>
      </div>
    );
  }
}
