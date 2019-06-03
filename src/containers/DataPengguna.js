import { Container } from 'unstated';
import { auth, database } from '../data/config';
import firebase from 'firebase';

const resetPengguna = {
  uid: '',
  nama: '',
  email: '',
  nomorTelepon: '',
  alamat: '',
  password: '',
  erorText: '',
  erorPassword: '',
  erorAkun: '',
  loading: false,
  loadingAkun: false
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
      this.setState({ uid, email, password, loading: false });
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

  updateAkun = async data => {
    this.setState({ loadingAkun: true });
    console.log(data, 'ini data');
    await database
      .ref(`akun/${this.state.uid}`)
      .set({
        nama: data.nama,
        nomorTelepon: data.nomorTelepon,
        alamat: data.alamat
      })
      .catch({ loadingAkun: false });

    const user = firebase.auth().currentUser;

    await user.updateEmail(data.email).catch(e =>
      this.setState({
        erorAkun:
          'Tidak bisa memakai email tersebut silahkan pakai email lainnya'
      })
    );

    this.setState({ ...data, loadingAkun: false });
  };

  updatePassword = async password => {
    this.setState({ loadng: true });

    const user = firebase.auth().currentUser;

    await user.updatePassword(password).catch(e =>
      this.setState({
        loading: false,
        erorPassword: 'Error tidak bisa mengupdate password mu!'
      })
    );

    this.setState({ password, loading: false });
  };

  logout = async () => {
    await auth().signOut();

    this.setState({
      ...resetPengguna
    });
  };
}

export default DataPengguna;
