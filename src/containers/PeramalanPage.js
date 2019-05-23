import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link, Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import * as NAMA from '../constants/namaData';
import ramal from '../img/ramal.jpg';

import DataPeramalan from './DataPeramalan';
import DataPengguna from './DataPengguna';
import KelolaHitungPeramalan from '../components/KelolaHitungPeramalan';

export default class PeramalanPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-5 mb-5">
          <Col xs="12" md="3">
            <Card style={{ borderColor: 'green', borderWidth: '4px' }}>
              <Card.Img variant="top" src={ramal} />
              <Card.Body>
                <Card.Title>Peramalan Produksi</Card.Title>
                <Card.Text className="text-justify">
                  <span style={{ display: 'block', marginBottom: '5px' }}>
                    Lakukan peramalan produksi kelapa sawit berdasarkan faktor{' '}
                    {NAMA.textX.map((item, i) => (
                      <span key={i}>{item}, </span>
                    ))}
                    dari model yang telah dibuat oleh sistem dari data produksi
                    kebun.
                  </span>
                  Anda dapat{' '}
                  <Link to={ROUTES.ANALISA}>melihat model data peramalan</Link>{' '}
                  dari sistem, atau melakukan penambahan{' '}
                  <Link to={ROUTES.LATIH}>data perkebunan kelapa sawit.</Link>{' '}
                  untuk melatih sistem dalam melakukan peramalan produksi kelapa
                  sawit
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="9">
            <Subscribe to={[DataPeramalan, DataPengguna]}>
              {(dataPeramalan, dataPengguna) =>
                dataPengguna.state.uid ? (
                  <KelolaHitungPeramalan {...dataPeramalan} />
                ) : (
                  <Redirect to={ROUTES.LOGIN} />
                )
              }
            </Subscribe>
          </Col>
        </Row>
      </Container>
    );
  }
}
