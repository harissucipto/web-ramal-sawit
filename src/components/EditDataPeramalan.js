import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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

  tutup = () => {
    this.setState({ show: false });
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

  saveState = event => {
    console.log(event.target);
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    console.log(this.props.item, 'ini edit data');
    return (
      <>
        <Button variant="warning" onClick={this.handleShow}>
          Edit Data
        </Button>

        <Modal show={this.state.show} onHide={this.tutup}>
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

            <Row>
              <Col xs="3">Produksi</Col>
              <Col xs="9">
                <label name="y">
                  <input
                    value={this.state.y}
                    onChange={e => this.setState({ y: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="3">Pupuk</Col>
              <Col xs="9">
                <label name="x1">
                  <input
                    value={this.state.x1}
                    onChange={e => this.setState({ x1: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="3">Curah Hujan</Col>
              <Col xs="9">
                <label name="x2">
                  <input
                    value={this.state.x1}
                    onChange={e => this.setState({ x2: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="3">Jarak Tanam</Col>
              <Col xs="9">
                <label name="x3">
                  <input
                    value={this.state.x3}
                    onChange={e => this.setState({ x3: e.target.value })}
                  />
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs="3">Ketinggian Tempat</Col>
              <Col xs="9">
                <label name="x4">
                  <input
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
