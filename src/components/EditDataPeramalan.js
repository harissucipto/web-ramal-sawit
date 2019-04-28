import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Alert from 'react-bootstrap/Alert';

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

  componentDidMount() {
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

  editData = () => {
    const { x1, x2, x3, x4, y, id, tanggal } = this.state;
    const newData = {
      id,
      tanggal,
      x1,
      x2,
      x3,
      x4,
      y
    };

    this.props.onEdit(newData);
  };

  render() {
    return (
      <>
        <Button variant="warning" onClick={this.handleShow}>
          Edit Data
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Data Training {this.state.id} </Modal.Title>
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
              defaultValue={this.state.y}
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
            <Button variant="secondary" onClick={this.handleClose}>
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
