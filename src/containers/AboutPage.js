import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import DataPengguna from './DataPengguna';

import putra from '../img/putra.jpg';

export default class PetunjukPage extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5 text-center">
          <Subscribe to={[DataPengguna]}>
            {data => (data.state.uid ? null : <Redirect to={ROUTES.LOGIN} />)}
          </Subscribe>
          <Col>
            <h2 className="mb-5">Tentang Aplikasi SISKAWIT</h2>
            <img src={putra} alt="putra" height="50%" />
            <div className="mt-5">
              <h4>
                Aplikasi SISKAWIT merupakan aplikasi peramalan kelapa sawit pada
                PT. Perkebunan Nusantara V cabang Kebun Sei Buatan, yang dibuat
                oleh <b>Sahputra</b> NIM (1503113254) jurusan ilmu komputer
                FMIPA Universitas Riau yang digunakan untuk melakukan peramalan
                produksi sawit dengan menggunakan metode multiple regresion
                sebagai syarat untuk menyelesaikan perkuliahan sarjana strata 1.
              </h4>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
