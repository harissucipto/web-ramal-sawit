import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';

import DataPeramalan from './containers/DataPeramalan';

import * as ROUTES from './constants/routes';
import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import LatihPage from './containers/LatihPage';
import AnalisaPage from './containers/AnalisaPage';

import AdminPage from './containers/AdminPage';
import HitungPeramalanPage from './containers/HitungPeramalanPage';

const App = () => {
  let dataPeramalan = new DataPeramalan();

  return (
    <Provider inject={[dataPeramalan]}>
      <Router>
        <Layout>
          <Route exact path={ROUTES.HOME} component={HomePage} />
          <Route path={ROUTES.LATIH} component={LatihPage} />
          <Route path={ROUTES.ANALISA} component={AnalisaPage} />

          <Route path={ROUTES.AKUN} component={AdminPage} />
          <Route path={ROUTES.PERAMALAN} component={HitungPeramalanPage} />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
