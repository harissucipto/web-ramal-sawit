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
import perkebunan from '../img/perkebunan.jpg';

import palm from '../img/icon-palm.png';

class ProsesData extends Component {
  render() {
    const { state, login } = this.props;

    if (state.uid) return <Redirect to={HOME} />;

    return (
      <Row
        className="justify-content-center"
        style={{
          backgroundImage: `url(${perkebunan})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          height: ' 100vh',
          paddingTop: '10%'
        }}
      >
        <Col md="6" lg="4">
          <Card border>
            <Card.Body>
              <div
                className="text-center mb-3"
                style={{
                  backgroundColor: 'green',
                  padding: '10px',
                  color: 'white'
                }}
              >
                <img
                  src={palm}
                  width="30"
                  height="30"
                  className="d-inline-block align-top mb-2 mt-3"
                  alt="React Bootstrap logo"
                />
                <h5>SISKAWIT</h5>
              </div>

              <hr />
              <FormLogin login={login} {...state} />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default class LoginPage extends Component {
  render() {
    return (
      <Container fluid>
        <Subscribe to={[DataPengguna]}>
          {data => <ProsesData {...data} />}
        </Subscribe>
      </Container>
    );
  }
}
