import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container fluid style={{ minHeight: '90vh' }}>
      <Row>
        <Col lg="12">{children}</Col>
      </Row>
    </Container>
    <Footer />
  </>
);

export default Layout;
