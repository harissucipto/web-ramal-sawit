import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';

export default class Footer extends Component {
  render() {
    return (
      <Navbar bg="dark" className="justify-content-center" sticky="bottom">
        <p className="text-white">Copyright - SAHPURTRA - 2019</p>
      </Navbar>
    );
  }
}
