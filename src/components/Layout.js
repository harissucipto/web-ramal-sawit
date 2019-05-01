import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import Navigation from './Navigation';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container fluid>
      <Row style={{ marginTop: '40px' }}>
        <Col lg="3">
          <Navigation />
        </Col>
        <Col lg="7">{children}</Col>
      </Row>
    </Container>
  </>
);

export default Layout;
