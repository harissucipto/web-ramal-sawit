import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link, Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

import latih from '../img/latih.png';

import DataPeramalan from './DataPeramalan';
import DataPengguna from './DataPengguna';
import KelolaDataPeramalan from '../components/KelolaDataPeramalan';

export default class LatihPage extends Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-5 mb-5">
          <Col xs="12" lg="3">
            <Card style={{ borderColor: 'green', borderWidth: '4px' }}>
              <Card.Img variant="top" src={latih} />
              <Card.Body>
                <Card.Title>Input Data Peramalan</Card.Title>
                <Card.Text className="text-justify">
                  <span style={{ display: 'block', marginBottom: '5px' }}>
                    Masukkan data anda untuk melatih sistem dalam melakukan
                    peramalan produksi kelapa sawit berupa produksi perkebunan
                    dan faktor Curah Hujan, Jumlah Pupuk, Jarak Tanam
                    dan Ketinggian Tempat. Sistem sangat bergantung dengan data
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
          <Col xs="12" lg="9">
            <Card style={{ borderColor: 'green', borderWidth: '4px' }}>
              <Card.Body>
                <h3 className="text-center">Data Perkebunan</h3>
                <Subscribe to={[DataPeramalan, DataPengguna]}>
                  {(dataPeramalan, dataPengguna) => {
                    return dataPengguna.state.uid ? (
                      <KelolaDataPeramalan {...dataPeramalan} />
                    ) : (
                      <Redirect to={ROUTES.LOGIN} />
                    );
                  }}
                </Subscribe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}
