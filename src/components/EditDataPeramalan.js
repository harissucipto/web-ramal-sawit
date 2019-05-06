import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import InputDate from 'react-date-picker';
import moment from 'moment';
import * as NAMA from '../constants/namaData';

class TambahDataPeramalan extends React.Component {
  state = {
    show: false,
    x1: '',
    x2: '',
    x3: '',
    x4: '',
    y: '',
    error: ''
  };

  componentWillMount() {
    const { x1, x2, x3, x4, y, id, tanggal } = this.props.item;
    this.setState({
      id,
      x1,
      x2,
      x3,
      x4,
      y,
      tanggal
    });
  }

  handleClose = () => {
    this.editData();
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  tutup = () => {
    this.setState({ show: false });
  };

  editData = () => {
    const { x1, x2, x3, x4, y, id, tanggal } = this.state;
    const newData = {
      id,
      tanggal,
      x1: Number(x1),
      x2: Number(x2),
      x3: Number(x3),
      x4: Number(x4),
      y: Number(y)
    };

    this.props.onEdit(newData);
  };

  saveState = event => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    return (
      <>
        <Button variant="warning" onClick={this.handleShow}>
          Edit Data
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
            <Modal.Title>Edit Data </Modal.Title>
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
