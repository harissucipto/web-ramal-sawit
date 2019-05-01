import React, { Component } from 'react';
import GrafikData from './GrafikData';
import Row from 'react-bootstrap/Row';

export default class KelolaGrafikPeramalan extends Component {
  componentWillMount() {
    this.props.modelData();
  }

  render() {
    const { model, data } = this.props.state;
    if (!model) return <p>Loading...</p>;

    return (
      <div>
        <Row>
          <GrafikData data={data} model={model} />
        </Row>
      </div>
    );
  }
}
