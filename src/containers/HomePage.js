import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import * as ROUTES from '../constants/routes';

import latih from '../img/latih.png';
import analisa from '../img/analisa.jpg';
import ramal from '../img/ramal.jpg';
import doc from '../img/doc.png';
import MenuItem from '../components/MenuItem';

class HomePage extends React.Component {
  render() {
    return (
      <Container fluid>
        <Row className="mt-5 pr-5 pl-5">
          <Col>
            <h1 className="text-center">SISKAWIT APP</h1>
            <h4 className="text-center mt-5">
              SISKAWIT merupakan aplikasi yang digunakan untuk melakukan
              peramalan produksi kelapa sawit dengan menggunakan metode regresi
              linear berganda berdasarkan 4 faktor diantarnya pupuk, curah
              hujan, jarak tanam dan ketinggian tempat pada perkebunan kelapa
              sawit.
            </h4>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col xs="12" md="3">
            <MenuItem
              title={'Latih Model Data'}
              desc={'Latih Model Data Agar Aplikasi Dapat Melakukan Peramalan.'}
              btn={'Latih Model!'}
              pathname={ROUTES.LATIH}
              img={latih}
            />
          </Col>
          <Col xs="12" md="3">
            <MenuItem
              title={'Analisa Model Data'}
              desc={
                'Lihat Model Data yang Telah Di buat Aplikasi Berdasarkan Data yang telah dilatih.'
              }
              btn={'Liat Model Data!'}
              pathname={ROUTES.ANALISA}
              img={analisa}
            />
          </Col>
          <Col xs="12" md="3">
            <MenuItem
              title={'Peramalan Produksi'}
              desc="
                Lakukan Peramalan Produksi Kelapa Sawit berdasrakan model data yang telah dibuat"
              btn={'Lakukan Peramalan!!'}
              pathname={ROUTES.PERAMALAN}
              img={ramal}
            />
          </Col>
          <Col xs="12" md="3">
            <MenuItem
              title={'Petunjuk'}
              desc="
              Pelajari Lebih Lanjut, Bagaimanq caranya menggunakan aplikasi ini dengan benar."
              btn={'Liat Petunjuk'}
              pathname={ROUTES.PETUNJUK}
              img={doc}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default HomePage;
