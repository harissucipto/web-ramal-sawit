import { Container } from 'unstated';
import shortid from 'shortid';
import Data, { data } from '../data';
import moment from 'moment';
import math from 'mathjs';
import { totalArr, arrPangkatDua, arrKaliArr } from '../utils/hitung';

class DataPeramalan extends Container {
  state = {
    data,
    loading: false,
    model: null
  };

  fetch = () => {
    const { x1, x2, x3, x4, y } = Data;
    const data = x1.map((item, i) => ({
      id: shortid(),
      tanggal: moment(),
      x1: x1[i],
      x2: x2[i],
      x3: x3[i],
      x4: x4[i],
      y: y[i]
    }));

    this.setState({ data });
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
}

export default DataPeramalan;
