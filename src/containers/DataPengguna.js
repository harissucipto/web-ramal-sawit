import { Container } from 'unstated';
import { auth, database } from '../data/config';

const resetPengguna = {
  uid: '',
  nama: '',
  email: '',
  nomorTelepon: '',
  alamat: '',
  password: '',
  erorText: '',
  loading: false
};

class DataPengguna extends Container {
  state = {
    ...resetPengguna
    // uid: '3232',
    // nama: 'SAHPUTRA',
    // email: 'admin@gmail.com',
    // nomorTelepon: '08932034',
    // alamat: 'JL SEI',
    // password: '123',
    // textEror: ''
  };

  login = async (email, password) => {
    this.setState({ loading: true, erorText: '' });
    const respon = await auth()
      .signInWithEmailAndPassword(email, password)
      .catch(e =>
        this.setState({
          erorText: 'Username atau Password Salah!',
          loading: false
        })
      );

    if (respon) {
      this.setState({ erorText: '' });
      const { email, uid } = respon.user;
      console.log(email, uid, 'ini data user');
      this.setState({ uid, email, loading: false });
    }
  };

  getDataAkun = async () => {
    console.log(this.state.uid, 'ini uidnya');
    if (!this.state.uid) return;

    this.setState({ loading: true });

    const user = await database
      .ref(`akun/${this.state.uid}`)
      .once('value')
      .catch({ loading: false });

    const { alamat, nomorTelepon, nama } = user.val();

    this.setState({
      loading: false,
      nama,
      nomorTelepon,
      alamat
    });
  };

  updateAkun = data => {
    console.log(data, 'ini data');
    this.setState({ ...data });
  };

  updatePassword = password => {
    console.log('update', password);
    this.setState({ password });
  };

  logout = async () => {
    await auth().signOut();

    this.setState({
      ...resetPengguna
    });
  };
}

export default DataPengguna;
