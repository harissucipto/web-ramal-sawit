import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import styled from 'styled-components';

const Input = styled.input`
  width: 100%;
  padding-left: 10px;
`;

export default class EditAkunPengguna extends Component {
  state = {
    passwordLama: '',
    tempPasswordLama: '',
    passwordBaru: '',
    ulangiPasswordBaru: ''
  };

  componentWillMount() {
    const { password } = this.props;

    this.setState({
      passwordLama: password
    });
  }

  render() {
    const { tempPasswordLama, passwordBaru, ulangiPasswordBaru } = this.state;

    return (
      <form>
        <Row className="mb-3">
          <Col md="4">Password Lama:</Col>
          <Col xs>
            <Input
              type="password"
              required
              value={tempPasswordLama}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ email: value })
              }
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="4">Password Baru:</Col>
          <Col>
            <Input
              type="password"
              required
              value={passwordBaru}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ nama: value })
              }
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="4">Ulangi Password Baru:</Col>
          <Col>
            <Input
              type="password"
              required
              value={ulangiPasswordBaru}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ alamat: value })
              }
            />
          </Col>
        </Row>

        <Row className="mt-5">
          <Col>
            <Button block type="submit" variant="warning">
              Rubah Password
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}
