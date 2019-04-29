import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';
import moment from 'moment';
import shortid from 'shortid';

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
    const { x1, x2, x3, x4, y } = this.state;
    const newData = {
      id: shortid(),
      tanggal: moment(),
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
        <Button variant="primary" onClick={this.handleShow}>
          Tambah Data
        </Button>

        <Modal show={this.state.show} onHide={this.tutup} size="lg">
          <Modal.Header closeButton>
            <Modal.Title>Tambah Data Training</Modal.Title>
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

            <InputGroup
              className="mb-3"
              onChange={event => this.setState({ y: event.target.value })}
            >
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Produksi</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup
              className="mb-3"
              onChange={event => this.setState({ x1: event.target.value })}
            >
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Pupuk</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup
              className="mb-3"
              onChange={event => this.setState({ x2: event.target.value })}
            >
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Curah Hujan</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup
              className="mb-3"
              onChange={event => this.setState({ x3: event.target.value })}
            >
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">Jarak Tanam</InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>

            <InputGroup
              className="mb-3"
              onChange={event => this.setState({ x4: event.target.value })}
            >
              <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon3">
                  Ketinggian Tempat
                </InputGroup.Text>
              </InputGroup.Prepend>
              <FormControl id="basic-url" aria-describedby="basic-addon3" />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.tutup}>
              Batal
            </Button>
            <Button variant="primary" onClick={this.handleClose}>
              Simpan Data
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default TambahDataPeramalan;
