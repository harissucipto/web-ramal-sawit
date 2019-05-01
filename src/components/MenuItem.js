import React from 'react';
import { withRouter } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const MenuItem = ({ history, pathname, img, title, desc, btn }) => {
  return (
    <Card>
      <Card.Img variant="top" src={img} height="250" />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button onClick={() => history.push(pathname)} variant="primary">
          {btn}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default withRouter(MenuItem);
