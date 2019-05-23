import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';

import DataPeramalan from './containers/DataPeramalan';
import DataPengguna from './containers/DataPengguna';

import * as ROUTES from './constants/routes';
import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import LatihPage from './containers/LatihPage';
import AnalisaPage from './containers/AnalisaPage';
import PeramalanPage from './containers/PeramalanPage';
import AboutPage from './containers/AboutPage';
import AkunPage from './containers/AkunPage';
import SettingPage from './containers/SettingPage';
import LoginPage from './containers/LoginPage';
import CetakLaporanPage from './containers/CetakLaporanPage';

// Router component untuk melakukan navigasi halaman
// Provider component yang meletekan global

const App = () => {
  let dataPeramalan = new DataPeramalan();

  return (
    <Provider inject={[dataPeramalan, DataPengguna]}>
      <Router>
        <Layout>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.LOGIN} component={LoginPage} />
          <Route path={ROUTES.LATIH} component={LatihPage} />
          <Route path={ROUTES.ANALISA} component={AnalisaPage} />
          <Route path={ROUTES.PERAMALAN} component={PeramalanPage} />
          <Route path={ROUTES.CETAK} component={CetakLaporanPage} />
          <Route path={ROUTES.ABOUT} component={AboutPage} />
          <Route path={ROUTES.AKUN} component={AkunPage} />
          <Route path={ROUTES.SETTING} component={SettingPage} />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
