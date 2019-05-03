import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import Persamaan from './Persamaan';
import InputRamal from './InputRamal';

export default class KelolaHitungPeramalan extends Component {
  componentWillMount() {
    // jika ada data lakukan analisa
    if (this.props.state.data.length) {
      this.props.modelData();
      this.props.koefesisenDeterminasi();
    }
  }

  render() {
    const { model, data } = this.props.state;
    if (!data.length)
      return <p>Belum Ada Data, Tidak Bisa melakukan Peramalan!</p>;
    if (!model) return <p>Loading...</p>;
    return (
      <>
        <Row>
          <Col>
            <Card>
              <Card.Body>
                <Card.Title className="text-center" style={{ color: 'blue' }}>
                  Rumus Prediksi Peramalan yang digunakan
                </Card.Title>
                <Card.Text className="text-center">
                  <Persamaan data={model.weights} />
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-lg-3">
          <Col>
            <InputRamal model={model} />
          </Col>
        </Row>
      </>
    );
  }
}
