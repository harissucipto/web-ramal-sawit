import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import * as NAMA from '../constants/namaData';

import TablePersamaan from '../components/TablePersamaan';
import TableKorelasiVariable from '../components/TableKorelasiVariable';

import DataPeramalan from './DataPeramalan';
import KelolaGrafikPeramalan from '../components/KelolaGrafikPeramalan';

import analisa from '../img/analisa.jpg';

export default class DataPeramalanPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-5">
          <Col xs="12" md="3">
            <Card>
              <Card.Img variant="top" src={analisa} height="250" />
              <Card.Body>
                <Card.Title>Analisa Model Data Peramalan</Card.Title>
                <Card.Text className="text-justify">
                  <span style={{ display: 'block', marginBottom: '5px' }}>
                    Halaman ini memuat model Data Peramalan yang telah dibuat
                    oleh sistem berdasarkan data perkebunan yang telah dimasukan
                    oleh pengguna.
                  </span>
                  Jika anda ingin mengedit data latih perkebunan, silhakan ke
                  halaman <Link to={ROUTES.LATIH}>latih data model</Link>, atau
                  anda bisa melakukan{' '}
                  <Link to={ROUTES.PERAMALAN}>
                    peramalan produksi kelapa sawit.
                  </Link>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="3">
            <h4 className="text-center mb-3">Tabel Persamaan</h4>
            <Subscribe to={[DataPeramalan]}>
              {data => <TablePersamaan {...data} />}
            </Subscribe>
          </Col>
          <Col xs="12" md="6">
            <h4 className="text-center mb-3">Tabel Korelasi Variable</h4>
            <Subscribe to={[DataPeramalan]}>
              {data => <TableKorelasiVariable {...data} />}
            </Subscribe>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <h2 className="text-center">Analisa Model Peramalan</h2>
            <Subscribe to={[DataPeramalan]}>
              {data => <KelolaGrafikPeramalan {...data} />}
            </Subscribe>
          </Col>
        </Row>
      </Container>
    );
  }
}
