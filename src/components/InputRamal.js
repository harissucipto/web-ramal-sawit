import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import math from 'mathjs';

import * as Nama from '../constants/namaData';

const Input = styled.input`
  width: 100%;
`;

export default class InputRamal extends Component {
  state = {
    x1: 0,
    x2: 0,
    x3: 0,
    x4: 0,
    y: 0,
    show: false
  };

  ramal = () => {
    const { x1, x2, x3, x4 } = this.state;

    const y = this.props.model.predict([
      Number(x1),
      Number(x2),
      Number(x3),
      Number(x4)
    ]);
    this.setState({ y, show: true });
  };

  render() {
    console.log(this.props.model);
    const { x1, x2, x3, x4, show, y } = this.state;
    return (
      <div style={{ marginTop: '40px' }}>
        <p>
          Masukan data inputan dibawah ini untuk meramal produksi berdasarkan
          data training yang telah diinput
        </p>
        <form
          onSubmit={e => {
            e.preventDefault();
            this.ramal();
          }}
        >
          <Row style={{ marginTop: '40px' }}>
            <Col md="3">{Nama.textX[0]}</Col>
            <Col md="3">
              <Input
                required
                type="number"
                value={x1}
                onChange={event => this.setState({ x1: event.target.value })}
              />
            </Col>
            <Col md="3">{Nama.textX[1]}</Col>
            <Col md="3">
              <Input
                required
                type="number"
                value={x2}
                onChange={event => this.setState({ x2: event.target.value })}
              />
            </Col>
          </Row>
          <Row style={{ marginTop: '20px' }}>
            <Col md="3">{Nama.textX[2]}</Col>
            <Col md="3">
              <Input
                required
                type="number"
                value={x3}
                onChange={event => this.setState({ x3: event.target.value })}
              />
            </Col>
            <Col md="3">{Nama.textX[3]}</Col>
            <Col md="3">
              <Input
                type="number"
                required
                value={x4}
                onChange={event => this.setState({ x4: event.target.value })}
              />
            </Col>
          </Row>

          <Button type="submit" block size="lg" style={{ marginTop: '30px' }}>
            Ramal
          </Button>
        </form>

        {show && (
          <div style={{ textAlign: 'center', margin: '40px 0' }}>
            <h4>Hasil Ramal Produksi</h4>
            {math.round(y, 4)} Produksi
          </div>
        )}
      </div>
    );
  }
}
