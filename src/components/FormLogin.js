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
    password: ''
  };

  login = e => {
    e.preventDefault();
    const { email, password } = this.state;

    this.props.login(email, password);
  };

  render() {
    const { email, password } = this.state;
    const { erorText, loading } = this.props;

    return (
      <form onSubmit={this.login}>
        {erorText && (
          <Alert variant="danger" width="100%">
            Error! {erorText}
          </Alert>
        )}
        {loading && <p>Loading...</p>}

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
            <Button block type="submit" style={{ backgroundColor: 'green' }}>
              Login
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}
