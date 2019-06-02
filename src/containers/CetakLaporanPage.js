import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Redirect } from 'react-router-dom';

import * as ROUTES from '../constants/routes';

import CetakLaporan from '../components/CetakLaporan';
import DataPeramalan from './DataPeramalan';
import DataPengguna from './DataPengguna';

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

    if (!data.length)
      return <p>Belum Ada Data, Tidak Bisa melakukan Analisa</p>;
    if (!model) return <p>Loading...</p>;

    return (
      <Container fluid>
        <Row className="mt-3 mb-5">
          <Col xs="12">
            <Card style={{ borderColor: 'green', borderWidth: '4px' }}>
              <Card.Body>
                <CetakLaporan data={data} model={model} r2={r2} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default class CetakLaporanPage extends Component {
  render() {
    return (
      <Subscribe to={[DataPeramalan, DataPengguna]}>
        {(dataPeramalan, dataPengguna) => {
          return dataPengguna.state.uid ? (
            <ProsesData {...dataPeramalan} />
          ) : (
            <Redirect to={ROUTES.LOGIN} />
          );
        }}
      </Subscribe>
    );
  }
}
