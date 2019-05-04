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
              Aplikasi SISKAWIT merupakan aplikasi peramalan kepala sawit pada
              perkebunan di, yang dikembangkan oleh <b>Sahputra</b> NIM
              (150000), jurusan ilmu komputer FMIPA Universitass Riau yang
              digunakan untuk melakukan peramalan produksi sawit dengan
              menggunakn metode multiple regresi linear sebagai syarat untuk
              menyelesaikan perkuliahan sarjana starta 1.
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}
