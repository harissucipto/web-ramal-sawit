import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import GrafikData from './GrafikData';
import GrafikKorelasiX1 from './GrafikKorelasiX1';

const H3 = styled.h3`
  margin-top: 40px;
  text-align: center;
`;

const H4 = styled.h5`
  margin-top: 40px;
  text-align: center;
`;

export default class KelolaGrafikPeramalan extends Component {
  componentWillMount() {
    this.props.modelData();
  }

  render() {
    const { model, data } = this.props.state;
    if (!model) return <div>Loading...</div>;

    return (
      <div>
        <Row>
          <GrafikData data={data} model={model} />
        </Row>
        <H3>Relasi Variable Peramalan</H3>
        <Row>
          <Col md="6">
            <H4>Relasi Variable X1</H4>
            <GrafikKorelasiX1
              data={data}
              korelasi={this.props.koefesienKorelasiAB}
            />
          </Col>
          <Col md="6">
            <h4>Relasi Variable X2</h4>
          </Col>
          <Col md="6">
            <h4>Relasi Variable X3</h4>
          </Col>
          <Col md="6">
            <h4>Relasi Variable X4</h4>
          </Col>
        </Row>
      </div>
    );
  }
}
