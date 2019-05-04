import React from 'react';
import { Subscribe } from 'unstated';

import DataPengguna from '../containers/DataPengguna';
import NavDropdown from 'react-bootstrap/NavDropdown';

const ProsesData = ({ logout }) => (
  <NavDropdown.Item onClick={logout}>logout</NavDropdown.Item>
);

const LogoutButton = () => (
  <Subscribe to={[DataPengguna]}>{data => <ProsesData {...data} />}</Subscribe>
);

export default LogoutButton;
