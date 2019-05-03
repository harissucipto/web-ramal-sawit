import { Container } from 'unstated';
import { th } from 'date-fns/esm/locale';

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
}

export default DataPengguna;
