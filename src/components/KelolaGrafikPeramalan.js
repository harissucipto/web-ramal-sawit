import React, { Component } from 'react';
import styled from 'styled-components';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import * as NAMA from '../constants/namaData';
import GrafikData from './GrafikData';
import GrafikKorelasiX1 from './GrafikKorelasiX1';
import GrafikKorelasiX2 from './GrafikKorelasiX2';
import GrafikKorelasiX3 from './GrafikKorelasiX3';
import GrafikKorelasiX4 from './GrafikKorelasiX4';

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
        <H3>Korelasi Variable Peramalan</H3>
        <Row>
          <Col md="6" style={{ marginBottom: '20px' }}>
            <H4 style={{ color: NAMA.warna[0] }}>Korelasi {NAMA.textX[0]}</H4>
            <GrafikKorelasiX1
              data={data}
              korelasi={this.props.koefesienKorelasiAB}
            />
          </Col>
          <Col md="6">
            <H4 style={{ color: NAMA.warna[1] }}>Korelasi {NAMA.textX[1]}</H4>
            <GrafikKorelasiX2
              data={data}
              korelasi={this.props.koefesienKorelasiAB}
            />
          </Col>
          <Col md="6">
            <H4 style={{ color: NAMA.warna[2] }}>Korelasi {NAMA.textX[2]}</H4>
            <GrafikKorelasiX3
              data={data}
              korelasi={this.props.koefesienKorelasiAB}
            />
          </Col>
          <Col md="6">
            <H4 style={{ color: NAMA.warna[3] }}>Korelasi {NAMA.textX[3]}</H4>
            <GrafikKorelasiX4
              data={data}
              korelasi={this.props.koefesienKorelasiAB}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
