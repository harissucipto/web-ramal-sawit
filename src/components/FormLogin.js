import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';
import Alert from 'react-bootstrap/Alert';

const Input = styled.input`
  width: 100%;
  padding-left: 10px;
`;

export default class FormLogin extends Component {
  state = {
    email: '',
    password: '',
    erorText: ''
  };

  login = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
  };

  render() {
    const { email, password, erorText } = this.state;

    return (
      <form onSubmit={this.login}>
        <Row className="text-center">
          {erorText && <Alert type="error">{erorText}</Alert>}
        </Row>

        <Row className="mb-3">
          <Col md="4">Email:</Col>
          <Col xs>
            <Input
              type="email"
              required
              value={email}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ email: value })
              }
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="4">Password:</Col>
          <Col>
            <Input
              type="password"
              required
              value={password}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ password: value })
              }
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Button block type="submit">
              Login
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}
