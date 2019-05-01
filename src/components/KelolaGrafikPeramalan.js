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
import GrafikDeterminasi from './GrafikDeterminasi';

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
    this.props.koefesisenDeterminasi();
  }

  render() {
    const { model, data, r2 } = this.props.state;
    if (!model) return <div>Loading...</div>;

    return (
      <div>
        <Row>
          <Col>
            <GrafikData data={data} model={model} />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px', marginBottom: '40px' }}>
          <Col>
            <H3>Korelasi Determinasi Variable Peramalan</H3>
            <GrafikDeterminasi r2={r2} />
          </Col>
        </Row>
        <H3 style={{ marginTop: '20px' }}>Korelasi Variable Peramalan</H3>
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
