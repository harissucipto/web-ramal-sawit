import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

import GrafikData from './GrafikData';
import GrafikKorelasiX1 from './GrafikKorelasiX1';
import GrafikKorelasiX2 from './GrafikKorelasiX2';
import GrafikKorelasiX3 from './GrafikKorelasiX3';
import GrafikKorelasiX4 from './GrafikKorelasiX4';
import GrafikDeterminasi from './GrafikDeterminasi';

export default class KelolaGrafikPeramalan extends Component {
  render() {
    const { model, data, r2, koefesienKorelasiAB } = this.props;
    if (!model) return <div>Loading...</div>;

    return (
      <div>
        <Row>
          <Col xs="12" lg="3">
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Grafik Model Peramalan</Card.Title>
                <Card.Text className="text-justify">
                  Grafik Model Peramalan, merupakan representasi model data
                  peramalan.
                  <br />
                  Untuk Melihat Informasi dengan Detail Anda Bisa{' '}
                  <b> mengklik attribut pada grafik </b>tersebut.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Body>
                <GrafikDeterminasi r2={r2} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" lg="9">
            <Card>
              <Card.Body>
                <GrafikData data={data} model={model} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-5">
          <Col md="6">
            <Card>
              <Card.Body>
                <GrafikKorelasiX1 data={data} korelasi={koefesienKorelasiAB} />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Body>
                <GrafikKorelasiX2 data={data} korelasi={koefesienKorelasiAB} />
              </Card.Body>
            </Card>
          </Col>
        </Row>

        <Row className="mt-3">
          <Col md="6">
            <Card>
              <Card.Body>
                <GrafikKorelasiX3 data={data} korelasi={koefesienKorelasiAB} />
              </Card.Body>
            </Card>
          </Col>
          <Col md="6">
            <Card>
              <Card.Body>
                <GrafikKorelasiX4 data={data} korelasi={koefesienKorelasiAB} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
