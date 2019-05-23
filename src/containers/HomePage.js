import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Subscribe } from 'unstated';
import { Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';
import DataPengguna from './DataPengguna';
import latih from '../img/latih.png';
import analisa from '../img/analisa.jpg';
import ramal from '../img/ramal.jpg';
import doc from '../img/doc.png';
import MenuItem from '../components/MenuItem';

class ProsesData extends Component {
  render() {
    const {
      state: { uid }
    } = this.props;

    if (!uid) return <Redirect to={ROUTES.LOGIN} />;

    return (
      <Container fluid>
        <Row className="mt-5 pr-5 pl-5">
          <Col>
            <h4 className="text-center mt-5">
              Sistem Peramalan Kelapa Sawit merupakan aplikasi yang digunakan
              untuk melakukan peramalan produksi kelapa sawit dengan menggunakan
              metode regresi linear berganda berdasarkan 4 faktor diantarnya
              pupuk, curah hujan, jarak tanam dan ketinggian tempat pada
              perkebunan kelapa sawit.
            </h4>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="12" md="6" lg="3">
            <MenuItem
              title={'1. Latih Model Data'}
              desc={'Latih Model Data Agar Aplikasi Dapat Melakukan Peramalan.'}
              btn={'Latih Model!'}
              pathname={ROUTES.LATIH}
              img={latih}
            />
          </Col>
          <Col xs="12" md="6" lg="3">
            <MenuItem
              title={'2. Analisa Model Data'}
              desc={
                'Lihat Model Data yang Telah Di buat Aplikasi Berdasarkan Data yang telah dilatih.'
              }
              btn={'Liat Model Data!'}
              pathname={ROUTES.ANALISA}
              img={analisa}
            />
          </Col>
          <Col xs="12" md="6" lg="3">
            <MenuItem
              title={'3. Peramalan Produksi'}
              desc="
                Lakukan Peramalan Produksi Kelapa Sawit berdasrakan model data yang telah dibuat"
              btn={'Lakukan Peramalan!!'}
              pathname={ROUTES.PERAMALAN}
              img={ramal}
            />
          </Col>
          <Col xs="12" md="6" lg="3">
            <MenuItem
              title={'About'}
              desc="
              Lihat Halaman Deskripsi Penjelasan Tentang Kenapa Dibuatnya Aplikasi ini"
              btn={'Liat Petunjuk'}
              pathname={ROUTES.ABOUT}
              img={doc}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

class HomePage extends React.Component {
  render() {
    return (
      <Subscribe to={[DataPengguna]}>
        {data => <ProsesData {...data} />}
      </Subscribe>
    );
  }
}

export default HomePage;
