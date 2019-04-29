import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

import * as Nama from '../constants/namaData';

const Input = styled.input`
  width: 100%;
`;

export default class InputRamal extends Component {
  render() {
    return (
      <div style={{ marginTop: '40px' }}>
        <p>
          Masukan data inputan dibawah ini untuk meramal produksi berdasarkan
          data training yang telah diinput
        </p>
        <Row style={{ marginTop: '40px' }}>
          <Col md="3">{Nama.textX[0]}</Col>
          <Col md="3">
            <Input />
          </Col>
          <Col md="3">{Nama.textX[1]}</Col>
          <Col md="3">
            <Input />
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col md="3">{Nama.textX[2]}</Col>
          <Col md="3">
            <Input />
          </Col>
          <Col md="3">{Nama.textX[3]}</Col>
          <Col md="3">
            <Input />
          </Col>
        </Row>

        <Button type="submit" block size="lg" style={{ marginTop: '30px' }}>
          Ramal
        </Button>
      </div>
    );
  }
}
