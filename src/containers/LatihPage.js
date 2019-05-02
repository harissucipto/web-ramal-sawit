import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import * as NAMA from '../constants/namaData';

import latih from '../img/latih.png';

import DataPeramalan from './DataPeramalan';
import KelolaDataPeramalan from '../components/KelolaDataPeramalan';

export default class LatihPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col xs="12" md="3">
            <Card>
              <Card.Img variant="top" src={latih} height="250" />
              <Card.Body>
                <Card.Title>Latih Model Peramalan</Card.Title>
                <Card.Text className="text-justify">
                  <span style={{ display: 'block', marginBottom: '5px' }}>
                    Data yang terjadi di lapangan berupa produksi kelapa sawit
                    yang dihaslkan oleh perkebunan berdasarkan faktor{' '}
                    {NAMA.textX.map((item, i) => (
                      <span key={i}>{item}, </span>
                    ))}
                    digunakan oleh sistem untuk membuat model peramalan produksi
                    kelapa sawit. Sehingga sistem sangat bergantung dengan data
                    asli yang anda masukan agar dapat melakukan peramalan dengan
                    akurat.
                  </span>
                  Jika anda telah memasukan data perkebunan, silhakan{' '}
                  <Link to={ROUTES.ANALISA}>melihat model</Link> yang telah
                  dibuat oleh sistem, atau bisa langsung melakukan{' '}
                  <Link to={ROUTES.PERAMALAN}>peramalan.</Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="9">
            <h3 className="text-center">Data Perkebunan</h3>
            <Subscribe to={[DataPeramalan]}>
              {data => <KelolaDataPeramalan {...data} />}
            </Subscribe>
          </Col>
        </Row>
      </Container>
    );
  }
}
