import React from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container';
import { Subscribe } from 'unstated';

import * as ROUTES from '../constants/routes';
import DataPengguna from '../containers/DataPengguna';
import LogoutButton from './LogoutButton';
import palm from '../img/icon-palm.png';

const Header = ({ location, history, logout }) => {
  const pathname = location.pathname;
  return (
    <Subscribe to={[DataPengguna]}>
      {data =>
        data.state.uid ? (
          <Container
            fluid
            style={{ backgroundColor: 'green', padding: '10px' }}
          >
            <Row>
              <Col md="12" className="text-center text-white">
                <Navbar.Brand onClick={() => history.push(ROUTES.HOME)}>
                  <img
                    src={palm}
                    width="30"
                    height="30"
                    className="d-inline-block align-top mr-3"
                    alt="React Bootstrap logo"
                  />
                  <h3 className="mt-3">SISKAWIT</h3>
                </Navbar.Brand>
              </Col>
            </Row>
            <Row className="mt-1">
              <Col>
                <Navbar sticky="top" expand="md" variant="dark">
                  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                  <Navbar.Collapse className="justify-content-center">
                    <Nav className="mr-2">
                      <Nav.Link
                        active={pathname === ROUTES.HOME}
                        onClick={() => history.push(ROUTES.HOME)}
                      >
                        <h5>Home</h5>
                      </Nav.Link>
                      <Nav.Link
                        active={pathname === ROUTES.LATIH}
                        onClick={() => history.push(ROUTES.LATIH)}
                      >
                        <h5>Latih Model</h5>
                      </Nav.Link>
                      <Nav.Link
                        active={pathname === ROUTES.ANALISA}
                        onClick={() => history.push(ROUTES.ANALISA)}
                      >
                        <h5>Analisa Model</h5>
                      </Nav.Link>
                      <Nav.Link
                        active={pathname === ROUTES.PERAMALAN}
                        onClick={() => history.push(ROUTES.PERAMALAN)}
                      >
                        <h5>Peramalan Produksi</h5>
                      </Nav.Link>
                      <Nav.Link
                        active={pathname === ROUTES.ABOUT}
                        onClick={() => history.push(ROUTES.ABOUT)}
                      >
                        <h5>About</h5>
                      </Nav.Link>

                      <NavDropdown
                        title="Akun"
                        id="collasible-nav-dropdown"
                        style={{ fontSize: '18px' }}
                        active={
                          pathname === ROUTES.AKUN ||
                          pathname === ROUTES.SETTING
                        }
                      >
                        <NavDropdown.Item
                          active={pathname === ROUTES.AKUN}
                          onClick={() => history.push(ROUTES.AKUN)}
                        >
                          <p>Informasi</p>
                        </NavDropdown.Item>
                        <NavDropdown.Item
                          active={pathname === ROUTES.SETTING}
                          onClick={() => history.push(ROUTES.SETTING)}
                        >
                          {' '}
                          <p>Setting</p>
                        </NavDropdown.Item>
                        <hr />
                        <LogoutButton logout={logout} />
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
              </Col>
            </Row>
          </Container>
        ) : null
      }
    </Subscribe>
  );
};

export default withRouter(Header);
