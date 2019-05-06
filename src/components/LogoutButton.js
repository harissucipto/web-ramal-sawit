import React from 'react';
import { Subscribe } from 'unstated';

import DataPengguna from '../containers/DataPengguna';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ProsesData = ({ logout }) => (
  <NavDropdown.Item onClick={logout}>
    <span style={{ color: 'red' }}>logout</span>
  </NavDropdown.Item>
);

const LogoutButton = () => (
  <Subscribe to={[DataPengguna]}>{data => <ProsesData {...data} />}</Subscribe>
);

export default LogoutButton;
