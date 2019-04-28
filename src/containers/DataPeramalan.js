import { Container } from 'unstated';
import shortid from 'shortid';
import Data from '../data';
import moment from 'moment';

class DataPeramalan extends Container {
  state = {
    data: [],
    loading: false
  };

  fetch = () => {
    const { x1, x2, x3, x4, y } = Data;
    console.log(Data, 'ini data');
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

  tambahData = data => {
    const { x1, x2, x3, x4 } = this.state;
    this.setState({
      x1: x1.concat(data.x1),
      x2: x2.concat(data.x2),
      x3: x3.concat(data.x3),
      x4: x4.concat(data.x4)
    });
  };
}

export default DataPeramalan;
