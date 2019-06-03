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
    email: '',
    nama: '',
    nomorTelepon: '',
    alamat: ''
  };

  componentWillMount() {
    const { nama, email, nomorTelepon, alamat } = this.props;

    this.setState({
      nama,
      email,
      nomorTelepon,
      alamat
    });
  }

  editAkun = event => {
    event.preventDefault();
    this.props.updateAkun(this.state);
  };

  render() {
    const { nama, email, nomorTelepon, alamat } = this.state;
    const tampilanError = this.props.erorAkun;

    console.log(tampilanError, 'ini props nya');

    return (
      <form onSubmit={this.editAkun}>
        {tampilanError && (
          <Alert variant="danger" width="100%">
            {tampilanError}
          </Alert>
        )}
        {this.props.loadingAkun && <p>Loading...</p>}
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
          <Col md="4">Nama:</Col>
          <Col>
            <Input
              type="text"
              required
              value={nama}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ nama: value })
              }
            />
          </Col>
        </Row>
        <Row className="mb-3">
          <Col md="4">Alamat:</Col>
          <Col>
            <Input
              type="text"
              required
              value={alamat}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ alamat: value })
              }
            />
          </Col>
        </Row>
        <Row>
          <Col md="4">Nomor Telepon:</Col>
          <Col>
            <Input
              type="text"
              required
              value={nomorTelepon}
              style={{ width: '100%' }}
              onChange={({ target: { value } }) =>
                this.setState({ nomorTelepon: value })
              }
            />
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Button block type="submit">
              Simpan Perubahan
            </Button>
          </Col>
        </Row>
      </form>
    );
  }
}
