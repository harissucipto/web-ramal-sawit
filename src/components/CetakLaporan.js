import React, { Component } from 'react';
import ReactToPrint from 'react-to-print';
import Button from 'react-bootstrap/Button';
import math from 'mathjs';

import TableDataPerkebunanAnalisa from './TableDataPerkebunanAnalisa';
import * as Nama from '../constants/namaData';

class ComponentToPrint extends Component {
  render() {
    const { data, model, r2 } = this.props;
    return (
      <div style={{ margin: '3rem' }}>
        <h4 className="text-center mb-5">
          Laporan Sistem Peramalan Kelapa Sawit <br /> Perkebunan PT. Perkebunan
          Nusantara V{' '}
        </h4>
        <TableDataPerkebunanAnalisa
          ref={el => (this.componentRef = el)}
          data={data}
          model={model}
        />
        <div className="mt-4 mb-2">Keterangan:</div>
        <ul>
          <li>
            Rumus Peramalan <b>Produksi</b> Persamaan Peramalan yang digunakan ={' '}
            <b>{Nama.textX[0]}</b> *{model.weights[0]} + <b>{Nama.textX[1]}</b>{' '}
            * {model.weights[1]} + <b>{Nama.textX[2]}</b> * {model.weights[2]} +{' '}
            <b>{Nama.textX[3]}</b> * {model.weights[3]} + {model.weights[4]}.
          </li>
          <li>
            <b>{math.round(r2 * 100)}% </b>jumlah produksi kelapa sawit
            dipengaruhi keempat faktor yang dianalisis, sedangkan{' '}
            <b>{math.round(100 - r2 * 100)}%</b> sisanya dipengaruhi oleh
            faktor-faktor lain yang tidak dianalisis.
          </li>
        </ul>
      </div>
    );
  }
}

class CetakLaporan extends Component {
  render() {
    const { data, model, r2 } = this.props;
    if (!data.length) return <p className="mt-lg-5">Belum Ada Data</p>;
    return (
      <div>
        <div className="text-right">
          <ReactToPrint
            trigger={() => (
              <Button
                size="large"
                style={{
                  paddingLeft: '20px',
                  paddingRight: '20px',
                  marginRight: '3rem'
                }}
              >
                Cetak
              </Button>
            )}
            content={() => this.componentRef}
          />
        </div>
        <ComponentToPrint
          ref={el => (this.componentRef = el)}
          data={data}
          model={model}
          r2={r2}
        />
        ;
      </div>
    );
  }
}

export default CetakLaporan;
