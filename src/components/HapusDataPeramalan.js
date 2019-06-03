import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import 'moment/locale/id';

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

  handleClose = () => {
    this.props.onHapus(this.props.id);
    this.setState({ show: false });
  };

  handleShow = () => {
    this.setState({ show: true });
  };

  tutup = () => {
    this.setState({ show: false });
  };

  render() {
    const { tanggal, x1, x2, x3, x4, y } = this.props.item;
    return (
      <>
        <Button variant="danger" onClick={this.handleShow}>
          Hapus Data
        </Button>

        <Modal show={this.state.show} onHide={this.tutup}>
          <Modal.Header closeButton>
            <Modal.Title>Hapus Data</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ul>
              <li>Tanggal: {tanggal.format('DD-MM-YYYY')}</li>
              <li>Produksi: {y} ton</li>
              <li>
                {NAMA.textX[0]} : {x1}
              </li>
              <li>
                {NAMA.textX[1]} : {x2}
              </li>
              <li>
                {NAMA.textX[2]} : {x3}
              </li>
              <li>
                {NAMA.textX[3]} : {x4}
              </li>
            </ul>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.tutup}>
              Batal
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              OK, Hapus
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TambahDataPeramalan;
