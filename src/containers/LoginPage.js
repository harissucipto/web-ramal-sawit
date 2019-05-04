import React, { Component } from 'react';
import { Subscribe } from 'unstated';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Redirect } from 'react-router-dom';

import { HOME } from '../constants/routes';
import DataPengguna from './DataPengguna';
import FormLogin from '../components/FormLogin';

class ProsesData extends Component {
  render() {
    const { state, login } = this.props;

    if (state.uid) return <Redirect to={HOME} />;

    return (
      <Row className="mt-5 justify-content-center">
        <Col md="8">
          <Card border>
            <Card.Body>
              <Row className="mb-3">
                <Col md="8">
                  <h5>Login SISKAWIT</h5>
                </Col>
              </Row>
              <hr />
              <FormLogin login={login} />
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
