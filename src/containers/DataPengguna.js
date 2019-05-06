import { Container } from 'unstated';

const resetPengguna = {
  uid: '',
  nama: '',
  email: '',
  nomorTelepon: '',
  alamat: '',
  password: '',
  erorText: ''
};

class DataPengguna extends Container {
  state = {
    // ...resetPengguna
    uid: '3232',
    nama: 'SAHPUTRA',
    email: 'admin@gmail.com',
    nomorTelepon: '08932034',
    alamat: 'JL SEI',
    password: '123',
    textEror: ''
  };

  login = (email, password) => {
    const correctEmail = email === 'admin@gmail.com';
    this.setState({ erorText: '' });
    const correctPassword = password === '123';
    if (correctEmail && correctPassword) {
      this.setState({
        uid: '3232',
        nama: 'SAHPUTRA',
        email: 'admin@gmail.com',
        nomorTelepon: '08932034',
        alamat: 'JL SEI',
        password: '123',
        textEror: ''
      });
    } else {
      this.setState({
        erorText: 'Error Password atau Email Salah!'
      });
    }
  };

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
