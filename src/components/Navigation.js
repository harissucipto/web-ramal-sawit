import React from 'react';
import { withRouter } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import * as ROUTES from '../constants/routes';

const linkMaker = (pathname, history) => (route, title) => (
  <ListGroup.Item
    active={pathname === route}
    action
    onClick={() => history.push(route)}
  >
    {title}
  </ListGroup.Item>
);

const Navigation = ({ location, history }) => {
  const link = linkMaker(location.pathname, history);

  return (
    <ListGroup>
      {link(ROUTES.DASHBOARD, 'Dashboard')}
      {link(ROUTES.ADMIN, 'Data Admin')}
      {link(ROUTES.PERAMALAN, 'Sistem Peramalan')}
      {link(ROUTES.DATA, 'Data Peramalan')}
      {link(ROUTES.HITUNG, 'Hitung Peramalan')}
      {link(ROUTES.GRAFIK, 'Grafik Peramalan')}
    </ListGroup>
  );
};

export default withRouter(Navigation);
