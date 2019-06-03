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

export default class EditAkunPengguna extends Component {
  state = {
    passwordLama: '',
    tempPasswordLama: '',
    passwordBaru: '',
    ulangiPasswordBaru: '',
    erorText: ''
  };

  componentWillMount() {
    const { password } = this.props;

    this.setState({
      passwordLama: password
    });
  }

  rubahPassword = e => {
    e.preventDefault();
    const {
      passwordLama,
      tempPasswordLama,
      passwordBaru,
      ulangiPasswordBaru
    } = this.state;

    if (passwordLama !== tempPasswordLama) {
      this.setState({
        erorText: 'Password Lama Tidak Sesuai',
        tempPasswordLama: '',
        passwordBaru: '',
        ulangiPasswordBaru: ''
      });
      return;
    }

    if (passwordBaru.length < 6) {
      this.setState({
        erorText: 'Panjang Password Minimal harus 6 karakter!!',
        tempPasswordLama: '',
        passwordBaru: '',
        ulangiPasswordBaru: ''
      });
      return;
    }

    if (passwordBaru !== ulangiPasswordBaru) {
      this.setState({
        erorText: 'Ulangi Password Baru Harus Sama',
        tempPasswordLama: '',
        passwordBaru: '',
        ulangiPasswordBaru: ''
      });
      return;
    }

    this.props.updatePassword(ulangiPasswordBaru);
    this.setState({
      erorText: '',
      tempPasswordLama: '',
      passwordBaru: '',
      passwordLama: ulangiPasswordBaru,
      ulangiPasswordBaru: ''
    });
  };

  render() {
    const {
      tempPasswordLama,
      passwordBaru,
      ulangiPasswordBaru,
      erorText
    } = this.state;

    const erorPassword = this.props.erorPassword;

    return (
      <form onSubmit={this.rubahPassword}>
        {erorText && (
          <Alert variant="danger" width="100%">
            {erorText}
          </Alert>
        )}
        {erorPassword && (
          <Alert variant="danger" width="100%">
            {erorPassword}
          </Alert>
        )}
        {this.props.loading && <p>Loading...</p>}

        <Row className="mb-3">
          <Col md="4">Password Lama:</Col>
          <Col xs>
            <Input
              type="password"
              required
              value={tempPasswordLama}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ tempPasswordLama: value })
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
                this.setState({ passwordBaru: value })
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
                this.setState({ ulangiPasswordBaru: value })
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
