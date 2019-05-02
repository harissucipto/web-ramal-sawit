import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as ROUTES from '../constants/routes';

import palm from '../img/icon-palm.png';

const Header = ({ location, history }) => {
  const pathname = location.pathname;
  return (
    <Navbar sticky="top" expand="md" bg="dark" variant="dark">
      <Navbar.Brand onClick={() => history.push(ROUTES.HOME)}>
        <img
          src={palm}
          width="30"
          height="30"
          className="d-inline-block align-top mr-3"
          alt="React Bootstrap logo"
        />
        SISKAWIT
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
        <Nav className="mr-2">
          <Nav.Link
            active={pathname === ROUTES.HOME}
            onClick={() => history.push(ROUTES.HOME)}
          >
            Home
          </Nav.Link>
          <Nav.Link
            active={pathname === ROUTES.LATIH}
            onClick={() => history.push(ROUTES.LATIH)}
          >
            Latih Model
          </Nav.Link>
          <Nav.Link
            active={pathname === ROUTES.ANALISA}
            onClick={() => history.push(ROUTES.ANALISA)}
          >
            Analisa Model
          </Nav.Link>
          <Nav.Link
            active={pathname === ROUTES.PERAMALAN}
            onClick={() => history.push(ROUTES.PERAMALAN)}
          >
            Peramalan Produksi
          </Nav.Link>
          <Nav.Link
            active={pathname === ROUTES.PETUNJUK}
            onClick={() => history.push(ROUTES.PETUNJUK)}
          >
            Petunjuk
          </Nav.Link>
          <NavDropdown title="Akun" id="collasible-nav-dropdown">
            <NavDropdown.Item
              active={pathname === ROUTES.AKUN}
              onClick={() => history.push(ROUTES.AKUN)}
            >
              Informasi
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3"> Setting</NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Button className="btn-danger">Logout</Button>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Header);
