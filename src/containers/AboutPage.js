import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import latih from '../img/latih.png';

export default class PetunjukPage extends Component {
  render() {
    return (
      <Container>
        <Row className="mt-5 text-center">
          <Col>
            <h2>Tentang Aplikasi SISKAWIT</h2>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col md="6">
            <img src={latih} alt="putra" />
          </Col>
          <Col md="6" className="mt-lg-5">
            Aplikasi SISKAWIT merupakan aplikasi peramalan kepala sawit di
            perkebunan ptpnV, yang dikembangkan oleh <b>Sahputra</b> NIM
            (150000), jurusan ilmu komputer FMIPA Universitass Riau yang
            digunakan untuk melakukan peramalan produksi sawit dengan menggunakn
            metode multiple regresi linear sebagai syarat untuk menyelesaikan
            perkuliahan sarjana starta 1.s
          </Col>
        </Row>
      </Container>
    );
  }
}
