import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Subscribe } from 'unstated';

import DataPengguna from '../containers/DataPengguna';

export default class Footer extends Component {
  render() {
    return (
      <Subscribe to={[DataPengguna]}>
        {data =>
          data.state.uid ? (
            <Navbar
              variant="dark"
              style={{ backgroundColor: 'green', paddingTop: '10px' }}
              className="justify-content-center"
              sticky="bottom"
            >
              <p className="text-white">Copyright - SAHPURTRA - 2019</p>
            </Navbar>
          ) : null
        }
      </Subscribe>
    );
  }
}
