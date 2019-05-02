import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import math from 'mathjs';

const weight = ['b1', 'b2', 'b3', 'b4', 'a'];

class TablePersamaan extends Component {
  componentWillMount() {
    this.props.modelData();
    this.props.koefesisenDeterminasi();
  }

  render() {
    const { model, r2 } = this.props.state;
    if (!model) return <p>Loading...</p>;

    return (
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th style={{ maxWidth: '100px' }}>Simbol</th>
            <th>Nilai</th>
          </tr>
        </thead>
        <tbody>
          {model.weights.map((item, i) => (
            <tr key={i}>
              <td style={{ maxWidth: '100px' }}>{weight[i]}</td>
              <td>{math.round(Number(item), 3)}</td>
            </tr>
          ))}
          <tr>
            <td style={{ maxWidth: '100px' }}>R2 ( Koefesien Determinasi) </td>
            <td>{math.round(Number(r2), 3)}</td>
          </tr>
        </tbody>
      </Table>
    );
  }
}

export default TablePersamaan;
