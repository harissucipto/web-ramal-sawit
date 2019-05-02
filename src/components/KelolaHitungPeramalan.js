import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

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
      <Row>
        <Col md="8">
          <InputRamal model={model} />
        </Col>
        <Col md="4">
          <Card>
            <Card.Body>
              <Card.Title className="text-center" style={{ color: 'blue' }}>
                Rumus Prediksi Peramalan
              </Card.Title>
              <Card.Text>
                <Persamaan data={model.weights} />
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}
