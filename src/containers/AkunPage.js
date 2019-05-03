import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { withRouter } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import DataPengguna from './DataPengguna';
import { SETTING } from '../constants/routes';

const EditButton = withRouter(({ history }) => (
  <Button
    className="mr-2"
    variant="warning"
    onClick={() => history.push(SETTING)}
  >
    Edit
  </Button>
));

class ProsesData extends Component {
  render() {
    const { state } = this.props;
    const { uid, email, nama, nomorTelepon, alamat } = state;

    if (!uid.length) return <p>Silahkan Login...</p>;

    return (
      <Row className="mt-5 justify-content-center">
        <Col md="8">
          <Card border>
            <Card.Body>
              <Row>
                <Col md="8">
                  <h5>Data Akun</h5>
                </Col>
                <Col md="4">
                  <EditButton />
                  <Button variant="danger">Logout</Button>
                </Col>
              </Row>
              <hr />
              <Row className="mt-3 mb-2">
                <Col md="4" className="text-right">
                  Email :
                </Col>
                <Col md="8">{email}</Col>
              </Row>
              <Row className=" mb-2">
                <Col md="4" className="text-right">
                  Nama :
                </Col>
                <Col md="8">{nama}</Col>
              </Row>
              <Row className="mb-2">
                <Col md="4" className="text-right">
                  Alamat :
                </Col>
                <Col md="8">{alamat}</Col>
              </Row>
              <Row>
                <Col md="4" className="text-right">
                  Nomor Telepon:
                </Col>
                <Col md="8">{nomorTelepon}</Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default class AkunPage extends Component {
  render() {
    return (
      <Container>
        <h3 className="text-center mb-5 mt-5">Informasi Pengguna Login</h3>
        <Subscribe to={[DataPengguna]}>
          {data => <ProsesData {...data} />}
        </Subscribe>
      </Container>
    );
  }
}
