import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

import Alert from 'react-bootstrap/Alert';
import moment from 'moment';
import shortid from 'shortid';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputDate from 'react-date-picker';
import * as NAMA from '../constants/namaData';

class TambahDataPeramalan extends React.Component {
  state = {
    show: false,
    x1: '',
    x2: '',
    x3: '',
    x4: '',
    y: '',
    tanggal: moment(),
    error: ''
  };

  handleClose = () => {
    this.tambahBaru();
    this.setState({ show: false });
  };

  tutup = () => {
    this.setState({ show: false });
  };

  // checkInput = () => {
  //   const { x1, x2, x3, x4, y } = this.state;
  //   const data = [x1, x2, x3, x4, y];
  //   console.log(isNumber(x1[0]));

  //   const error = data.some(item => !isNumber(item));
  //   console.log(error, 'ini');
  //   if (error) {
  //     this.setState({ error: 'Error inputanmu ada salah' });
  //     return false;
  //   }

  //   return true;
  // };

  tambahBaru = () => {
    const { x1, x2, x3, x4, y, tanggal } = this.state;
    const newData = {
      id: shortid(),
      tanggal,
      x1: Number(x1),
      x2: Number(x2),
      x3: Number(x3),
      x4: Number(x4),
      y: Number(y)
    };

    console.log(newData, 'new Data');

    this.props.onTambah(newData);
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  render() {
    return (
      <>
        <Button
          size="lg"
          variant="primary"
          style={{ backgroundColor: 'green' }}
          onClick={this.handleShow}
        >
          Tambah Data
        </Button>

        <Modal show={this.state.show} onHide={this.tutup}>
          <Modal.Header
            closeButton
            className=" mb-3"
            style={{
              backgroundColor: 'green',
              padding: '10px',
              color: 'white'
            }}
          >
            <Modal.Title>
              <h4>Tambah Data Training</h4>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {this.state.error && (
              <Alert
                dismissible
                variant="danger"
                onClose={() => this.setState({ error: '' })}
              >
                Erorr, data yang anda masukan salah!
              </Alert>
            )}

            <Row>
              <Col xs="4">Tanggal</Col>
              <Col xs="8">
                <label name="tanggal" style={{ width: '100%' }}>
                  <InputDate
                    required
                    style={{ paddingLeft: '10px' }}
                    format="dd-MM-yyyy"
                    value={this.state.tanggal.toDate()}
                    onChange={tanggal =>
                      this.setState({ tanggal: moment(tanggal) })
                    }
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="4">Produksi</Col>
              <Col xs="8">
                <label name="produksi" style={{ width: '100%' }}>
                  <input
                    style={{ paddingLeft: '10px' }}
                    required
                    value={this.state.y}
                    onChange={e => this.setState({ y: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="4">{NAMA.textX[0]}</Col>
              <Col xs="8">
                <label name="x1">
                  <input
                    style={{ paddingLeft: '10px' }}
                    required
                    value={this.state.x1}
                    onChange={e => this.setState({ x1: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="4">{NAMA.textX[1]}</Col>
              <Col xs="8">
                <label name="x2">
                  <input
                    style={{ paddingLeft: '10px' }}
                    required
                    value={this.state.x2}
                    onChange={e => this.setState({ x2: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="4">{NAMA.textX[2]}</Col>
              <Col xs="8">
                <label name="x3">
                  <input
                    style={{ paddingLeft: '10px' }}
                    required
                    value={this.state.x3}
                    onChange={e => this.setState({ x3: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="4">{NAMA.textX[3]}</Col>
              <Col xs="8">
                <label name="x4">
                  <input
                    style={{ paddingLeft: '10px' }}
                    required
                    value={this.state.x4}
                    onChange={e => this.setState({ x4: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.tutup}>
              Batal
            </Button>
            <Button
              style={{
                backgroundColor: 'green',

                color: 'white'
              }}
              onClick={this.handleClose}
            >
              Simpan Data
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TambahDataPeramalan;
