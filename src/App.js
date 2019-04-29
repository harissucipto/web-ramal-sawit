import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'unstated';

import DataPeramalan from './containers/DataPeramalan';

import * as ROUTES from './constants/routes';
import Layout from './components/Layout';
import HomePage from './containers/HomePage';
import AdminPage from './containers/AdminPage';
import DataPeramalanPage from './containers/DataPeramalanPage';
import HitungPeramalanPage from './containers/HitungPeramalanPage';

const App = () => {
  let dataPeramalan = new DataPeramalan();

  return (
    <Provider inject={[dataPeramalan]}>
      <Router>
        <Layout>
          <Route exact path={ROUTES.DASHBOARD} component={HomePage} />
          <Route path={ROUTES.ADMIN} component={AdminPage} />
          <Route path={ROUTES.DATA} component={DataPeramalanPage} />
          <Route path={ROUTES.HITUNG} component={HitungPeramalanPage} />
        </Layout>
      </Router>
    </Provider>
  );
};

export default App;
