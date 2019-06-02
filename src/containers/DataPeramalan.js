import { Container } from 'unstated';
import shortid from 'shortid';
import Data, { data } from '../data';
import moment from 'moment';
import math from 'mathjs';
import _ from 'lodash';

import { totalArr, arrPangkatDua, arrKaliArr } from '../utils/hitung';
import { database } from '../data/config';

class DataPeramalan extends Container {
  state = {
    data,
    loading: false,
    model: null,
    r2: null
  };

  fetch = async () => {
    this.setState({ loading: true });
    const tempData = await database
      .ref()
      .child('dataPerkebunan')
      .once('value')
      .catch({ loading: false });
    console.log(_.toArray(tempData.val()), 'n');

    const dataKeArray = _.toArray(tempData.val());
    const bershikanData = dataKeArray.length
      ? dataKeArray
          .filter(item => item)
          .map(item => ({ ...item, tanggal: moment(item.tanggal) }))
      : [];

    console.log(bershikanData, 'data bersih');

    this.setState({ data: bershikanData, loading: false });
  };

  tambahData = baru => {
    console.log(baru, 'ini baru');
    this.setState({
      data: [...this.state.data, baru]
    });
  };

  hapusData = id => {
    console.log(id, 'ini id');
    this.setState({
      data: this.state.data.filter(item => item.id !== id)
    });
  };

  editData = newData => {
    const data = this.state.data.filter(item => item.id !== newData.id);
    this.setState({
      data: [...data, newData]
    });
  };

  modelData = () => {
    let dataX = this.state.data.map(item => [
      item.x1,
      item.x2,
      item.x3,
      item.x4
    ]);
    let dataY = this.state.data.map(item => [item.y]);

    // eslint-disable-next-line no-undef
    let model = new ML.MultivariateLinearRegression(dataX, dataY);
    this.setState({ model });
    return model;
  };

  koefesienKorelasiAB = (A, B) => {
    const n = B.length;
    const EBA = totalArr(arrKaliArr(B, A));
    const EB = totalArr(B);
    const EA = totalArr(A);
    const EBKuadrat = totalArr(arrPangkatDua(B));
    const EAKuadrat = totalArr(arrPangkatDua(A));

    const atas = n * EBA - EB * EA;
    const bawah = math.sqrt(
      (n * EBKuadrat - math.pow(EB, 2)) * (n * EAKuadrat - math.pow(EA, 2))
    );

    return atas / bawah;
  };

  koefesisenDeterminasi = () => {
    const model = this.modelData();
    const { data } = this.state;
    const y = data.map(item => item.y);

    // // SSR / SST
    const predicatedY = y.map((item, i) =>
      model.predict([data[i].x1, data[i].x2, data[i].x3, data[i].x4])
    );
    const meanY = math.mean(y);
    const sst = totalArr(y.map(item => math.pow(item - meanY, 2)));
    const ssr = totalArr(predicatedY.map(item => math.pow(item - meanY, 2)));
    const r2 = ssr / sst;

    this.setState({ r2 });
  };
}

export default DataPeramalan;
