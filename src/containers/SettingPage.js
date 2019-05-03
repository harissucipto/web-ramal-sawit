import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import DataPengguna from './DataPengguna';
import FormEditAkun from '../components/EditAkunPengguna';
import EditPassword from '../components/EditPassword';

class ProsesData extends Component {
  render() {
    const { state, updateAkun, updatePassword } = this.props;
    console.log(state, 'ini state');

    if (!state.uid) return <p>Silahkan Login...</p>;

    return (
      <Row className="mt-5 justify-content-center">
        <Col md="8">
          <Card border>
            <Card.Body>
              <Row className="mb-3">
                <Col md="8">
                  <h5>Rubah Informasi Akun</h5>
                </Col>
              </Row>
              <hr />
              <FormEditAkun {...state} updateAkun={updateAkun} />
            </Card.Body>
          </Card>
          <Card className="mt-5" border>
            <Card.Body>
              <Row className="mb-3">
                <Col md="8">
                  <h5>Rubah Password</h5>
                </Col>
              </Row>
              <hr />
              <EditPassword {...state} updatePassword={updatePassword} />
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
        <h3 className="text-center mb-5 mt-5">Setting Akun</h3>
        <Subscribe to={[DataPengguna]}>
          {data => <ProsesData {...data} />}
        </Subscribe>
      </Container>
    );
  }
}
