import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

import TablePersamaan from '../components/TablePersamaan';
import TableKorelasiVariable from '../components/TableKorelasiVariable';
import TableDataPerkebunanAnalisa from '../components/TableDataPerkebunanAnalisa';

import DataPeramalan from './DataPeramalan';
import KelolaGrafikPeramalan from '../components/KelolaGrafikPeramalan';

import analisa from '../img/analisa.jpg';

class ProsesData extends Component {
  componentWillMount() {
    // jika ada data lakukan analisa
    if (this.props.state.data.length) {
      this.props.modelData();
      this.props.koefesisenDeterminasi();
    }
  }
  render() {
    const { model, r2, data } = this.props.state;
    const { koefesienKorelasiAB } = this.props;
    if (!data.length)
      return <p>Belum Ada Data, Tidak Bisa melakukan Analisa</p>;
    if (!model) return <p>Loading...</p>;

    return (
      <Container fluid>
        <Row className="mt-5">
          <Col xs="12" md="6" lg="3">
            <Card>
              <Card.Img variant="top" src={analisa} />
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
          <Col xs="12" md="6" lg="3" className="mb-5">
            <Card>
              <Card.Body>
                <h4 className="text-center mb-5">Tabel Persamaan</h4>
                <TablePersamaan model={model} r2={r2} />
              </Card.Body>
            </Card>
          </Col>
          <Col xs="12" md="12" lg="6">
            <Card>
              <Card.Body>
                <h4 className="text-center mb-5">Tabel Korelasi Variable</h4>
                <TableKorelasiVariable
                  data={data}
                  koefesienKorelasiAB={koefesienKorelasiAB}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="mt-3 mb-5">
          <Col xs="12">
            <Card>
              <Card.Body>
                <h4 className="text-center mb-5">Tabel Data Perkebunan</h4>
                <TableDataPerkebunanAnalisa data={data} model={model} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col xs="12" className="mb-5">
            <Card>
              <Card.Body>
                <KelolaGrafikPeramalan
                  model={model}
                  data={data}
                  r2={r2}
                  koefesienKorelasiAB={koefesienKorelasiAB}
                />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default class DataPeramalanPage extends Component {
  render() {
    return (
      <Subscribe to={[DataPeramalan]}>
        {data => <ProsesData {...data} />}
      </Subscribe>
    );
  }
}
