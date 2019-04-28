import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

const Header = () => {
  return (
    <Navbar style={{ backgroundColor: 'green' }} sticky="top">
      <Navbar.Brand href="#home" className="text-white">
        SISKAWIT
      </Navbar.Brand>
      <Navbar.Collapse className="justify-content-end">
        <Button className="btn-danger">Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
