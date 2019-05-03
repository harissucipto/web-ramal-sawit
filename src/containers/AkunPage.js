import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import DataPengguna from './DataPengguna';

class ProsesData extends Component {
  render() {
    const { state } = this.props;
    const { uid, email, nama, nomorTelepon, alamat } = state;

    if (!uid.length) return <p>Silahkan Login...</p>;

    return (
      <Row className="mt-5 justify-content-center">
        <Col md="6">
          <Card border>
            <Card.Body>
              <Row>
                <Col md="8">
                  <h5>Informasin Akun Login</h5>
                </Col>
                <Col md="4">
                  <Button className="mr-2" variant="warning">
                    Edit
                  </Button>
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
        <Subscribe to={[DataPengguna]}>
          {data => <ProsesData {...data} />}
        </Subscribe>
      </Container>
    );
  }
}
