import { Container } from 'unstated';
import { th } from 'date-fns/esm/locale';

const resetPengguna = {
  uid: '',
  nama: '',
  email: '',
  nomorTelepon: '',
  alamat: '',
  password: ''
};

class DataPengguna extends Container {
  state = {
    uid: '3232',
    nama: 'SAHPUTRA',
    email: 'SAHPUTRA@GMAIL.COM',
    nomorTelepon: '08932034',
    alamat: 'JL SEI',
    password: '123'
  };

  login = (email, password) => {};

  updateAkun = data => {
    console.log(data, 'ini data');
    this.setState({ ...data });
  };

  updatePassword = password => {
    console.log('update', password);
    this.setState({ password });
  };

  logout = () => {
    this.setState({
      ...resetPengguna
    });
  };
}

export default DataPengguna;
